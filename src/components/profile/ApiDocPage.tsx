import {useState} from "react";

export const ApiPage = () => {
    const apiKey = "sk-aB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV";
    const [copyText, setCopyText] = useState('Nusxalash');

    const handleCopy = () => {
        const textArea = document.createElement("textarea");
        textArea.value = apiKey;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            setCopyText('Nusxalandi!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            setCopyText('Xatolik!');
        }
        document.body.removeChild(textArea);
        setTimeout(() => setCopyText('Nusxalash'), 2000);
    }

    return (
        <div className="space-y-8">
            <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">API Kalitlari</h2>
                <p className="text-gray-600 mb-6">API so'rovlarini autentifikatsiya qilish uchun ushbu kalitlardan foydalaning.</p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-gray-100 p-4 rounded-lg">
                    <input type="text" readOnly value={apiKey} className="flex-grow bg-transparent font-mono text-gray-700 focus:outline-none"/>
                    <div className="flex space-x-2">
                        <button onClick={handleCopy} className="flex-grow bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 min-w-[120px]">{copyText}</button>
                        <button className="flex-grow bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700">Yangi kalit</button>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Hujjatlar</h2>
                <p className="text-gray-600 mb-6">API'dan qanday foydalanishni bilish uchun hujjatlar bilan tanishib chiqing.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <a href="#" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg"><h3 className="font-semibold text-blue-700">Boshlash uchun qo'llanma</h3><p className="text-sm text-gray-600">API'dan foydalanishni tezda o'rganing.</p></a>
                    <a href="#" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg"><h3 className="font-semibold text-blue-700">API Malumotnomasi</h3><p className="text-sm text-gray-600">Barcha endpointlar va parametrlar haqida batafsil ma'lumot.</p></a>
                </div>
            </div>
        </div>
    );
};