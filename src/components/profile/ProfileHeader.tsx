import {FC} from "react";

export const Header: FC<{ onMenuClick: (param?: any) => void, pageTitle: string }> = ({onMenuClick, pageTitle}) => (
    <header className="flex justify-between items-center p-4 bg-white border-b sticky top-0 z-10">
        <div className="flex items-center">
            <button onClick={onMenuClick} className="text-gray-500 focus:outline-none lg:hidden">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"></path>
                </svg>
            </button>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 ml-4">{pageTitle}</h1>
        </div>
        <div className="flex items-center space-x-4">
            <span className="hidden sm:block font-semibold text-gray-700">Balans: 1,250,000 so'm</span>
            <img className="h-10 w-10 rounded-full object-cover"
                 src="https://placehold.co/100x100/E2E8F0/4A5568?text=AV" alt="User avatar"/>
        </div>
    </header>
);