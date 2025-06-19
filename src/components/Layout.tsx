import React, {useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Outlet, useLocation} from "react-router-dom";

const Layout: React.FC = () => {
    let pathname = useLocation().pathname;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [pathname])

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
