import {FC} from "react";
import {FeedbackIcon, LogoIcon} from "./icons";

const SidebarItem: FC<any> = ({item, activePage, setActivePage}) => (
    <a href="#" onClick={(e) => {
        e.preventDefault();
        setActivePage(item.id);
    }}
       className={`sidebar-item flex items-center space-x-3 p-3 rounded-lg mt-1 ${activePage === item.id ? 'active' : ''}`}>
        {item.icon}
        <span className="sidebar-text">{item.text}</span>
    </a>
);

export const Sidebar: FC<any> = ({activePage, setActivePage, isCollapsed, setCollapsed}) => {
    const navItems = [
        {
            id: 'profil',
            text: 'Mening profilim',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
        },
        {id: 'feedback', text: 'Fikr-mulohaza', icon: <FeedbackIcon/>},
    ];
    const modelItems = [
        {
            id: 'stt',
            text: 'Nutqni matnga',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
            </svg>
        },
        {
            id: 'tts',
            text: 'Matnni nutqqa',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728m2.828 9.9a5 5 0 010-7.072M12 6v12"/>
            </svg>
        },
        {
            id: 'watermarking',
            text: 'Ovozga suv belgisi',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
        },
        {
            id: 'haqiqiylik',
            text: 'Ovoz haqiqiyligi',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
            </svg>
        },
        {
            id: 'api',
            text: 'Dasturchi API',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
        },
    ];
    const financeItems = [
        {
            id: 'tarix',
            text: 'Hisob tarixi',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
        },
        {
            id: 'toldirish',
            text: 'Hisobni to\'ldirish',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
            </svg>
        },
    ];

    return (
        <div className={`sidebar bg-gray-900 text-white p-4 flex flex-col ${isCollapsed ? 'collapsed' : 'w-64'}`}>
            <a href="#" className="logo-container flex items-center space-x-2 px-2 pb-4 border-b border-gray-700">
                <LogoIcon/>
                <span className="text-2xl font-bold sidebar-text">OvozPro</span>
            </a>

            <div className="flex-grow overflow-y-auto">
                {navItems.map(item => <SidebarItem key={item.id} item={item} activePage={activePage}
                                                   setActivePage={setActivePage}/>)}

                <div className="pt-2">
                    <p className="px-3 text-xs font-semibold text-gray-400 uppercase sidebar-text">Modellar</p>
                    {modelItems.map(item => <SidebarItem key={item.id} item={item} activePage={activePage}
                                                         setActivePage={setActivePage}/>)}
                </div>

                <div className="pt-2">
                    <p className="px-3 text-xs font-semibold text-gray-400 uppercase sidebar-text">Moliya</p>
                    {financeItems.map(item => <SidebarItem key={item.id} item={item} activePage={activePage}
                                                           setActivePage={setActivePage}/>)}
                </div>
            </div>

            <div className="border-t border-gray-700 mt-2 pt-2">
                <button onClick={() => setCollapsed(!isCollapsed)}
                        className="sidebar-item hidden lg:flex items-center w-full p-3 rounded-lg">
                    {isCollapsed ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                        </svg>
                        :
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
                            </svg>
                            <span className="sidebar-text ml-3">Menyuni yopish</span></>
                    }
                </button>
            </div>
        </div>
    );
};