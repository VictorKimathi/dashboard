import React from 'react';
import DashBoardRightSideBar from "@/app/dashboard/components/DashBoardRightSideBar";
import DashBoardHeader from "./components/DashBoardHeader";
// import DashBoardSideBar from "./components/DashBoardSideBar";

import DashBoardSidebar  from "@/app/dashboard/components/DashBoardSidebar";
const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-dark">
            {/* Sidebar */}
            <DashBoardSidebar className="w-64 bg-dark-secondary" />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <DashBoardHeader className="bg-dark-header h-16 shadow-md" />

                {/* Main Content */}
                <div className="flex flex-1">
                    {/* Content Area */}
                    <div className="flex-1 p-6">
                        {/*<DashBoardContent />*/}
                        {children}
                    </div>

                    {/* Right Sidebar */}
                    <DashBoardRightSideBar className="w-80 bg-dark-secondary" />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
