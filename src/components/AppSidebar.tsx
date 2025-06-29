import React from 'react';
import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom';
import {
    LayoutDashboard,
    Bot,
    Settings,
    User,
    Key,
    CreditCard
} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
    useSidebar,
} from '@/components/ui/sidebar';
import {PiSignOut} from "react-icons/pi";
import {useAuthStore} from "@/store/authStore";
import {ACCESS_TOKEN} from "@/config/constants";
import {Switch} from "@/components/ui/switch";
import {useTheme} from "@/contexts/ThemeContext";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import i18n from "@/i18n";

const mainMenuItems = [
    {title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard},
];

const botMenuItems = [
    {title: 'Speech-to-Text', url: '/dashboard/stt', icon: Bot},
    {title: 'Text-to-Speech', url: '/dashboard/tts', icon: Bot},
    {title: 'Voice Watermarking', url: '/dashboard/watermarking', icon: Bot},
    // {title: 'Voice Authentication', url: '/dashboard/authentication', icon: Bot},
    { title: 'Voice Detection', url: '/dashboard/voice-detection', icon: Bot },
    { title: 'Music Detection', url: '/dashboard/music-detection', icon: Bot },
];

const devMenuItems = [
    {title: 'Developer API', url: '/dashboard/api', icon: Key},
];

const accountMenuItems = [
    {title: 'Account Info', url: '/dashboard/account', icon: User},
    {title: 'Billing', url: '/dashboard/billing', icon: CreditCard},
];

const settingsMenuItems = [
    {title: 'Settings', url: '/dashboard/settings', icon: Settings},
];

export function AppSidebar() {
    const {setUserAndAuth} = useAuthStore();
    const navigate = useNavigate();
    const {state} = useSidebar();
    const location = useLocation();
    const currentPath = location.pathname;
    const {theme, toggleTheme} = useTheme();

    const isActive = (path: string) => currentPath === path;
    const getNavCls = (path: string) =>
        isActive(path) ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium' : 'hover:bg-sidebar-accent/50';

    const logout = () => {
        setUserAndAuth({
            isAuth: false,
            user: undefined,
            permissions: []
        });
        localStorage.removeItem(ACCESS_TOKEN);
        navigate("/");
    }

    console.log(state)
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const languageOptions = [
        {value: 'uz', label: <span>O'zbek</span>},
        {value: 'en', label: <span>English</span>},
        {value: 'ru', label: <span>Русский</span>}
    ];

    return (
        <Sidebar className={state === 'collapsed' ? 'w-14' : 'w-60'} collapsible="icon">
            <div className="p-2">
                <SidebarTrigger/>
            </div>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {mainMenuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url} className={getNavCls(item.url)}>
                                            <item.icon className="h-4 w-4"/>
                                            {state !== 'collapsed' && <span>{item.title}</span>}
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Voice Bots</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {botMenuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url} className={getNavCls(item.url)}>
                                            <item.icon className="h-4 w-4"/>
                                            {state !== 'collapsed' && <span>{item.title}</span>}
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Developer</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {devMenuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url} className={getNavCls(item.url)}>
                                            <item.icon className="h-4 w-4"/>
                                            {state !== 'collapsed' && <span>{item.title}</span>}
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Account</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {accountMenuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url} className={getNavCls(item.url)}>
                                            <item.icon className="h-4 w-4"/>
                                            {state !== 'collapsed' && <span>{item.title}</span>}
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Preferences</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {settingsMenuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <NavLink to={item.url} className={getNavCls(item.url)}>
                                            <item.icon className="h-4 w-4"/>
                                            {state !== 'collapsed' && <span>{item.title}</span>}
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem key={"Chiqish"}>
                                <SidebarMenuButton onClick={logout} className="text-red-500 cursor-pointer" asChild>
                                  <span>
                                    <PiSignOut/>Chiqish
                                  </span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {state === "collapsed" ? "" : <div className="flex items-center mx-3 flex-col">
                    <div className="w-full mb-3">
                        <span>Language:</span>
                        <Select onValueChange={changeLanguage} value={i18n.language}>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue/>
                            </SelectTrigger>
                            <SelectContent>
                                {languageOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full m-0 p-0 mb-3">
                        <span>Theme:</span>
                        <div className="flex items-center">
                            <span className="text-sm">🌞</span>
                            <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme}/>
                            <span className="text-sm">🌙</span>
                        </div>
                    </div>
                </div>}
            </SidebarContent>
        </Sidebar>
    );
}
