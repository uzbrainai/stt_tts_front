export const FooterComponent = () => {
    return <footer className="bg-gray-800 text-white py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-indigo-400 mb-2">UZBRAINAI</h3>
                <p className="text-gray-400">&copy; 2024 Barcha huquqlar himoyalangan.</p>
            </div>
            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Maxfiylik Siyosati</a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Foydalanish Shartlari</a>
                <a href="#news" className="text-gray-400 hover:text-white transition duration-300">Yangiliklar</a>
                <a href="#products" className="text-gray-400 hover:text-white transition duration-300">Mahsulotlar</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Bog'lanish</a>
            </nav>
            <div className="flex space-x-4 text-2xl">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i
                    className="fab fa-facebook"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i
                    className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i
                    className="fab fa-linkedin"></i></a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i
                    className="fab fa-telegram"></i></a>
            </div>
        </div>
    </footer>
}