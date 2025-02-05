import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-lg z-50 p-4 flex justify-between items-center">
      <div className="text-xl font-bold">🎵 MyPlaylist</div>
      <ul className={`md:flex space-x-6 ${menuOpen ? "block" : "hidden"} md:block`}>
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#playlist" className="hover:text-gray-300">Playlist</a></li>
      </ul>
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
