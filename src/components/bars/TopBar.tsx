import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";

export default function TopBar() {
  type SidebarIconProps = {
    label: string;
    link: string;
  };
  const SidebarIcons = (props: SidebarIconProps) => (
    <a href={props.link} className="topbar-link">
      {props.label}
    </a>
  );
  return (
    <div className="topbar p-2">
      {/* <span className="logo p-2">
                   <CgWebsite size={30} />Jsah-Mc
               </span> */}
      <nav className="topbar-nav">
        <SidebarIcons label={<FaHome size={20} />} link="/" />
      </nav>
    </div>
  );
}

