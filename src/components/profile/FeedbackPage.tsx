import {StarIcon} from "./icons";
import {useState} from "react";

export const FeedbackPage = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    if (isSubmitted) {
        return (
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto text-center">
                <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 mt-4">Rahmat!</h2>
                <p className="text-gray-600 mt-2">Fikr-mulohazangiz uchun tashakkur. U bizga xizmatimizni yaxshilashga yordam beradi.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-6 bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">Yana yuborish</button>
            </div>
        )
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Fikr-mulohaza qoldirish</h2>
            <p className="text-gray-600 mb-6 text-center">Xizmatlarimiz sizga manzur bo'ldimi?</p>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center space-x-2 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)}>
                            <StarIcon isFilled={hoverRating >= star || rating >= star} onClick={() => setRating(star)} />
                        </div>
                    ))}
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Sizning izohingiz</label>
                    <textarea id="comment" name="comment" rows={5} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Xizmat sifatini yaxshilash uchun o'z takliflaringizni yozing..."></textarea>
                </div>
                <div className="mt-6">
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold text-lg py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400" disabled={rating === 0}>Yuborish</button>
                </div>
            </form>
        </div>
    );
};