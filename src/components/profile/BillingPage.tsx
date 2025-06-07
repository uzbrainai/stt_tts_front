export const BillingPage = () => (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Hisobni To'ldirish</h2>
        <div className="space-y-6">
            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">To'lov miqdori
                    (so'm)</label>
                <input type="number" id="amount" placeholder="50000"
                       className="mt-1 block w-full text-lg p-3 border-gray-300 rounded-md shadow-sm"/>
            </div>
            <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">To'lov tizimini tanlang</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <button
                        className="flex justify-center items-center p-4 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                        <img src="https://logobank.uz:8000/media/logos_png/Click-01.png" alt="Click" className="h-8"/>
                    </button>
                    <button
                        className="flex justify-center items-center p-4 border-2 border-blue-500 bg-blue-50 rounded-lg ring-1 ring-blue-500">
                        <img src="https://logobank.uz:8000/media/logos_png/Payme-01.png" alt="Payme" className="h-8"/>
                    </button>
                    <button
                        className="flex justify-center items-center p-4 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                        <img src="https://logobank.uz:8000/media/logos_png/Uzum_Bank-01.png" alt="Uzum Bank"
                             className="h-8"/>
                    </button>
                </div>
            </div>
            <button
                className="w-full bg-green-600 text-white font-bold text-lg py-3 rounded-lg hover:bg-green-700">To'lash
            </button>
        </div>
    </div>
);