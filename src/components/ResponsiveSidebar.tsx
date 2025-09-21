import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import LeftSideTopBar from "./bars/LeftSideTopBar";
import RightSideTopBar from "./bars/RightSideTopBar";
import {
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { TbSourceCode } from "react-icons/tb";

export default function ResponsiveSidebar({ pathname }: { pathname: string }) {
  type SidebarIconProps = {
    label: React.ReactNode;
    link: string;
    isActive: boolean;
  };
  const SidebarIcons = (props: SidebarIconProps) => (
    <a
      href={props.link}
  className={`topbar-link ${props.isActive ? 'bg-primary text-base dark:bg-primarydark dark:text-basedark font-bold shadow flex flex-row' : ' flex flex-row'}`}
    >
      {props.label}
    </a>
  );

  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <div className="lg:hidden flex items-center fixed p-2 topbar-leftstyle">
      <button
        className="p-2 focus:outline-none topbar-nav"
        onClick={() => setMenuOpen(true)}
        aria-label="Open sidebar"
      >
        <HiMenu size={28} />
      </button>
      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-base dark:bg-basedark bg-opacity-40 z-50" onClick={() => setMenuOpen(false)} />
      )}
      {/* Sidebar */}
  <div className={`fixed top-0 left-0 h-full w-64 bg-overlay dark:bg-overlaydark shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-primary dark:border-primarydark">
          <span className="font-bold text-lg">Jsah-MC</span>
          <button className="p-2 topbar-nav" onClick={() => setMenuOpen(false)} aria-label="Close sidebar">
            <HiX size={28} />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4 h-full">
          <nav className="flex flex-col gap-2">
            <SidebarIcons label={<><FaHome size={20} /><span className="ml-2">Home</span></>} link="/" isActive={pathname === "/"} />
            <SidebarIcons label={<><FaInfoCircle size={20} /><span className="ml-2">About</span></>} link="/about" isActive={pathname === "/about"} />
          </nav>
          <div className="mt-auto pb-16">
            <hr className="my-4 border-t border-primary dark:border-primarydark" />
            <nav className="flex flex-col items-start px-2">
              <SidebarIcons label={<span className="flex items-center"><VscGithub size={20} /><span className="ml-2">GitHub</span></span>} link="https://github.com/jsah-mc" isActive={false} />
              <SidebarIcons label={<span className="flex items-center"><TbSourceCode size={20} /><span className="ml-2">Source Code</span></span>} link="https://github.com/jsah-mc/josephweb" isActive={false} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
