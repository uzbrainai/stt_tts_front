import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@/contexts/ThemeContext';
import {Button} from '@/components/ui/button';
import {Switch} from '@/components/ui/switch';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from '@/components/ui/navigation-menu';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger
} from "@/components/ui/select";
import {Menu, X} from 'lucide-react';

const Header = () => {
    const {t, i18n} = useTranslation();
    const {theme, toggleTheme} = useTheme();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        {path: '/', label: t('nav.home')},
        {path: '/products', label: t('nav.products')},
        {path: '/services', label: t('nav.services')},
        {path: '/news', label: t('nav.news')},
        {path: '/articles', label: t('nav.articles')},
        {path: '/pricing', label: t('nav.pricing')},
        {path: '/testimonials', label: t('nav.testimonials')},
        {path: '/contact', label: t('nav.contact')}
    ];

    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <div
                        className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">VA</span>
                    </div>
                    <span
                        className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            UzBrainAI
          </span>
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="flex gap-2">
                        {navLinks.map((link) => (
                            <NavigationMenuItem key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive(link.path)
                                            ? 'bg-accent text-accent-foreground'
                                            : 'hover:bg-accent hover:text-accent-foreground'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right Controls */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Language Switcher */}
                    <Select value={i18n.language} onValueChange={changeLanguage}>
                        <SelectTrigger style={{width: "80px"}}/>
                        <SelectContent style={{width: "120px"}}>
                            <SelectItem value="uz">
                <span className="flex items-center space-x-1">
                  <img width={20}
                       src="https://gimgs2.nohat.cc/thumb/f/350/flag-of-uzbekistan-kazakhstan-turkmenistan-national-flag-stripe-checkered-flag--5620960208093184.jpg"
                       alt="uz"/>
                  <span>O'zbekcha</span>
                </span>
                            </SelectItem>
                            <SelectItem value="ru">
                <span className="flex items-center space-x-1">
                  <img width={20}
                       src="https://www.vhv.rs/dpng/d/438-4383999_russia-flag-clipart-photo-russia-flag-clipart-transparent.png"
                       alt="ru"/>
                  <span>Русский</span>
                </span>
                            </SelectItem>
                            <SelectItem value="en">
                <span className="flex items-center space-x-1">
                  <img width={20} src="https://i.pinimg.com/736x/53/a4/ab/53a4ab4b772fd11db92c6aefc71ac907.jpg"
                       alt="en"/>
                  <span>English</span>
                </span>
                            </SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Theme Switch */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm">🌞</span>
                        <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme}/>
                        <span className="text-sm">🌙</span>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" asChild>
                            <Link to="/login">{t('nav.login')}</Link>
                        </Button>
                        <Button size="sm" asChild>
                            <Link to="/signup">{t('nav.signup')}</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile burger icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <nav className={`
                           md:hidden px-4 pb-4
                           transition-all duration-300 ease-in-out
                           animate-fade-slide-in
                         `}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    isActive(link.path)
                                        ? 'bg-accent text-accent-foreground'
                                        : 'hover:bg-accent hover:text-accent-foreground'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="mt-4 flex items-center space-x-2">
                            <span className="text-sm">🌞</span>
                            <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme}/>
                            <span className="text-sm">🌙</span>
                        </div>
                        <div className="mt-2">
                            <Select value={i18n.language} onValueChange={changeLanguage}>
                                <SelectTrigger className="w-full"/>
                                <SelectContent className="w-full">
                                    <SelectItem value="uz">
                <span className="flex items-center space-x-1">
                  <img width={20}
                       src="https://gimgs2.nohat.cc/thumb/f/350/flag-of-uzbekistan-kazakhstan-turkmenistan-national-flag-stripe-checkered-flag--5620960208093184.jpg"
                       alt="uz"/>
                  <span>O'zbekcha</span>
                </span>
                                    </SelectItem>
                                    <SelectItem value="ru">
                <span className="flex items-center space-x-1">
                  <img width={20}
                       src="https://www.vhv.rs/dpng/d/438-4383999_russia-flag-clipart-photo-russia-flag-clipart-transparent.png"
                       alt="ru"/>
                  <span>Русский</span>
                </span>
                                    </SelectItem>
                                    <SelectItem value="en">
                <span className="flex items-center space-x-1">
                  <img width={20} src="https://i.pinimg.com/736x/53/a4/ab/53a4ab4b772fd11db92c6aefc71ac907.jpg"
                       alt="en"/>
                  <span>English</span>
                </span>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <Button variant="outline" asChild>
                                <Link to="/login">{t('nav.login')}</Link>
                            </Button>
                            <Button asChild>
                                <Link to="/signup">{t('nav.signup')}</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
