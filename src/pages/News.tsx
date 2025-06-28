import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const News = () => {
    const {t} = useTranslation();
    const [filter, setFilter] = useState("All");
    const newsItems = [
        {
            id: 1,
            title: "VoiceAI Announces Major Breakthrough in Real-Time Voice Translation",
            excerpt: "Our latest AI model achieves 98% accuracy in real-time multilingual voice translation, supporting 50+ languages.",
            date: "December 1, 2024",
            category: "Product Update",
            image: "https://static.vecteezy.com/system/resources/thumbnails/023/056/329/small_2x/programmer-people-working-laptops-or-smartphones-with-ai-artificial-intelligence-software-engineer-coding-on-laptop-computers-with-technology-icons-and-binary-code-big-data-ai-bot-digital-machine-photo.jpg"
        },
        {
            id: 2,
            title: "Partnership with Leading Healthcare Provider",
            excerpt: "VoiceAI partners with HealthTech Inc. to implement voice-enabled patient documentation systems.",
            date: "November 28, 2024",
            category: "Partnership",
            image: "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
        },
        {
            id: 3,
            title: "New Voice Watermarking Technology Prevents Audio Deepfakes",
            excerpt: "Revolutionary watermarking technology provides unprecedented protection against AI-generated audio fraud.",
            date: "November 25, 2024",
            category: "Technology",
            image: "https://static.vecteezy.com/system/resources/thumbnails/049/191/168/small_2x/a-modern-workspace-featuring-advanced-technology-including-a-holographic-calendar-and-illuminated-data-streams-creating-an-innovative-and-dynamic-environment-for-productivity-photo.jpg"
        },
        {
            id: 4,
            title: "VoiceAI Raises $50M Series B Funding",
            excerpt: "Investment will accelerate development of next-generation voice authentication and biometric security solutions.",
            date: "November 20, 2024",
            category: "Funding",
            image: "https://t4.ftcdn.net/jpg/03/02/39/97/360_F_302399784_k69fNY2NhbWLYf3Xg4fUz50docoFAwjk.jpg"
        },
        {
            id: 5,
            title: "Launch of Developer API Platform",
            excerpt: "New comprehensive API platform makes it easier than ever to integrate advanced voice AI capabilities.",
            date: "November 15, 2024",
            category: "Platform",
            image: "https://t3.ftcdn.net/jpg/02/98/00/02/360_F_298000277_BGQ5Xde9HKvc3aRji8PoBHWV14RDBxxC.jpg"
        },
        {
            id: 6,
            title: "Industry Recognition: AI Innovation Award 2024",
            excerpt: "VoiceAI receives prestigious AI Innovation Award for contributions to voice technology advancement.",
            date: "November 10, 2024",
            category: "Awards",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOcYP2JM5nfHtZJai-LkaFynJpfx57yn2iA&s"
        }
    ];

    let categories = ['All', 'Product Update', 'Partnership', 'Technology', 'Funding', 'Platform', 'Awards']
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Latest News
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("Stay updated with the latest developments, partnerships, and innovations in voice AI technology")}
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 ${filter === category ? "bg-accent" : ""} rounded-full border hover:bg-accent hover:text-accent-foreground transition-colors`}
                    >
                        {t(category)}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems?.filter(a => filter === "All" ? true : a?.category === filter)?.map((item) => (
                    <article key={item.id}
                             className="group rounded-2xl border bg-card hover:shadow transition-all duration-300 overflow-hidden">
                        <div className="p-6">
                            <div className="flex flex-col items-center mb-4">
                                <div className="text-3xl mb-2"><img className="h-[250px]" src={item.image} alt="ss"/>
                                </div>
                                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                                  {t(item.category)}
                                </span>
                            </div>

                            <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-3">
                                {t(item.title)}
                            </h2>

                            <p className="text-muted-foreground mb-4 line-clamp-3">
                                {t(item.excerpt)}
                            </p>

                            <div className="flex items-center justify-between">
                                <time className="text-sm text-muted-foreground">{t(item.date)}</time>
                                <Link
                                    to={`/news/${item.id}`}
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    {t("Read more")} →
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Newsletter Signup */}
            <section className="mt-20 text-center">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">{t("Stay Informed")}</h2>
                    <p className="text-muted-foreground mb-6">
                        {t("Subscribe to our newsletter for the latest voice AI news and updates")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                            {t("Subscribe")}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
