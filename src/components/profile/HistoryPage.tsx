export const HistoryPage = () => {
    const transactions = [
        { date: '2024-05-20 14:30', type: "Hisobni to'ldirish (Payme)", amount: '+ 200,000 so\'m', status: 'Muvaffaqiyatli', isSuccess: true },
        { date: '2024-05-19 18:15', type: 'STT xizmati (3 daqiqa)', amount: '- 1,500 so\'m', status: 'Muvaffaqiyatli', isSuccess: true },
        { date: '2024-05-19 11:05', type: 'TTS xizmati (5000 belgi)', amount: '- 1,000 so\'m', status: 'Muvaffaqiyatli', isSuccess: true },
        { date: '2024-05-18 09:40', type: 'Ovoz haqiqiyligini tekshirish', amount: '- 2,000 so\'m', status: 'Muvaffaqiyatli', isSuccess: true }
    ];
    return (
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Operatsiyalar Tarixi</h2>
            <div className="overflow-x-auto"><table className="min-w-full bg-white"><thead className="bg-gray-800 text-white"><tr><th className="text-left py-3 px-4 uppercase font-semibold text-sm">Sana</th><th className="text-left py-3 px-4 uppercase font-semibold text-sm">Operatsiya turi</th><th className="text-right py-3 px-4 uppercase font-semibold text-sm">Summa</th><th className="text-center py-3 px-4 uppercase font-semibold text-sm">Holat</th></tr></thead><tbody className="text-gray-700">{transactions.map((t, i) => (<tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="text-left py-3 px-4">{t.date}</td><td className="text-left py-3 px-4">{t.type}</td><td className={`text-right py-3 px-4 font-semibold ${t.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{t.amount}</td><td className="text-center py-3 px-4"><span className={`py-1 px-3 rounded-full text-xs ${t.isSuccess ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>{t.status}</span></td></tr>))}</tbody></table></div>
        </div>
    );
};