import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Rutine() {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen bg-negroClaro">
        <motion.div
          className="flex flex-col items-center justify-center w-full gap-3 pt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          <img src="../Rutine/Vector (1).png" alt="" />
          <h1 className="text-sm text-white">
            Tomas <span className="text-gray-700">Alejandro Vargas</span>
          </h1>
        </motion.div>

        <motion.div
          className="relative flex justify-center w-full mt-10 rounded-sm"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 1.2 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1 }}
        >
          <img className="w-11/12" src="../Rutine/Rutine.png" alt="" />
          <motion.div
            className="absolute w-1/3 bottom-3 left-3.5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img className="rounded-r-md" src="../Rutine/Group 7.png" alt="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center text-white">
              <h1 className="text-[10px] font-bold">Sentadilla con barra.</h1>
              <p className="text-[7px]">4x15 | 15 minutos</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="pl-8 mt-5 text-amarillo"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="font-light">INDICACIONES.</h1>

          <motion.div
            className="mt-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="w-6 text-center rounded-full text-negro bg-amarillo">
              1
            </h1>
            <div className="flex gap-4">
              <img className="pt-1 pl-3" src="../Rutine/Line 2.png" alt="" />
              <div className="relative w-5/6 p-2 font-sans font-bold tracking-wider bg-black rounded-xl bg-opacity-20">
                <h3 className="text-white">Posicion Inicial.</h3>
                <p className="text-xs font-light text-white">
                  Coloca la barra sobre tus trapecios y ajusta el peso. Parate
                  con los pies al ancho de los hombros, mantene la espalda recta
                  y el pecho hacia arriba.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h1 className="w-6 text-center rounded-full text-negro bg-amarillo">
              2
            </h1>
            <div className="flex gap-4">
              <img className="pt-1 pl-3" src="../Rutine/Line 2.png" alt="" />
              <div className="relative w-5/6 p-2 font-sans font-bold tracking-wider bg-black rounded-xl bg-opacity-20">
                <h3 className="text-white">Ejercicio.</h3>
                <p className="text-xs font-light text-white">
                  Flexiona las rodillas y baja las caderas hasta que los muslos
                  estén paralelos al suelo. Empuja hacia arriba a través de los
                  talones para volver a la posición inicial.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
