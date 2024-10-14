import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "../context/UserContext";

interface FormData {
  username: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const { setUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleShowInput = () => {
    setShowInput(true);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        "https://api-generica-nine.vercel.app/auth/login",
        data
      );
      if (response.status === 200) {
        setUser(response.data.data);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      toast.error("Usuario o contraseña incorrectos");
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

        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center mb-36"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="../Login/Vector (1).png" alt="" className="w-1/2" />
        </motion.div>

        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center mt-10">
          <motion.div
            className={`z-0 w-4/5 mt-24 mobile-sm mobile-md  ${
              showInput
                ? "bg-gradient-to-r h-24 from-negroClaro to-negro opacity-40 p-6 rounded-3xl"
                : "bg-gradient-to-r h-20 from-grisClaro to-negro opacity-30 p-4 rounded-full"
            } `}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          {!showInput && (
            <div className="absolute z-10 flex gap-2 mt-24">
              <motion.button
                onClick={() => {
                  navigate("/register");
                }}
                className="h-10 p-1 text-xs font-bold rounded-full bg-grisClaro text-negro"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                REGISTRARME
              </motion.button>
              <motion.button
                onClick={handleShowInput}
                className="z-30 h-10 p-1 text-xs font-bold text-black rounded-full bg-amarillo"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                INICIAR SESIÓN
              </motion.button>
            </div>
          )}
          {showInput && (
            <div className="absolute flex flex-col items-center justify-center w-full gap-2 pt-40">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center w-4/6 gap-2"
              >
                <input
                  className="w-full p-2 font-sans text-xs font-semibold text-white placeholder-opacity-50 bg-black border-[1px] border-gray-500 rounded-full text-md"
                  type="text"
                  placeholder="INGRESAR USUARIO"
                  {...register("username", { required: "Usuario requerido" })}
                />
                {errors.username && (
                  <span className="text-xs text-red-500">
                    {errors.username.message}
                  </span>
                )}

                <input
                  className="w-full p-2 font-sans text-xs font-semibold text-white placeholder-opacity-50 bg-black border-[1px] border-gray-500 rounded-full text-md"
                  type="password"
                  placeholder="INGRESAR CONTRASEÑA"
                  {...register("password", {
                    required: "Contraseña requerida",
                  })}
                />
                {errors.password && (
                  <span className="text-xs text-red-500">
                    {errors.password.message}
                  </span>
                )}

                <div className="mt-5">
                  <motion.button
                    className="w-full p-2 text-xs font-bold text-black rounded-full bg-amarillo"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    type="submit"
                  >
                    INICIAR SESIÓN
                  </motion.button>
                </div>
              </form>
            </div>
          )}
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
