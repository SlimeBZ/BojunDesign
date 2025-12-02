import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 bg-black/90 backdrop-blur border-b border-neutral-900">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity">
          bojundesign
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `uppercase tracking-[0.12em] text-xs ${isActive ? 'text-white' : 'text-neutral-400'} hover:text-white transition-colors`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
