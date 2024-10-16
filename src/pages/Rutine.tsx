import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const steps = [
  {
    number: 1,
    title: "Posición Inicial.",
    description:
      "Coloca la barra sobre tus trapecios y ajusta el peso. Parate con los pies al ancho de los hombros, mantén la espalda recta y el pecho hacia arriba.",
  },
  {
    number: 2,
    title: "Ejercicio.",
    description:
      "Flexiona las rodillas y baja las caderas hasta que los muslos estén paralelos al suelo. Empuja hacia arriba a través de los talones para volver a la posición inicial.",
  },
  {
    number: 3,
    title: "Descanso.",
    description:
      "Toma un descanso de 1 a 2 minutos entre series para recuperarte adecuadamente.",
  },
  {
    number: 4,
    title: "Estiramiento.",
    description:
      "Realiza estiramientos después del ejercicio para prevenir lesiones y mejorar la flexibilidad.",
  },
];

export default function Rutine() {
  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen pb-10 bg-negroClaro">
        {" "}
        {/* Ajustado el padding inferior */}
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
          className="pl-8 mt-10 text-amarillo"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="font-light">INDICACIONES.</h1>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="mt-5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
            >
              <h1 className="w-6 text-center rounded-full text-negro bg-amarillo">
                {step.number}
              </h1>
              <div className="flex gap-4">
                <img className="pt-1 pl-3" src="../Rutine/Line 2.png" alt="" />
                <div className="relative w-5/6 p-2 font-sans font-bold tracking-wider bg-black rounded-xl bg-opacity-20">
                  <h3 className="text-white">{step.title}</h3>
                  <p className="text-xs font-light text-white">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
