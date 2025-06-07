export const ArticlesComponent = () => {
    return <section id="news" className="py-16 bg-gray-50">
        <div className="container">
            <h2 className="section-title">So'nggi Yangiliklar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card p-6 flex flex-col">
                    <img src="https://cdn.prod.website-files.com/675151245f2993547dbd5046/67f630ef51d3cec928e2cdea_Text%20to%20Speech%20vs.%20Speech%20to%20Text%20Hero.webp" alt="Yangilik 1"
                         className="rounded-lg mb-4 w-full h-auto object-cover"/>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Yangi STT Modeli Ishga Tushirildi</h3>
                    <p className="text-gray-600 text-sm mb-3">2024-yil 25-may</p>
                    <p className="text-gray-700 flex-grow mb-4">Bizning yangi STT modelimiz yanada aniqroq va tezroq
                        nutqni matnga aylantirish imkoniyatini taqdim etadi...</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil O'qish <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
                <div className="card p-6 flex flex-col">
                    <img src="https://aroraakshit.github.io/vani/assets/img/vani.png" alt="Yangilik 2"
                         className="rounded-lg mb-4 w-full h-auto object-cover"/>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ovozli Watermarking Texnologiyasi
                        Yangilandi</h3>
                    <p className="text-gray-600 text-sm mb-3">2024-yil 18-may</p>
                    <p className="text-gray-700 flex-grow mb-4">Ovozli kontentni himoya qilish uchun mo'ljallangan
                        watermarking texnologiyamiz yangi funksiyalar bilan boyitildi...</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil O'qish <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
                <div className="card p-6 flex flex-col">
                    <img src="https://www.spot.uz/media/img/2023/12/dae7Wx17014274505265_l.jpg" alt="Yangilik 3"
                         className="rounded-lg mb-4 w-full h-auto object-cover"/>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Xalqaro Konferensiyada Ishtirok</h3>
                    <p className="text-gray-600 text-sm mb-3">2024-yil 10-may</p>
                    <p className="text-gray-700 flex-grow mb-4">Jamoamiz nutq texnologiyalari bo'yicha xalqaro
                        konferensiyada o'z tadqiqotlarini taqdim etdi...</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil O'qish <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
            </div>
            <div className="text-center mt-10">
                <a href="#" className="btn-primary">Barcha Yangiliklar</a>
            </div>
        </div>
    </section>
}