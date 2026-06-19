"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export interface NavItem {
  label: string;
  key: string;
  subTitle:string
}

interface NavbarProps {
  logo: string;
  links: NavItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navbar({
  logo,
  links,
  activeTab,
  onTabChange,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getNavLinkClass = (key: string) => {
    const isActive = activeTab === key;

    return `
      relative w-fit font-medium transition-colors duration-300
      ${
        isActive
          ? "text-blue-600"
          : "text-gray-700 hover:text-blue-600"
      }
      after:absolute after:left-0 after:-bottom-1
      after:h-0.5 after:bg-blue-600
      after:transition-all after:duration-300
      cursor-pointer
      ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
    `;
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#D0E2FF] shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-gray-900">
          {logo}
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.key}
              onClick={() => onTabChange(link.key)}
              className={getNavLinkClass(link.key)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle Menu"
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t bg-white px-6 py-4">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <button
                key={link.key}
                onClick={() => {
                  onTabChange(link.key);
                  setIsOpen(false);
                }}
                className={getNavLinkClass(link.key)}
              >
                {link.label} <span className="text-xs">{link.subTitle}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}