export const PricesComponent = () => {
    return <section id="pricing" className="py-16 bg-gray-50">
        <div className="container">
            <h2 className="section-title">Narxlar Rejalari</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="card p-8 text-center border-2 border-indigo-200">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-4">Boshlang'ich</h3>
                    <p className="text-5xl font-extrabold text-gray-900 mb-6">$0<span
                        className="text-xl font-medium text-gray-500">/oy</span></p>
                    <ul className="text-gray-700 text-left space-y-3 mb-8">
                        <li className="flex items-center"><i
                            className="fas fa-check-circle text-green-500 mr-2"></i> 1000 so'z STT/oy
                        </li>
                        <li className="flex items-center"><i
                            className="fas fa-check-circle text-green-500 mr-2"></i> 500 so'z TTS/oy
                        </li>
                        <li className="flex items-center"><i
                            className="fas fa-times-circle text-red-500 mr-2"></i> Ovozli Watermarking
                        </li>
                        <li className="flex items-center"><i className="fas fa-times-circle text-red-500 mr-2"></i> Ovoz
                            Haqiqiyligini Aniqlash
                        </li>
                    </ul>
                    <button className="btn-primary w-full">Bepul Boshlash</button>
                </div>
                <div className="card p-8 text-center border-2 border-indigo-600 relative">
                    <span
                        className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Tavsiya etiladi</span>
                    <h3 className="text-2xl font-bold text-indigo-700 mb-4">Standart</h3>
                    <p className="text-5xl font-extrabold text-gray-900 mb-6">$49<span
                        className="text-xl font-medium text-gray-500">/oy</span></p>
                    <ul className="text-gray-700 text-left space-y-3 mb-8">
                        <li className="flex items-center"><i
                            className="fas fa-check-circle text-green-500 mr-2"></i> 100 000 so'z STT/oy
                        </li>
                        <li className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> 50
                            000 so'z TTS/oy
                        </li>
                        <li className="flex items-center"><i
                            className="fas fa-check-circle text-green-500 mr-2"></i> Asosiy Watermarking
                        </li>
                        <li className="flex items-center"><i className="fas fa-times-circle text-red-500 mr-2"></i> Ovoz
                            Haqiqiyligini Aniqlash
                        </li>
                    </ul>
                    <button className="btn-primary w-full">Hoziroq Xarid Qilish</button>
                </div>
                <div className="card p-8 text-center border-2 border-indigo-200">
                    <h3 className="text-2xl font-bold text-indigo-700 mb-4">Premium</h3>
                    <p className="text-5xl font-extrabold text-gray-900 mb-6">$199<span
                        className="text-xl font-medium text-gray-500">/oy</span></p>
                    <ul className="text-gray-700 text-left space-y-3 mb-8">
                        <li className="flex items-center"><i
                            className="fas fa-check-circle text-green-500 mr-2"></i> Cheksiz STT/TTS
                        </li>
                        <li className="flex items-center"><i
                            className="fas fa-check-circle text-green-500 mr-2"></i> To'liq Watermarking
                        </li>
                        <li className="flex items-center"><i
                            className="fas fa-check-circle text-green-500 mr-2"></i> Ovoz Haqiqiyligini Aniqlash
                        </li>
                        <li className="flex items-center"><i
                            className="fas fa-check-circle text-green-500 mr-2"></i> Prioritet Qo'llab-quvvatlash
                        </li>
                    </ul>
                    <button className="btn-primary w-full">Hoziroq Xarid Qilish</button>
                </div>
            </div>
            <div className="text-center mt-10">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Barcha Narxlar Rejalarini
                    Ko'rish <i className="fas fa-arrow-right text-sm ml-1"></i></a>
            </div>
        </div>
    </section>
}