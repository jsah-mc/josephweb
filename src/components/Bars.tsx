import LeftSideTopBar from './bars/LeftSideTopBar';
import RightSideTopBar from './bars/RightSideTopBar';
import TopBar from './bars/TopBar';
import ResponsiveSidebar from './ResponsiveSidebar';

export interface BarsProps {
  pathname: string;
}

export default function Bars(props: BarsProps) {
    return (
        <div>
            <span className="fixed top-0 left-0 w-full h-6 bg-overlay dark:bg-overlaydark z-50"></span>
            <div className="fixed left-0 top-0 w-full z-50">
                {/* Top line */}
                {/* <span className="absolute top-0 left-0 w-screen h-10 bg-overlay dark:bg-overlaydark z-50"></span> */}
                {/* Desktop Bars (xl and up) */}
                <div className="hidden lg:flex justify-between items-center w-full">
                    <LeftSideTopBar />
                    <TopBar pathname={props.pathname} />
                    <RightSideTopBar />
                </div>
                {/* Responsive Sidebar (<1280px) */}
                <div className="lg:hidden w-full">
                    <ResponsiveSidebar pathname={props.pathname} />
                </div>
            </div>
        </div>
    );
}