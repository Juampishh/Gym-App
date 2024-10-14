import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "../context/UserContext";

interface FormData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function Register() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const userData = { ...data, type: "client" };

    try {
      const response = await axios.post(
        "https://api-generica-nine.vercel.app/auth/register",
        userData
      );

      if (response.status === 201) {
        const login = await axios.post(
          "https://api-generica-nine.vercel.app/auth/login",
          data
        );
        if (login.status === 200) {
          setUser(login.data.data);
          toast.success("Bienvenido");
          navigate("/home");
        } else {
          console.error("Error al iniciar sesión:", response);
        }
      }
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      <div className="relative">
        <img
          src="../Login/Body.jfif"
          alt=""
          className="object-cover w-full min-h-screen"
        />
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-black opacity-80" />

        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center ">
          <div className="absolute flex flex-col items-center justify-center w-full gap-2 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center w-11/12 gap-4 mt-5"
            >
              <input
                className="w-full p-4 font-sans text-sm font-semibold text-white placeholder-opacity-50 bg-black border-[1px] border-gray-500 rounded-full"
                type="text"
                placeholder="INGRESAR NOMBRE DE USUARIO"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className="text-xs text-red-500">
                  Nombre de usuario requerido
                </span>
              )}

              <input
                className="w-full p-4 font-sans text-sm font-semibold text-white placeholder-opacity-50 bg-black border-[1px] border-gray-500 rounded-full"
                type="text"
                placeholder="INGRESAR NOMBRE"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-xs text-red-500">Nombre requerido</span>
              )}

              <input
                className="w-full p-4 font-sans text-sm font-semibold text-white placeholder-opacity-50 bg-black border-[1px] border-gray-500 rounded-full"
                type="text"
                placeholder="INGRESAR APELLIDO"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="text-xs text-red-500">Apellido requerido</span>
              )}

              <input
                className="w-full p-4 font-sans text-sm font-semibold text-white placeholder-opacity-50 bg-black border-[1px] border-gray-500 rounded-full"
                type="email"
                placeholder="INGRESAR CORREO ELECTRÓNICO"
                {...register("email", {
                  required: "Correo electrónico requerido",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Correo electrónico inválido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}

              <input
                className="w-full p-4 font-sans text-sm font-semibold text-white placeholder-opacity-50 bg-black border-[1px] border-gray-500 rounded-full"
                type="password"
                placeholder="INGRESAR CONTRASEÑA"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-xs text-red-500">
                  Contraseña requerida
                </span>
              )}

              <div className="mt-5">
                <motion.button
                  className="w-full p-3 text-sm font-bold text-black rounded-full bg-amarillo"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="submit"
                >
                  REGISTRAR
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        <motion.div
          className="absolute flex justify-center w-full text-center bottom-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="absolute mt-2 ml-3 text-[11px] font-bold sm:text-xs text-mobile-xs">
            TU GIMNASIO AL ALCANCE DE TUS MANOS.
          </h1>
          <img className="w-full" src="../Login/Rectangle 13.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
}
