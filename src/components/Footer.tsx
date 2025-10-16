const Footer = () => {
  return (
    <footer className="bg-[#0a0a0f] text-gray-400 py-6 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Robert&lt;/&gt;
            </span>
          </h1>
          <p className="text-sm mt-1">© All rights reserved</p>
        </div>

        {/* Right side */}
        <nav className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-pink-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-pink-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-pink-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-pink-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-pink-400 transition">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
