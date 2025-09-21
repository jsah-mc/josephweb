import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type TopBarProps = {
  pathname: string;
};

export default function TopBar({ pathname }: TopBarProps) {
  type SidebarIconProps = {
    label: React.ReactNode;
    link: string;
    isActive: boolean;
  };
  const SidebarIcons = (props: SidebarIconProps) => (
    <a
      href={props.link}
      className={`topbar-link rounded-4xl transition-colors duration-200 ${props.isActive ? 'bg-primary text-base dark:bg-primarydark dark:text-basedark font-bold shadow' : 'text-text dark:text-textdark hover:bg-base dark:hover:bg-textdark dark:hover:text-basedark'}`}
    >
      {props.label}
    </a>
  );

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="topbar p-2">
      {/* Desktop Nav (lg and up) */}
  <nav className="topbar-nav hidden lg:flex">
        <SidebarIcons label={<FaHome size={20} />} link="/" isActive={pathname === "/"} />
        <SidebarIcons label={<FaInfoCircle size={20} />} link="/about" isActive={pathname === "/about"} />
      </nav>
      {/* Sidebar for <1280px */}
  <div className="lg:hidden flex items-center">
        <button
          className="p-2 focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open sidebar"
        >
          <HiMenu size={28} />
        </button>
          <div className="flex flex-col gap-4 p-4">
            <nav className="flex flex-col gap-2">
              <SidebarIcons label={<FaHome size={20} />} link="/" isActive={pathname === "/"} />
              <SidebarIcons label={<FaInfoCircle size={20} />} link="/about" isActive={pathname === "/about"} />
              {/* Add more links here as needed */}
            </nav>
          </div>
        </div>
      </div>
  );
}

