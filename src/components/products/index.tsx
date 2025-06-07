export const ProductsComponent = () => {
    return <section id="products" className="py-16 bg-white">
        <div className="container">
            <h2 className="section-title">Bizning Mahsulotlar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="card p-6 text-center">
                    <div className="text-indigo-600 text-5xl mb-4"><i className="fas fa-microphone"></i></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">STT API</h3>
                    <p className="text-gray-700 mb-4">Nutqni yuqori aniqlikda matnga aylantirish uchun kuchli API.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
                <div className="card p-6 text-center">
                    <div className="text-indigo-600 text-5xl mb-4"><i className="fas fa-volume-up"></i></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">TTS API</h3>
                    <p className="text-gray-700 mb-4">Matnni tabiiy ovozga aylantirish uchun moslashuvchan API.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
                <div className="card p-6 text-center">
                    <div className="text-indigo-600 text-5xl mb-4"><i className="fas fa-stamp"></i></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ovozli Watermarking</h3>
                    <p className="text-gray-700 mb-4">Ovozli kontentni himoya qilish va kuzatish uchun noyob yechim.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
                <div className="card p-6 text-center">
                    <div className="text-indigo-600 text-5xl mb-4"><i className="fas fa-robot"></i></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Ovoz Haqiqiyligini Aniqlash Boti</h3>
                    <p className="text-gray-700 mb-4">Ovoz orqali shaxsni tasdiqlash uchun avtomatlashtirilgan bot.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
            </div>
            <div className="text-center mt-10">
                <a href="#" className="btn-primary">Barcha Mahsulotlar</a>
            </div>
        </div>
    </section>
}