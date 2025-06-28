import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Articles = () => {
    const {t} = useTranslation()
    const [filter, setFilter] = useState("All");
    const articles = [
        {
            id: 1,
            title: "The Future of Voice Authentication: Beyond Passwords",
            excerpt: "Explore how voice biometrics are revolutionizing digital security and replacing traditional authentication methods.",
            author: "Dr. Sarah Chen",
            readTime: "8 min read",
            date: "December 5, 2024",
            category: "Security",
            tags: ["Authentication", "Biometrics", "Security"],
            image: "https://www.infosec4tc.com/wp-content/uploads/2024/11/Beyond-Passwords-The-Future-of-Authentication-in-a-Passwordless-World-1080x675.jpg"
        },
        {
            id: 2,
            title: "Understanding Voice Watermarking: Protecting Audio Content in the AI Era",
            excerpt: "A comprehensive guide to digital audio watermarking and its crucial role in combating AI-generated content fraud.",
            author: "Michael Rodriguez",
            readTime: "12 min read",
            date: "November 30, 2024",
            category: "Technology",
            tags: ["Watermarking", "Copyright", "AI"],
            image: "https://spectrum.ieee.org/media-library/image.jpg?id=52320589&width=1200&height=600&coordinates=0%2C115%2C0%2C116"
        },
        {
            id: 3,
            title: "Speech-to-Text Accuracy: Factors That Matter Most",
            excerpt: "Dive deep into the technical aspects that influence STT accuracy and how to optimize performance for your use case.",
            author: "Prof. James Liu",
            readTime: "10 min read",
            date: "November 25, 2024",
            category: "Technical",
            tags: ["STT", "Accuracy", "Optimization"],
            image: "https://cdn.prod.website-files.com/64b90f2245cd70647208323c/65df25793110f042a8fea317_Infographic%2038.webp"
        },
        {
            id: 4,
            title: "The Psychology of Synthetic Speech: Making TTS More Human",
            excerpt: "How advances in emotion recognition and prosody generation are making text-to-speech more natural and engaging.",
            author: "Dr. Emily Watson",
            readTime: "7 min read",
            date: "November 20, 2024",
            category: "Research",
            tags: ["TTS", "Psychology", "UX"],
            image: "https://media.licdn.com/dms/image/v2/D4E12AQG7CFz2nAmMAg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1732718544977?e=2147483647&v=beta&t=XBgSMpQo8xCI27efpVHr8P67z-SjsrTmu0qsA5ZRXlQ"
        },
        {
            id: 5,
            title: "Voice AI in Healthcare: Transforming Patient Care",
            excerpt: "Case studies showing how voice technology is improving documentation, diagnosis, and patient interaction in medical settings.",
            author: "Dr. Robert Kim",
            readTime: "15 min read",
            date: "November 15, 2024",
            category: "Industry",
            tags: ["Healthcare", "Documentation", "Case Study"],
            image: "https://editverse.com/wp-content/uploads/2024/07/AI-in-Healthcare-Transforming-Patient-Care-and-Diagnosis-scaled.jpg"
        },
        {
            id: 6,
            title: "Building Multilingual Voice Applications: Best Practices",
            excerpt: "Technical guide for developers on creating voice applications that work seamlessly across different languages and cultures.",
            author: "Alex Thompson",
            readTime: "11 min read",
            date: "November 10, 2024",
            category: "Development",
            tags: ["Multilingual", "Development", "Best Practices"],
            image: "https://www.addevice.io/storage/ckeditor/uploads/images/637ba6f15f60e_how.to.create.a.voice.translation.app.1920.1080.1.png"
        }
    ];


    const categories = ["All", "Technology", "Security", "Research", "Industry", "Development"];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-5xl pb-3 font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t("Knowledge Hub")}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("In-depth articles, technical insights, and expert perspectives on voice AI technology")}
                </p>
            </div>

            {/* Category Filter */}
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

            {/* Featured Article */}
            {/*<div className="mb-16">*/}
            {/*    <div*/}
            {/*        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border">*/}
            {/*        <div className="p-8 md:p-12">*/}
            {/*            <div className="max-w-3xl">*/}
            {/*  <span*/}
            {/*      className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground mb-4">*/}
            {/*    Featured*/}
            {/*  </span>*/}
            {/*                <h2 className="text-3xl md:text-4xl font-bold mb-4">*/}
            {/*                    {articles[0].title}*/}
            {/*                </h2>*/}
            {/*                <p className="text-lg text-muted-foreground mb-6">*/}
            {/*                    {articles[0].excerpt}*/}
            {/*                </p>*/}
            {/*                <div className="flex items-center space-x-4 text-sm text-muted-foreground">*/}
            {/*                    <span>{articles[0].author}</span>*/}
            {/*                    <span>•</span>*/}
            {/*                    <span>{articles[0].readTime}</span>*/}
            {/*                    <span>•</span>*/}
            {/*                    <span>{articles[0].date}</span>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div*/}
            {/*            className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles?.filter(a => filter === "All" ? true : a?.category === filter)?.map((article) => (
                    <article key={article.id}
                             className="group rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                        <div className="p-6">
                            <div className="flex flex-col items-center mb-4">
                                <div className="text-3xl mb-2"><img className="h-[250px]" src={article.image} alt="aa"/>
                                </div>
                                <span
                                    className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground">
                  {t(article.category)}
                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                {t(article.title)}
                            </h3>

                            <p className="text-muted-foreground mb-4 line-clamp-3">
                                {t(article.excerpt)}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {article.tags.map((tag) => (
                                    <span key={tag}
                                          className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                    {t(tag)}
                  </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <div className="flex items-center space-x-2">
                                    <span>{t(article.author)}</span>
                                    <span>•</span>
                                    <span>{t(article.readTime)}</span>
                                </div>
                                <Link
                                    to={`/articles/${article.id}`}
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    {t("Read more")} →
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Call to Action */}
            <section className="mt-20 text-center">
                <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">{t("Want to Contribute?")}</h2>
                    <p className="text-muted-foreground mb-6">
                        {t("Share your expertise with the voice AI community. We welcome technical articles, case studies, and research insights.")}
                    </p>
                    <button
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        {t("Submit Article")}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Articles;
