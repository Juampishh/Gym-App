import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-16 overflow-x-hidden bg-negro">
      <ul className="flex items-center justify-around gap-4 md:gap-6">
        <li
          onClick={() => {
            navigate("/nutrition");
          }}
          className="flex flex-col items-center text-white"
        >
          <img
            className="mt-2 cursor-pointer hover:scale-105"
            src="../Footer/Apple Fruit.png"
            alt="Nutrición"
          />
          <span className="text-[9px] font-light sm:text-xs">Nutrición</span>{" "}
        </li>
        <li
          onClick={() => {
            navigate("/rutine");
          }}
          className="flex flex-col items-center text-white"
        >
          <img
            className="mt-2 cursor-pointer hover:scale-105"
            src="../Footer/Dumbbell.png"
            alt="Rutina"
          />
          <span className="text-[9px] font-light sm:text-xs">Rutina</span>{" "}
        </li>
        <li
          onClick={() => {
            navigate("/home");
          }}
          className="flex flex-col items-center text-white"
        >
          <img
            className="mt-2 cursor-pointer hover:scale-105"
            src="../Footer/Group 20.png"
            alt="Inicio"
          />
          <span className="text-[9px] font-light sm:text-xs">Inicio</span>{" "}
        </li>
        <li
          onClick={() => {
            navigate("/students");
          }}
          className="flex flex-col items-center text-white"
        >
          <img
            className="mt-2 cursor-pointer hover:scale-105"
            src="../Footer/Group 25.png"
            alt="Alumnos"
          />
          <span className="text-[9px] font-light sm:text-xs">Alumnos</span>{" "}
        </li>
        <li
          onClick={() => {
            navigate("/rutine");
          }}
          className="flex flex-col items-center text-white"
        >
          <img
            className="mt-2 cursor-pointer hover:scale-105"
            src="../Footer/Search.png"
            alt="Búsqueda"
          />
          <span className="text-[9px] font-light sm:text-xs">Búsqueda</span>{" "}
        </li>
      </ul>
    </div>
  );
}
