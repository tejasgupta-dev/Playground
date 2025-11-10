"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { href: "/about-us", label: "ABOUT US" },
    { href: "/badgerthon", label: "BADGERTHON" },
    { href: "/classroom-chats", label: "CLASSROOM CHATS" },
    { href: "/college-club-experience", label: "THE COLLEGE CLUB" },
    { href: "/merch", label: "MERCH" },
    { href: "/table", label: "TABLE" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? 'show' : 'hide'}`}>
      {/* Logo */}
      <div className="navbar-brand">
        <Link href="/">
          <img src="/images/Brand.png" alt="Logo" />
        </Link>
      </div>

      {/* Links */}
      <div className="navbar-links">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`navbar-tab ${pathname === link.href ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}