import React from "react";

interface FooterProps {
  links?: { label: string; href: string }[];
  copyright?: string; 
}

const Footer: React.FC<FooterProps> = ({
  links = [],
  copyright = "© 2025 Ticketing App. All rights reserved.",
}) => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-gray-400">{copyright}</div>
      </div>
    </footer>
  );
};

export default Footer;