import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Layout from "@/components/Layout";
import DashboardLayout from "@/components/DashboardLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import News from "./pages/News";
import Articles from "./pages/Articles";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import STTBot from "./pages/dashboard/STTBot";
import TTSBot from "./pages/dashboard/TTSBot";
import WatermarkingBot from "./pages/dashboard/WatermarkingBot";
import AuthenticationBot from "./pages/dashboard/AuthenticationBot";
import DeveloperAPI from "./pages/dashboard/DeveloperAPI";
import Account from "./pages/dashboard/Account";
import Billing from "./pages/dashboard/Billing";
import Settings from "./pages/dashboard/Settings";
import NotFound from "./pages/NotFound";
import {useEffect} from "react";
import {ACCESS_TOKEN} from "@/config/constants";
import instance from "@/config/axios_config";
import {useAuthStore} from "@/store/authStore";
import {message} from "antd";

const App = () => {
    const {isAuth, setUserAndAuth, setLoading} = useAuthStore(s => s);
    const pathname = useLocation().pathname;
    const navigate = useNavigate();


    useEffect(() => {
        (async () => {
            try {
                let token = localStorage.getItem(ACCESS_TOKEN);
                if (token) {
                    setLoading(true)
                    let resp = await instance({
                        method: "get",
                        url: "/auth/current-user"
                    })
                    if (resp?.data?.status === 1) {
                        const data = resp?.data?.data;
                        setUserAndAuth({
                            isAuth: true,
                            user: {
                                id: data?.id,
                                firstName: data?.firstName,
                                username: data?.username,
                                lastName: data?.lastName,
                                middleName: data?.middleName,
                                roles: data?.roles,
                                requiredChangePassword: data?.requiredChangePassword
                            },
                            permissions: data?.roles?.map((item: any) => item?.permissions)?.flat()
                        });
                        message.success("Kirish tasdiqlandi!");
                        setLoading(false)
                    } else {
                        setLoading(false)
                        message.error("Xatolik yuz berdi!");
                    }
                }
            } catch (e: any) {
                let resp = e?.response?.data?.data;
                if (resp) {
                    message.error(resp?.msg)
                } else {
                    message.error("Xatolik yuz berdi!")
                }
                localStorage.clear();
                setLoading(false)
            } finally {
                setLoading(false)
            }
        })()
    }, []);

    useEffect(() => {
        if (pathname?.startsWith("/dashboard")) {
            if (!isAuth) {
                navigate("/login")
            }
        }
        if (pathname?.startsWith("/login")) {
            if (isAuth) {
                navigate("/dashboard")
            }
        }
    }, [isAuth, pathname])

    return (
        <Routes>
            {/* Auth routes without layout */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>

            {/* Dashboard routes with dashboard layout */}
            {!isAuth ? "" : <Route element={<DashboardLayout/>} path="/dashboard">
                <Route path="" element={<Dashboard/>}/>
                <Route path="stt" element={<STTBot/>}/>
                <Route path="tts" element={<TTSBot/>}/>
                <Route path="watermarking"
                       element={<WatermarkingBot/>}/>
                <Route path="authentication"
                       element={<AuthenticationBot/>}/>
                <Route path="api" element={<DeveloperAPI/>}/>
                <Route path="account" element={<Account/>}/>
                <Route path="billing" element={<Billing/>}/>
                <Route path="settings" element={<Settings/>}/>

            </Route>}
            {/* Main routes with layout */}
            <Route element={<Layout/>} path="/">
                <Route path="" element={<Home/>}/>
                <Route path="products" element={<Products/>}/>
                <Route path="services" element={<Services/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="articles" element={<Articles/>}/>
                <Route path="pricing" element={<Pricing/>}/>
                <Route path="testimonials" element={<Testimonials/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Route>

            {/* Catch-all route */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
