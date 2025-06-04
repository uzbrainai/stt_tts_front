export const ServicesComponent = () => {
    return <section id="services" className="py-16 bg-gray-50">
        <div className="container">
            <h2 className="section-title">Bizning Xizmatlar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card p-6 flex flex-col items-center text-center">
                    <div className="text-indigo-600 text-5xl mb-4"><i className="fas fa-lightbulb"></i></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Konsalting Xizmatlari</h3>
                    <p className="text-gray-700 mb-4 flex-grow">Nutq texnologiyalarini biznesingizga integratsiya qilish
                        bo'yicha ekspert maslahatlari.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
                <div className="card p-6 flex flex-col items-center text-center">
                    <div className="text-indigo-600 text-5xl mb-4"><i className="fas fa-cogs"></i></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Maxsus Yechimlar Yaratish</h3>
                    <p className="text-gray-700 mb-4 flex-grow">Sizning noyob ehtiyojlaringizga moslashtirilgan dasturiy
                        ta'minot ishlab chiqish.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
                <div className="card p-6 flex flex-col items-center text-center">
                    <div className="text-indigo-600 text-5xl mb-4"><i className="fas fa-plug"></i></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Integratsiya Xizmatlari</h3>
                    <p className="text-gray-700 mb-4 flex-grow">Mavjud tizimlaringizga bizning API va mahsulotlarimizni
                        muammosiz integratsiya qilish.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
                <div className="card p-6 flex flex-col items-center text-center">
                    <div className="text-indigo-600 text-5xl mb-4"><i className="fas fa-headset"></i></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Texnik Qo'llab-quvvatlash</h3>
                    <p className="text-gray-700 mb-4 flex-grow">Mahsulotlarimizdan foydalanishda sizga yordam berish
                        uchun doim tayyormiz.</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Batafsil <i
                        className="fas fa-arrow-right text-sm ml-1"></i></a>
                </div>
            </div>
            <div className="text-center mt-10">
                <a href="#" className="btn-primary">Barcha Xizmatlar</a>
            </div>
        </div>
    </section>
}