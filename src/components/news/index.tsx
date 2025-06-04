export const NewsComponent = () => {
    return <section id="articles" className="py-16 bg-white">
        <div className="container">
            <h2 className="section-title">Foydali Maqolalar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card p-6 flex flex-col">
                    <img src="https://www.unite.ai/wp-content/uploads/2024/03/YOLOv9.webp" alt="Maqola 1"
                         className="rounded-lg mb-4 w-full h-auto object-cover"/>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ovoz Haqiqiyligini Aniqlashning Yangi
                        Metodlari</h3>
                    <p className="text-gray-600 text-sm mb-3">2024-yil 20-aprel</p>
                    <p className="text-gray-700 flex-grow mb-4">Ushbu maqolada ovoz haqiqiyligini aniqlashda
                        qo'llanilayotgan eng so'nggi texnologiyalar tahlil qilingan...</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil O'qish <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
                <div className="card p-6 flex flex-col">
                    <img src="https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/d4f78e0b03eaaf08f823135faf283624.jpg" alt="Maqola 2"
                         className="rounded-lg mb-4 w-full h-auto object-cover"/>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">TTS Texnologiyasining Biznesdagi
                        O'rni</h3>
                    <p className="text-gray-600 text-sm mb-3">2024-yil 15-aprel</p>
                    <p className="text-gray-700 flex-grow mb-4">Matnni nutqqa aylantirish texnologiyasi mijozlarga
                        xizmat ko'rsatish va kontent yaratishda qanday yordam beradi...</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil O'qish <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
                <div className="card p-6 flex flex-col">
                    <img src="https://www.unite.ai/wp-content/uploads/2021/12/robot-headphones-1000x600.jpg" alt="Maqola 3"
                         className="rounded-lg mb-4 w-full h-auto object-cover"/>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ovozli Interfeyslarning Kelajagi</h3>
                    <p className="text-gray-600 text-sm mb-3">2024-yil 5-aprel</p>
                    <p className="text-gray-700 flex-grow mb-4">Aqlli uylar, avtomobillar va boshqa qurilmalarda
                        ovozli interfeyslarning rivojlanishi...</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil O'qish <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
            </div>
            <div className="text-center mt-10">
                <a href="#" className="btn-primary">Barcha Maqolalar</a>
            </div>
        </div>
    </section>
}