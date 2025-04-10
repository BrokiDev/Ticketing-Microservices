import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const headerLinks = [
    { label: "Home", href: "/" },
    { label: "Sign In", href: "/auth/signin" },
    { label: "Sign Up", href: "/auth/signup" },
  ];

  const footerLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header links={headerLinks} />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>

      {/* Footer */}
      <Footer links={footerLinks} copyright="© 2025 Ticketing App. All rights reserved." />
    </div>
  );
};

export default MainLayout;