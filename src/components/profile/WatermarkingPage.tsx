import {AIAnimation} from "./animations";
import {useState} from "react";

export const WatermarkingPage = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const handleProcess = () => {
        setIsProcessing(true);
        setTimeout(() => setIsProcessing(false), 3000);
    };
    return (
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"><h2 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Ovozga Suv Belgisi Qo'shish</h2><span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">Narx: Har bir operatsiya / 1000 so'm</span></div>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Asosiy audio faylni yuklang</label>
                    <div className="mt-1 p-4 border-2 border-gray-300 border-dashed rounded-md text-center"><p className="text-sm text-gray-600">Fayl tanlang yoki bu yerga olib keling</p></div>
                    <label className="block text-sm font-medium text-gray-700 mt-6 mb-2">Yashirin belgi (matn)</label>
                    <input type="text" placeholder="maxfiy kod yoki litsenziya" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-50 p-6 rounded-lg">
                    {isProcessing ? <AIAnimation type="watermarking" /> : <><svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg><p className="mt-4 text-center text-gray-600">Audio faylingizga ko'rinmas himoya belgisi qo'shiladi.</p></>}
                    <button onClick={handleProcess} className="mt-6 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700">Belgi qo'shish</button>
                </div>
            </div>
        </div>
    );
};