import React from "react";
import Link from "next/link";

interface HeaderProps {
  links?: { label: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ links = [] }) => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">Ticketing</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-blue-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;