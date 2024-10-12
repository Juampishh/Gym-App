import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const nutritionRecommendations = [
  {
    number: 1,
    title: "Desayuno",
    description:
      "Inicia el día con un desayuno equilibrado que incluya proteínas, carbohidratos y grasas saludables.",
  },
  {
    number: 2,
    title: "Almuerzo",
    description:
      "Combina vegetales, proteínas magras y carbohidratos complejos para mantener la energía durante el día.",
  },
  {
    number: 3,
    title: "Merienda",
    description:
      "Elige un snack saludable como frutas, nueces o yogur para mantener la energía entre comidas.",
  },
  {
    number: 4,
    title: "Cena",
    description:
      "Opta por una cena ligera que incluya proteínas y vegetales para ayudar a la digestión.",
  },
];

export default function Nutrition() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <div className="relative flex-grow bg-negroClaro">
        <div className="flex items-center justify-center w-full gap-2 pt-3 mt-5">
          <div className="flex justify-center p-1 mt-1 rounded-lg bg-amarillo">
            <img className="w-16" src="../Navbar/GYM.png" alt="Logo del Gym" />
          </div>
          <div className="font-sans text-3xl font-light text-grisClaro">
            <h1 className="tracking-wider ">NUTRITION</h1>
          </div>
        </div>
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
          <div className="absolute flex items-center justify-center">
            <div className="z-0 w-40 h-40 rounded-full bg-opacity-30 bg-negro"></div>
          </div>

          <img
            className="z-10 w-24 h-auto"
            src="../Nutrition/Apple.png"
            alt="Apple"
          />
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
          <h1 className="pt-5 text-lg font-light">RECOMENDACIONES.</h1>

          {nutritionRecommendations.map(
            ({ number, title, description }, index) => (
              <motion.div
                key={number}
                className="mt-5 mb-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <h1 className="w-6 text-center rounded-full text-negro bg-amarillo">
                  {number}
                </h1>
                <div className="flex gap-4">
                  <img
                    className="pt-1 pl-3"
                    src="../Rutine/Line 2.png"
                    alt=""
                  />
                  <div className="relative w-5/6 p-2 font-sans font-bold tracking-wider bg-black rounded-xl bg-opacity-20">
                    <h3 className="text-white">{title}.</h3>
                    <p className="text-xs font-light text-white">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
