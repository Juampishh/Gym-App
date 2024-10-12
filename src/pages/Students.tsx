import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";

const estudiantes = [
  { apellido: "Gómez", nombre: "Juan" },
  { apellido: "Martínez", nombre: "Ana" },
  { apellido: "Rodríguez", nombre: "Carlos" },
  { apellido: "Fernández", nombre: "Laura" },
  { apellido: "Pérez", nombre: "María" },
  { apellido: "Sánchez", nombre: "Pedro" },
  { apellido: "López", nombre: "Sofía" },
  { apellido: "Díaz", nombre: "Javier" },
  { apellido: "Romero", nombre: "Valentina" },
  { apellido: "Torres", nombre: "Andrés" },
];

export default function Students() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      <div className="relative w-full">
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-black opacity-80" />
        <img
          className="object-cover min-h-screen"
          src="../Login/Body.jfif"
          alt=""
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-10">
          <motion.img
            className="h-auto max-w-full"
            src="../Students/Vector (1).png"
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="flex items-center justify-center w-full h-10 font-extrabold text-center bg-amarillo">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              LISTA DE ALUMNOS
            </motion.h1>
          </div>

          <motion.div
            className="flex flex-col w-full gap-2"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {estudiantes.map((estudiante, index) => (
              <motion.div
                key={index}
                className="relative p-2"
                variants={containerVariants}
              >
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-100 to-negro opacity-30"></div>

                <h1 className="relative z-10 font-light text-white">
                  <span className="font-semibold">{estudiante.apellido},</span>{" "}
                  {estudiante.nombre}
                </h1>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
