import {useState} from "react";
import {AIAnimation} from "./animations";

export const SttPage = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const handleProcess = () => {
        setIsProcessing(true);
        setTimeout(() => setIsProcessing(false), 3000);
    };

    return (
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"><h2 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Nutqni Matnga O'girish (STT)</h2><span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">Narx: 1 daqiqa / 500 so'm</span></div>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Audio fayl yuklang (.mp3, .wav)</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"><div className="space-y-1 text-center"><svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg><div className="flex text-sm text-gray-600"><label htmlFor="stt-file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"><span>Fayl tanlang</span><input id="stt-file-upload" name="stt-file-upload" type="file" className="sr-only" /></label><p className="pl-1">yoki bu yerga tortib olib keling</p></div></div></div>
                    <div className="mt-4 flex items-center justify-center"><button className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 flex items-center space-x-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 017 8a1 1 0 10-2 0 7.001 7.001 0 006 6.93V17H9a1 1 0 100 2h2a1 1 0 100-2h-1v-2.07z" clipRule="evenodd" /></svg><span>Yozib olish</span></button></div>
                </div>
                <div className="flex flex-col">
                    {isProcessing ? <AIAnimation type="stt" /> : <div><label htmlFor="stt-result" className="block text-sm font-medium text-gray-700">Natija:</label><textarea id="stt-result" rows={10} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Bu yerda matn paydo bo'ladi..."></textarea></div>}
                    <button onClick={handleProcess} className="mt-4 self-end bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">Tekshirish</button>
                </div>
            </div>
        </div>
    );
};