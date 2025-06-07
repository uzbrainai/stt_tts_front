import {useEffect, useState} from "react";
import {Button} from "antd";
import {useNavigate} from "react-router";
import {useAuthStore} from "../../store/authStore";

export const HeaderComponent = () => {
    const navigate = useNavigate();
    const {isAuth} = useAuthStore()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [size, setSize] = useState(window.innerWidth);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when a link is clicked
    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            setSize(window.innerWidth)
        })
    }, [])

    return <header className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container-fluid mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-700">UZBRAINAI</div>
            <nav className={`${size > 1280 ? "flex" : "hidden"} space-x-6`}>
                <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Bosh
                    Sahifa</a>
                <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Biz
                    Haqimizda</a>
                <a href="#news"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Yangiliklar</a>
                <a href="#articles"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Maqolalar</a>
                <a href="#pricing"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Narxlar</a>
                <a href="#products"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Mahsulotlar</a>
                <a href="#services"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Xizmatlar</a>
                <a href="#clients"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Mijozlar</a>
                <a href="#contact"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300">Bog'lanish</a>
                <Button onClick={() => {
                    navigate(isAuth ? "/account" : "/login")
                }} type="primary">{isAuth ? "Kabinet" : "Kirish"}</Button>
            </nav>
            <button className="xl:hidden text-gray-700 text-2xl" onClick={toggleMobileMenu}>
                <i className="fas fa-bars"></i>
            </button>
        </div>
        <div
            className={`${isMobileMenuOpen ? 'block' : 'hidden'} xl:hidden bg-white py-4 mt-2 shadow-lg rounded-lg mx-4`}>
            <nav className="flex flex-col items-center space-y-3">
                <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300 py-2"
                   onClick={handleMobileLinkClick}>Bosh Sahifa</a>
                <a href="#about"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300 py-2"
                   onClick={handleMobileLinkClick}>Biz Haqimizda</a>
                <a href="#news" className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300 py-2"
                   onClick={handleMobileLinkClick}>Yangiliklar</a>
                <a href="#articles"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300 py-2"
                   onClick={handleMobileLinkClick}>Maqolalar</a>
                <a href="#pricing"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300 py-2"
                   onClick={handleMobileLinkClick}>Narxlar</a>
                <a href="#products"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300 py-2"
                   onClick={handleMobileLinkClick}>Mahsulotlar</a>
                <a href="#services"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300 py-2"
                   onClick={handleMobileLinkClick}>Xizmatlar</a>
                <a href="#clients"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300 py-2"
                   onClick={handleMobileLinkClick}>Mijozlar</a>
                <a href="#contact"
                   className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300 py-2"
                   onClick={handleMobileLinkClick}>Bog'lanish</a>
            </nav>
        </div>
    </header>
}