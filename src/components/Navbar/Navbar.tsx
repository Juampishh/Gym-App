import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="flex justify-between w-full gap-2 p-3 border-none shadow-none h-14 bg-black/90 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="flex justify-center p-1 mt-1 rounded-lg bg-amarillo">
          <img className="w-16" src="../Navbar/GYM.png" alt="Logo del Gym" />
        </div>
        <div className="font-sans text-3xl font-light text-amarillo">
          <h1 className="tracking-wider">APP</h1>
        </div>
      </div>

      {location.pathname !== "/" && location.pathname !== "/register" && (
        <div className="flex items-center">
          <button
            className="flex items-center p-1 text-amarillo hover:text-amarillo"
            onClick={handleLogout}
          >
            <IoLogOutOutline size={24} />
          </button>
        </div>
      )}
    </nav>
  );
}
