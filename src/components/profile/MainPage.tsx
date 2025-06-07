import {SttPage} from "./SttPage";
import {WatermarkingPage} from "./WatermarkingPage";
import {AuthenticityPage} from "./AuthenticityPage";
import {HistoryPage} from "./HistoryPage";
import {BillingPage} from "./BillingPage";
import {ApiPage} from "./ApiDocPage";
import {FeedbackPage} from "./FeedbackPage";
import {UserProfile} from "./UserProfile";
import {TtsPage} from "./TtsPage";
import {FC, useEffect, useState} from "react";
import {Header} from "./ProfileHeader";
import {Sidebar} from "./ProfileSidebar";

export const MainContent: FC<any> = ({page}) => {
    const [activePage, setActivePage] = useState<string>('profil');
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pages: any = {
        profil: <UserProfile/>,
        stt: <SttPage/>,
        tts: <TtsPage/>,
        watermarking: <WatermarkingPage/>,
        haqiqiylik: <AuthenticityPage/>,
        tarix: <HistoryPage/>,
        toldirish: <BillingPage/>,
        api: <ApiPage/>,
        feedback: <FeedbackPage/>,
    };

    const pageTitles: { [key: string]: string } = {
        profil: "Mening profilim",
        feedback: "Fikr-mulohaza",
        stt: "Nutqni matnga o'girish",
        tts: "Matnni nutqqa o'girish",
        watermarking: "Ovozga suv belgisi",
        haqiqiylik: "Ovoz haqiqiyligi",
        api: "Dasturchi API",
        tarix: "Hisob tarixi",
        toldirish: "Hisobni to'ldirish"
    };

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            body { font-family: 'Inter', sans-serif; }
            .sidebar { transition: width 0.3s ease-in-out, transform 0.3s ease-in-out; }
            .sidebar.collapsed { width: 5rem; }
            .sidebar.collapsed .sidebar-text, .sidebar.collapsed .logo-container span { display: none; }
            .sidebar.collapsed .sidebar-item, .sidebar.collapsed .logo-container { justify-content: center; }
            .sidebar.collapsed .logo-container { padding-bottom: 1.1rem; }
            .sidebar-item.active { background-color: #1D4ED8; color: white; }
            .sidebar-item:hover { background-color: #2563EB; color: white; }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            .page { animation: fadeIn 0.5s ease-out; }
            .animation-container { display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 250px; background-color: #111827; border-radius: 0.5rem; color: #9ca3af; }
            .sound-wave rect { animation: wave 1.2s linear infinite alternate; }
            @keyframes wave { from { transform: scaleY(0.2); } to { transform: scaleY(1); } }
            .sound-wave rect:nth-child(2) { animation-delay: 0.1s; } .sound-wave rect:nth-child(3) { animation-delay: 0.2s; } .sound-wave rect:nth-child(4) { animation-delay: 0.3s; } .sound-wave rect:nth-child(5) { animation-delay: 0.4s; }
            @keyframes scan { 0% { transform: translateY(-10px); } 100% { transform: translateY(70px); } }
            .scanner-line { animation: scan 2s ease-in-out infinite alternate; box-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6; }
            @keyframes shield-pulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.1); opacity: 1; } }
            .shield-icon { animation: shield-pulse 2s ease-in-out infinite; }
            @keyframes text-to-sound { 0% { opacity: 1; transform: translateY(0); } 50% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
            .tts-anim-icon { animation: text-to-sound 2s ease-in-out infinite; }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="flex h-screen bg-gray-200">
            <div
                className={`fixed inset-y-0 left-0 z-30 lg:relative lg:translate-x-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <Sidebar
                    activePage={activePage}
                    setActivePage={(page: string) => {
                        setActivePage(page);
                        setMobileMenuOpen(false);
                    }}
                    isCollapsed={isSidebarCollapsed}
                    setCollapsed={setSidebarCollapsed}
                />
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header onMenuClick={() => setMobileMenuOpen(!isMobileMenuOpen)} pageTitle={pageTitles[activePage]}/>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">
                    <div className="container mx-auto page">
                        {pages[page] || <UserProfile/>}
                    </div>
                </main>
            </div>
        </div>
    );
};