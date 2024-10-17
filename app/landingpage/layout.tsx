"use client"
import React from 'react'
import { useRouter } from 'next/router';
import Header from "./components/Header"
const Layout = ({ children }) => {
    return (
        <div className="dashboard-layout">
            <Header />
            <h1>Header</h1>
<div className="dashbord-main">
    <h2>SUbheader</h2>
<div className="dashboard-content">

            {children}
</div>
</div>
        </div>
    )
}
export default Layout
