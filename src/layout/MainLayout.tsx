
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
    component: React.ComponentType;
}

const MainLayout: React.FC<MainLayoutProps> = ({ component: Component }) => {
    return (
        <div className="flex  bg-slate-300 relative">
            <Sidebar />
            {/* <MobileMenu mobile={showMenu} setMobile={setShowMenu} /> */}
            <div className=" flex flex-col flex-grow bg-slate-300">
                <div className="sticky top-0 z-20">
                    <Navbar />
                </div>
                <main className="relative h-full overflow-hidden bg-white justify-center md:mt-2 ">
                    <Component />
                </main>
            </div>
            {/* <ProfileCompletionPopup /> */}
        </div>
    );
};

export default MainLayout;
