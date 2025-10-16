const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-50 bg-transparent backdrop-blur-sm">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-pink-400 tracking-wide">
        Robert<span className="text-purple-400">{"</>"}</span>
      </h1>

      {/* Navigation */}
      <ul className="flex gap-8 text-lg font-medium text-gray-300">
        <li>
          <a href="#home" className="hover:text-pink-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-pink-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-pink-400 transition">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-pink-400 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-pink-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
