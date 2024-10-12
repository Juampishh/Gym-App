export default function Navbar() {
  return (
    <nav className="flex w-full gap-2 p-3 border-none shadow-none h-14 bg-black/90 backdrop-blur-md">
      <div className="flex justify-center p-1 mt-1 rounded-lg bg-amarillo">
        <img className="w-16" src="../Navbar/GYM.png" alt="" />
      </div>
      <div className="font-sans text-3xl font-light text-amarillo">
        <h1 className="tracking-wider">APP</h1>
      </div>
    </nav>
  );
}
