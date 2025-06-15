import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@/contexts/ThemeContext';
import {Button} from '@/components/ui/button';
import {Switch} from '@/components/ui/switch';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import {Menu, X} from 'lucide-react';
import logo from '../assets/logo.png'
import {useAuthStore} from "@/store/authStore";

const Header = () => {
    const {t, i18n} = useTranslation();
    const {theme, toggleTheme} = useTheme();
    const location = useLocation();
    const {isAuth} = useAuthStore()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        {path: '/', label: t('nav.home')},
        {path: '/products', label: t('nav.products')},
        {path: '/services', label: t('nav.services')},
        {path: '/news', label: t('nav.news')},
        {path: '/articles', label: t('nav.articles')},
        {path: '/pricing', label: t('nav.pricing')},
        {path: '/testimonials', label: t('nav.testimonials')},
        {path: '/contact', label: t('nav.contact')}
    ];

    const languageOptions = [
        {value: 'uz', label: <span>O'zbek</span>},
        {value: 'en', label: <span>English</span>},
        {value: 'ru', label: <span>Русский</span>}
    ];

    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                        <img src={logo} alt="logo"/>
                    </div>
                    <span
                        className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            UzBrainAi
          </span>
                </Link>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        {navItems.map((item) => (
                            <NavigationMenuItem key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive(item.path)
                                            ? 'bg-accent text-accent-foreground'
                                            : 'hover:bg-accent hover:text-accent-foreground'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Desktop Controls */}
                <div className="hidden lg:flex items-center space-x-4">
                    {/* Language Switcher */}
                    <Select onValueChange={changeLanguage} value={i18n.language}>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            {languageOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Theme Toggle */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm">🌞</span>
                        <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme}/>
                        <span className="text-sm">🌙</span>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" asChild>
                            <Link to={isAuth?"/dashboard":"/login"}>{t(isAuth ? 'nav.cabinet' : 'nav.login')}</Link>
                        </Button>
                        {isAuth ? "" : <Button size="sm" asChild>
                            <Link to="/signup">{t('nav.signup')}</Link>
                        </Button>}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t bg-background/95 backdrop-blur">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        {/* Mobile Navigation */}
                        <div className="space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive(item.path)
                                            ? 'bg-accent text-accent-foreground'
                                            : 'hover:bg-accent hover:text-accent-foreground'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Controls */}
                        <div className="border-t pt-4 space-y-4">
                            {/* Language Switcher */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Language:</span>
                                <Select onValueChange={changeLanguage} value={i18n.language}>
                                    <SelectTrigger className="w-[120px]">
                                        <SelectValue/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {languageOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Theme Toggle */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Theme:</span>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm">🌞</span>
                                    <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme}/>
                                    <span className="text-sm">🌙</span>
                                </div>
                            </div>

                            {/* Auth Buttons */}
                            <div className="flex flex-col space-y-2">
                                <Button variant="outline" size="sm" asChild>
                                    <Link to={isAuth?"/dashboard":"/login"} onClick={() => setIsMobileMenuOpen(false)}>
                                        {t(isAuth ? 'nav.cabinet' : 'nav.login')}
                                    </Link>
                                </Button>
                                {isAuth ? "" : <Button size="sm" asChild>
                                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                                        {t('nav.signup')}
                                    </Link>
                                </Button>}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
