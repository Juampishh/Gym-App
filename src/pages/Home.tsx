import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { IoLogoWhatsapp } from "react-icons/io";
import { fadeIn, fadeInUp, zoomIn } from "../components/Animations/Animations";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="relative w-full ">
        <motion.div
          className="absolute top-0 left-0 z-0 w-full h-full bg-negro opacity-90"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
        />
        <motion.img
          className="object-cover w-full h-screen"
          src="../Home/Home.jfif"
          alt=""
          initial="hidden"
          animate="visible"
          variants={zoomIn}
          transition={{ duration: 1.5 }}
        />
        {/* Overlay de fondo */}
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-negro opacity-90" />
        <div className="flex flex-col w-full ">
          <motion.img
            className="absolute pl-5 top-16 sm:top-10 md:top-20 lg:top-32"
            src="../Home/Foto.png"
            alt=""
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="absolute w-full font-sans top-44 sm:top-36 md:top-48 lg:top-56"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="pl-5">
              <h1 className="text-2xl text-white sm:text-xl md:text-3xl">
                Bienvenido, <span className="font-bold">Tomás!</span>
              </h1>
              <p className="text-sm text-white sm:text-xs md:text-base">
                Esta es tu información actual:
              </p>
            </div>

            <motion.div
              className="w-5/6 pl-3 mt-6 mr-3 -ml-2 mobile-md"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative z-10 flex items-center p-4 space-x-6 rounded-full bg-negro opacity-80">
                <h1 className="px-6 py-3 text-sm font-bold text-center rounded-full bg-amarillo">
                  PLAN
                </h1>
                <p className="font-bold text-md text-amarillo sm:text-sm md:text-lg">
                  MUSCULACION 5 DIAS
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative w-full pt-2 pb-2 pl-3 mt-8"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-black opacity-50" />

              <div className="relative flex flex-col w-full gap-6 pl-3">
                <h1 className="flex gap-2 text-lg font-bold text-white sm:text-base md:text-xl">
                  PAGO: <span className="font-light">AL DÍA</span>
                </h1>
                <h1 className="flex gap-2 text-lg font-bold text-white sm:text-base md:text-xl">
                  DEBE: <span className="font-light">-$</span>
                </h1>
                <h1 className="flex gap-2 text-lg font-bold text-white sm:text-base md:text-xl">
                  VENCE: <span className="font-light">29/10/2024</span>
                </h1>
                <h1 className="flex gap-2 text-lg font-bold text-white sm:text-base md:text-xl">
                  ESTADO DE LA CUENTA:{" "}
                  <span className="font-light">ASISTE</span>
                </h1>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center w-full mt-24 sm:mt-16 md:mt-32"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <img className="w-full" src="../Login/Rectangle 13.png" alt="" />
              <h1 className="absolute flex text-lg font-bold text-center sm:text-lg md:text-3xl text-mobile-xs">
                <IoLogoWhatsapp className="w-8 h-8 mr-2 icon-wpp-xs" />{" "}
                CONSULTAR POR WHATSAPP
              </h1>
            </motion.div>

            <motion.div
              className="flex justify-center mt-8"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="w-full h-16 opacity-50 bg-negro" />
              <h1 className="absolute text-lg font-bold tracking-wider text-white bottom-3 sm:text-base md:text-xl">
                ACCEDÉ A TU RUTINA
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
