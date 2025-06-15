import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Outlet} from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
