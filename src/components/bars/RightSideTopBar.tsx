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
    <div className="fixed right-0 top-0 h-16 bg-overlay text-text dark:bg-overlaydark dark:text-textdark flex flex-row shadow-none z-50 p-2 rounded-bl-4xl">
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

