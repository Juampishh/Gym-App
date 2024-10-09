import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";

export default function Login() {
  return (
    <div className="w-full relative">
      <Navbar />
      <div className="relative">
        <img
          src="../Login/Body.png"
          alt=""
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-0" />

        <motion.div
          className="absolute inset-0 flex justify-center items-center z-10 mb-36"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="../Login/Vector (1).png" alt="" className="w-1/2" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-center items-center z-0 mt-10">
          <motion.div
            className="bg-gradient-to-r h-20 from-grisClaro to-negro rounded-full p-4 mt-24 opacity-30 w-4/5 z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute flex gap-2 z-10 mt-24">
            <motion.button
              className="bg-grisClaro h-12 text-xs font-bold p-1 text-negro rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              REGISTRARME
            </motion.button>
            <motion.button
              className="bg-amarillo text-black text-xs font-bold p-1 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              INICIAR SESIÓN
            </motion.button>
          </div>
        </div>

        <motion.div
          className="absolute bottom-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-xs ml-3 absolute mt-2 font-bold">
            TU GIMNASIO AL ALCANCE DE TUS MANOS.
          </h1>
          <img src="../Login/Rectangle 13.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
}
