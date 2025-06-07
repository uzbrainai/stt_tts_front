import {useState} from "react";

export const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (e:any) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    return (
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex flex-col items-center text-center">
                    <img className="h-32 w-32 rounded-full object-cover ring-4 ring-blue-500" src="https://placehold.co/100x100/E2E8F0/4A5568?text=AV" alt="User avatar" />
                    <button className="mt-4 bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm hover:bg-gray-300">Rasmni o'zgartirish</button>
                    <div className="mt-6 text-left w-full">
                        <h3 className="text-lg font-bold text-gray-800">Azizbek Ortiqov</h3>
                        <p className="text-gray-500">Dasturchi</p>
                        <p className="mt-2 text-sm text-gray-600">Ro'yxatdan o'tgan sana: 2023-05-15</p>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Shaxsiy ma'lumotlar</h2>
                    <form onSubmit={handleEdit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Ism</label>
                                <input type="text" defaultValue="Azizbek" disabled={!isEditing} className="mt-1 block w-full bg-gray-100 disabled:bg-gray-100 enabled:bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Familiya</label>
                                <input type="text" defaultValue="Ortiqov" disabled={!isEditing} className="mt-1 block w-full disabled:bg-gray-100 enabled:bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Elektron pochta</label>
                                <input type="email" defaultValue="azizbek.developer@gmail.com" disabled className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Telefon raqami</label>
                                <input type="tel" defaultValue="+998 90 123 45 67" disabled={!isEditing} className="mt-1 block w-full disabled:bg-gray-100 enabled:bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end space-x-3">
                            <button type="submit" className={`${isEditing ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-2 px-6 rounded-lg`}>
                                {isEditing ? 'Saqlash' : 'Tahrirlash'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};