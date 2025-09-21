import { CgWebsite } from "react-icons/cg";

export default function LeftSideTopBar() {
  return (
    <div className="topbar-leftstyle flex items-center p-2">
      <span className="logo flex items-center gap-2 topbar-nav p-3">
        <CgWebsite size={30} />
        Jsah-Mc
      </span>
    </div>
  );
}

