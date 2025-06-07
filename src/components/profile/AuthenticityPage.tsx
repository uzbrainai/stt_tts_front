import {AIAnimation} from "./animations";
import {useState} from "react";

export const AuthenticityPage = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const handleProcess = () => {
        setIsProcessing(true);
        setTimeout(() => setIsProcessing(false), 3000);
    };

    return (
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"><h2 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Ovoz Haqiqiyligini Tekshirish</h2><span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">Narx: 1 daqiqa / 2000 so'm</span></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Audio yoki video faylni yuklang</label>
                    <div className="mt-1 p-4 border-2 border-gray-300 border-dashed rounded-md text-center"><p className="text-sm text-gray-600">Tahlil uchun faylni tanlang</p></div>
                    <button onClick={handleProcess} className="mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Tahlil qilish</button>
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-50 p-6 rounded-lg min-h-[250px]">
                    {isProcessing ? <AIAnimation type="haqiqiylik" /> : <><h3 className="text-lg font-medium text-gray-800">Tahlil natijasi</h3><div className="w-full mt-4"><div className="flex justify-between mb-1"><span className="text-base font-medium text-green-700">Haqiqiy</span><span className="text-sm font-medium text-green-700">95%</span></div><div className="w-full bg-gray-200 rounded-full h-4"><div className="bg-green-600 h-4 rounded-full" style={{width: '95%'}}></div></div><div className="flex justify-between mb-1 mt-4"><span className="text-base font-medium text-red-700">Sun'iy (Deepfake)</span><span className="text-sm font-medium text-red-700">5%</span></div><div className="w-full bg-gray-200 rounded-full h-4"><div className="bg-red-600 h-4 rounded-full" style={{width: '5%'}}></div></div></div><p className="mt-6 text-center text-lg font-semibold text-green-800">Xulosa: Ovoz katta ehtimol bilan haqiqiy.</p></>}
                </div>
            </div>
        </div>
    );
};