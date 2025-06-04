import {useEffect, useRef, useState} from "react";

export const BannerComponent = () => {

    // State for carousel slide index
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideIntervalRef = useRef<any>(null); // Ref to store interval ID

    // Carousel items data (can be fetched from an API in a real app)
    const carouselData = [
        {
            id: 0,
            image: "https://itchronicles.com/wp-content/uploads/2020/10/speech-to-text-1024x683.jpg",
            title: "Nutq Texnologiyalari: Yangi Imkoniyatlar",
            description: "STT, TTS, Ovozli Watermarking va Ovoz Haqiqiyligini Aniqlash sohasidagi so'nggi yutuqlar.",
            link: "#"
        },
        {
            id: 1,
            image: "https://biznesgoya.uz/wp-content/uploads/2024/11/Artificial-Intelligence-1024x576.jpeg",
            title: "AI Innovatsiyalari Bilan Biznesingizni Kengaytiring",
            description: "Sun'iy intellekt asosidagi yechimlarimiz bilan samaradorlikni oshiring.",
            link: "#"
        },
        {
            id: 2,
            image: "https://www.unite.ai/wp-content/uploads/2023/07/ai-voice-changer-tools.webp",
            title: "Aqlli Ovoz Botlari Sizning Xizmatingizda",
            description: "Mijozlarga xizmat ko'rsatishni avtomatlashtirish uchun innovatsion yechimlar.",
            link: "#"
        },
    ];

    // Function to show a specific slide
    const showSlide = (index:number) => {
        setCurrentSlide(index);
    };

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselData.length) % carouselData.length);
    };

    // Start auto-slide
    const startAutoSlide = () => {
        stopAutoSlide(); // Clear any existing interval
        slideIntervalRef.current = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    };

    // Stop auto-slide
    const stopAutoSlide = () => {
        if (slideIntervalRef.current) {
            clearInterval(slideIntervalRef.current);
        }
    };

    // Effect for auto-sliding and cleanup
    useEffect(() => {
        startAutoSlide(); // Start auto-slide on component mount

        // Cleanup function to clear interval on component unmount
        return () => {
            stopAutoSlide();
        };
    }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

    return (
        <div className="font-sans antialiased text-gray-800">
            <section id="home" className="relative w-full h-[850px] overflow-hidden bg-gray-900">
                <div id="carousel" className="relative w-full h-full">
                    {carouselData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-8">
                                <h1 className="text-5xl font-bold text-white mb-4 leading-tight">{item.title}</h1>
                                <p className="text-xl text-gray-200 mb-8 max-w-2xl">{item.description}</p>
                                <a href={item.link} className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl transition duration-300 text-lg">Batafsil O'qish</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Navigation */}
                <button
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75 transition duration-300"
                    onClick={() => { stopAutoSlide(); prevSlide(); startAutoSlide(); }}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75 transition duration-300"
                    onClick={() => { stopAutoSlide(); nextSlide(); startAutoSlide(); }}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                    {carouselData.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${
                                currentSlide === index ? 'bg-white' : 'bg-gray-400'
                            }`}
                            onClick={() => { stopAutoSlide(); showSlide(index); startAutoSlide(); }}
                        ></div>
                    ))}
                </div>
            </section>
        </div>)
}