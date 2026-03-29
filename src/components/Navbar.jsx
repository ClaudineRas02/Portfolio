import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "#home");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const linkClass = (hash) =>
    `cursor-pointer hover:text-[#e63946] ${
      activeHash === hash ? "text-[#e63946]" : "text-white"
    }`;

  return (
   <nav className="fixed top-0 left-0 w-full bg-[#0d1117] text-white border-b border-gray-800 z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-6">

    {/* Logo + Name */}
    <div className="hidden md:flex items-center gap-3">
      <div className="bg-[#e63946] w-10 h-10 flex items-center justify-center rounded-lg font-bold">
        R
      </div>
      <span className="text-xl font-semibold">Claudine</span>
    </div>

    {/* Nav Links */}
    <ul className="flex gap-10 text-sm font-medium">
      <li>
        <a href="#home" className={linkClass("#home")}>
          Home
        </a>
      </li>
      <li className="hidden md:flex">
        <a href="#about" className={linkClass("#about")}>
          About
        </a>
      </li>
      <li> 
        <a href="#tools" className={linkClass("#tools")}>
          Skills
        </a>
      </li>
      <li>
        <a href="#certifications" className={linkClass("#certifications")}>
          Certifications
        </a>
      </li>
      <li>
        <a href="#awards" className={linkClass("#awards")}>
          Awards
        </a>
      </li>
      <li>
        <a href="#experience" className={linkClass("#experience")}>
          Experience
        </a>
      </li>
    </ul>

  </div>
</nav>
  );
};

export default Navbar;
