import { useLocation } from 'react-router-dom';
import { House } from "phosphor-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Header() {
  const { pathname } = useLocation();
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 relative">
      { pathname === '/about' && (
        <Link
        to="/"
        className="absolute left-4 hover:text-orange-700 transition-colors"
      >
        <House size={32} />
      </Link>
      ) }
      <Logo />
    </header>
  );
}
