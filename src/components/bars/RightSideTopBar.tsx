import { VscGithub } from "react-icons/vsc";
import { TbSourceCode } from "react-icons/tb";
export default function RightSideTopBar() {
  type SidebarIconProps = {
    label: React.ReactNode;
    link: string;
  };
  const SidebarIcons = (props: SidebarIconProps) => (
    <a href={props.link} className="topbar-link">
      {props.label}
    </a>
  );
  return (
    <div className="fixed right-4 top-4 h-16 bg-overlay text-text flex flex-row shadow-none z-50 p-2 rounded-full">
      <div className="flex flex-row gap-4 topbar-nav">
        <SidebarIcons
          label={<VscGithub size={20} />}
          link="https://github.com/jsah-mc"
        />
        <SidebarIcons
          label={<TbSourceCode size={20} />}
          link="https://github.com/jsah-mc/josephweb"
        />
      </div>
      {/* Add more sidebar content here */}
    </div>
  );
}

