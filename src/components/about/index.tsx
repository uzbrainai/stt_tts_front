export const AboutComponent = () => {
    return <section id="about" className="py-16 bg-white">
        <div className="container">
            <h2 className="section-title">Biz Haqimizda</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Nutq Texnologiyalari Markazi STT (Speech-to-Text), TTS (Text-to-Speech), ovozli watermarking va
                        ovoz haqiqiyligini aniqlash kabi sohalarda innovatsion yechimlar yaratishga ixtisoslashgan
                        yetakchi kompaniyadir. Bizning maqsadimiz – sun'iy intellekt va nutq texnologiyalari orqali
                        biznes jarayonlarini optimallashtirish va mijozlar tajribasini yaxshilash.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Bizning jamoamiz yuqori malakali mutaxassislardan iborat bo'lib, ular doimiy ravishda so'nggi
                        texnologik yutuqlarni o'rganib, ularni amaliy yechimlarga tatbiq etishadi. Biz mijozlarimizga
                        moslashtirilgan, ishonchli va samarali mahsulotlar va xizmatlarni taklif etamiz.
                    </p>
                    <a href="#" className="btn-primary mt-8 inline-block">Batafsil Ma'lumot</a>
                </div>
                <div>
                    <img src="https://www.poynter.org/wp-content/uploads/2019/03/shutterstock_446870920.jpg" alt="Biz Haqimizda"
                         className="rounded-xl shadow-lg w-full h-auto object-cover"/>
                </div>
            </div>
        </div>
    </section>
}