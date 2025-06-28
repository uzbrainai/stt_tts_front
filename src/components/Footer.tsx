import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import logo from "@/assets/logo.png";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="bg-muted/30 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Link to="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                                    <img src={logo} alt="logo"/>
                                </div>
                                <span
                                    className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            UzBrainAi
          </span>
                            </Link>
                        </div>
                        <p className="text-muted-foreground">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{t('footer.links')}</h3>
                        <ul className="space-y-2">
                            <li><Link to="/products"
                                      className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.products')}</Link>
                            </li>
                            <li><Link to="/services"
                                      className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.services')}</Link>
                            </li>
                            <li><Link to="/pricing"
                                      className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.pricing')}</Link>
                            </li>
                            <li><Link to="/contact"
                                      className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.contact')}</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>info@uzbrainai.uz</li>
                            <li>+998(94) 123 45 67</li>
                            <li>Toshkent, Yangi Darxon 65/14</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">{t("footer.followUs")}</h3>
                        <div className="flex space-x-4">
                            <a href="#"
                               className="text-muted-foreground hover:text-foreground transition-colors"><FaXTwitter/></a>
                            <a target="_blank" href="https://www.linkedin.com/in/uzbrainai-company-934ba9371/"
                               className="text-muted-foreground hover:text-foreground transition-colors"><FaLinkedin/></a>
                            <a target={"_blank"} href="https://github.com/uzbrainai"
                               className="text-muted-foreground hover:text-foreground transition-colors"><FaGithub/></a>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
                    <p>&copy; 2025 UzBrainAI. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
