export const ContactsComponent = () => {
    return <section id="contact" className="py-16 bg-white">
        <div className="container">
            <h2 className="section-title">Biz Bilan Bog'lanish</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Aloqa Ma'lumotlari</h3>
                    <div className="space-y-4 text-lg text-gray-700">
                        <p><i className="fas fa-map-marker-alt text-indigo-600 mr-3"></i> Toshkent shahri, O'zbekiston
                        </p>
                        <p><i className="fas fa-phone-alt text-indigo-600 mr-3"></i> +998 90 123 45 67</p>
                        <p><i className="fas fa-envelope text-indigo-600 mr-3"></i> info@nutqtexnologiyalari.uz</p>
                        <p><i className="fas fa-clock text-indigo-600 mr-3"></i> Dushanba-Juma: 9:00 - 18:00</p>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ijtimoiy Tarmoqlar</h3>
                        <div className="flex space-x-4 text-3xl">
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300"><i
                                className="fab fa-facebook-square"></i></a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300"><i
                                className="fab fa-instagram-square"></i></a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300"><i
                                className="fab fa-linkedin"></i></a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300"><i
                                className="fab fa-telegram"></i></a>
                        </div>
                    </div>
                    <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50260408545!2d69.11740955999999!3d41.28277055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1701700000000!5m2!1sen!2sus"
                            width="100%" height="300" style={{border:0}} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Xabar Yuborish</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name"
                                   className="block text-gray-700 text-sm font-medium mb-2">Ismingiz</label>
                            <input type="text" id="name" name="name" className="input-field"
                                   placeholder="Ismingizni kiriting" required/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Elektron
                                Pochta</label>
                            <input type="email" id="email" name="email" className="input-field"
                                   placeholder="siz@example.com" required/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">Telefon
                                Raqami (Majburiy emas)</label>
                            <input type="tel" id="phone" name="phone" className="input-field"
                                   placeholder="+998 XX XXX XX XX"/>
                        </div>
                        <div>
                            <label htmlFor="message"
                                   className="block text-gray-700 text-sm font-medium mb-2">Xabar</label>
                            <textarea id="message" name="message" rows={5} className="input-field resize-y"
                                      placeholder="Xabaringizni yozing..." required></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full">Xabar Yuborish</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}