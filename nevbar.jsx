export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-bold">Mera App</h1>

        {/* Links */}
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4 md:mt-0">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

