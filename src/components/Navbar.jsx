const Navbar = () => {
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
        <a href="#home" className="hover:text-[#e63946] cursor-pointer">
          Home
        </a>
      </li>
      <li className="hidden md:flex">
        <a href="#about" className="hover:text-[#e63946] cursor-pointer">
          About
        </a>
      </li>
      <li className="hover:text-[#e63946] cursor-pointer"> 
        <a href="#tools">
          Skills
        </a>
      </li>
      <li className="hover:text-[#e63946] cursor-pointer">
        <a href="#certifications">Certifications</a>
      </li>
      <li className="hover:text-[#e63946] cursor-pointer">
        <a href="#awards">Awards</a>
      </li>
      <li className="hover:text-[#e63946] cursor-pointer">Experience</li>
      <li className="hover:text-[#e63946] cursor-pointer">Contact</li>
    </ul>

  </div>
</nav>
  );
};

export default Navbar;
