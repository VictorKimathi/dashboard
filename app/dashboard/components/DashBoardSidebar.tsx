import React from 'react'
import {sideBarLinks} from "@/constants";
import Image from "next/image";

const DashBoardSidebar = () => {
    return (
        <div>

            <div className="dashboard-sidebar  pt-32 px-16">
                {sideBarLinks.map((link)=>{
                    return (
                        <div className='m-2'>
                        
                        <Image width={50} height={50} src={link.src} alt={link.alt} />

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default DashBoardSidebar
