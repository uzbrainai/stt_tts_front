import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {SidebarProvider, SidebarInset, SidebarTrigger} from '@/components/ui/sidebar';
import {Button} from '@/components/ui/button';
import {Home} from 'lucide-react';
import {AppSidebar} from './AppSidebar';
import logo from "@/assets/logo.png";
import {useTranslation} from "react-i18next";
import {Tag} from "antd";
import {useAuthStore} from "@/store/authStore";

const DashboardLayout: React.FC = () => {
    const {t} = useTranslation();
    const {user} = useAuthStore()
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <AppSidebar/>
                <SidebarInset className="flex-1 min-w-0">
                    {/* Dashboard Header */}
                    <header
                        className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <div className="flex h-14 items-center justify-between px-4">
                            <div className="flex items-center space-x-2">
                                {/* Mobile Sidebar Trigger */}
                                <SidebarTrigger className="md:hidden"/>

                                <Link to="/" className="flex items-center space-x-2">
                                    <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                                        <img src={logo} alt="logo"/>
                                    </div>
                                    <span
                                        className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    UzBrainAi
                  </span>
                                </Link>
                            </div>
                            <div>
                                <Tag color="green">
                                    Balance: {user?.userAccount?.amount} so'm
                                </Tag>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link to="/" className="flex items-center gap-2">
                                        <Home className="h-4 w-4"/>
                                        <span className="hidden sm:inline">{t("nav.home")}</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </header>

                    <main className="p-2 md:p-6 w-full">
                        <Outlet/>
                    </main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;
