import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {ArrowLeft} from 'lucide-react';
import {FaGoogle} from "react-icons/fa";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import {message, Spin} from "antd";
import instance from "@/config/axios_config";
import {ACCESS_TOKEN} from "@/config/constants";
import {useAuthStore} from "@/store/authStore";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import i18n from "@/i18n";

const Signup = () => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const {setUserAndAuth, setLoading, loading} = useAuthStore(s => s);
    const navigate = useNavigate();
    const [emailOrPhone, setEmailOrPhone] = useState<"email" | "phone">("email")
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoadingSubmit(true)
        let data = new FormData(e?.target);
        if (emailOrPhone === "email") {
            data.append("isGoogleAuth", "true")
        }
        if (data.get("password") === data.get("confirmPassword")) {
            let resp = await instance({
                method: "post",
                url: "/auth/register",
                data: data
            });
            if (resp?.data?.status === 1) {
                let link = "/check/" + emailOrPhone + "_" + resp?.data?.data?.[emailOrPhone === "email" ? "email" : "phoneNumber"];
                if (emailOrPhone === "phone") {
                    link += "_" + resp?.data?.data?.expireDate + "_" + resp?.data?.data?.checkId
                } else {
                    link += "_" + resp?.data?.data?.expireDate
                }
                navigate(link);
            } else {
                message?.error(resp?.data?.message);
            }
            setLoadingSubmit(false)
        } else {
            message.error("Passwords not matches!");
            setLoadingSubmit(false)
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSuccess = async (e) => {
        let idToken = e?.credential
        try {
            setLoading(true);
            let resp = await instance({
                url: "auth/google",
                method: "post",
                data: {
                    idToken
                }
            });
            if (resp?.data?.status === 1) {
                const resData = resp?.data?.data;
                message.success("Authorization is success!");
                setUserAndAuth({
                    isAuth: true,
                    user: {
                        id: resData?.user?.id,
                        username: resData?.user?.username,
                        lastName: resData?.user?.lastName,
                        firstName: resData?.user?.firstName,
                        middleName: resData?.user?.middleName,
                        roles: resData?.user?.roles,
                        freeRequests:resData?.user?.freeRequests,
                        requiredChangePassword: resData?.user?.requiredChangePassword,
                        userAccount: resData?.user?.userAccount
                    },
                    permissions: resData?.user?.roles?.map((item: any) => item?.permissions)?.flat()
                });
                localStorage.setItem(ACCESS_TOKEN, resData?.auth_data?.token);
                navigate("/dashboard")
                setLoading(false);
            } else {
                setLoading(false);
                message.error("Authorization is failed!");
            }
        } catch (e: any) {
            console.log(e);
            message.error(e?.response?.data?.message ?? "Error!");
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
            <div className="absolute top-4 left-4">
                <Button variant="ghost" size="sm" asChild>
                    <Link to="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4"/>
                        {t('nav.home')}
                    </Link>
                </Button>
            </div>

            <Spin spinning={loading}>
                <div className="w-full max-w-md space-y-8 p-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">VA</span>
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold">{t('auth.signup.title')}</h1>
                        <p className="text-muted-foreground mt-2">Join the future of voice AI</p>
                    </div>

                    <div className="bg-card border rounded-2xl p-8 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <Label htmlFor="name">{t('auth.signup.name')}</Label>
                                <Input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    required
                                    className="mt-1"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <RadioGroup value={emailOrPhone} onValueChange={(e: "email" | "phone") => {
                                    setEmailOrPhone(e)
                                }}>
                                    <div className="flex">
                                        <div className="flex items-center me-5">
                                            <RadioGroupItem value={"email"} className="me-2"/>Email
                                        </div>
                                        <div className="flex items-center">
                                            <RadioGroupItem value={"phone"} className="me-2"/>Phone
                                        </div>
                                    </div>
                                </RadioGroup>
                                <Label
                                    htmlFor={emailOrPhone === "email" ? "email" : "phone"}>{t(emailOrPhone === "email" ? 'auth.signup.email' : 'auth.signup.phone')}</Label>
                                {emailOrPhone === "email" ? <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-1"
                                    placeholder="Enter your email"
                                /> : <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    required
                                    className="mt-1"
                                    placeholder="Enter your phone number"
                                />}
                            </div>

                            <div>
                                <Label htmlFor="password">{t('auth.signup.password')}</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="mt-1"
                                    placeholder="Create a strong password"
                                />
                            </div>

                            <div>
                                <Label htmlFor="confirmPassword">{t('auth.signup.confirmPassword')}</Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="mt-1"
                                    placeholder="Confirm your password"
                                />
                            </div>

                            <div className="flex items-start space-x-2">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    required
                                    className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <Label htmlFor="terms" className="text-sm">
                                    I agree to the{' '}
                                    <Link to="/terms" className="text-primary hover:underline">Terms of
                                        Service</Link> and{' '}
                                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                                </Label>
                            </div>

                            <Button disabled={loadingSubmit} type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                {loadingSubmit ? "Submitting..." : t('auth.signup.submit')}
                            </Button>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"/>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center gap-3">
                                <GoogleOAuthProvider
                                    clientId="408639377048-bi6ejjsnj3e1fqnb5jbdli6l8lvs8ls4.apps.googleusercontent.com">
                                    <GoogleLogin
                                        shape={"rectangular"}
                                        size={"large"}
                                        text={"signup_with"}
                                        locale={i18n.language}
                                        onSuccess={handleSuccess}
                                        onError={() => console.log("Login Failed")}
                                    />
                                </GoogleOAuthProvider>
                                {/*<Button variant="outline" className="w-full">*/}
                                {/*  <span className="mr-2">💼</span>*/}
                                {/*  LinkedIn*/}
                                {/*</Button>*/}
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-muted-foreground">
                                {t('auth.signup.login')}{' '}
                                <Link to="/login" className="text-primary hover:underline font-medium">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="text-center text-xs text-muted-foreground">
                        <p>By creating an account, you agree to our{' '}
                            <Link to="/terms" className="hover:underline">Terms of Service</Link> and{' '}
                            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                        </p>
                    </div>
                </div>
            </Spin>

            {/* Background decoration */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default Signup;
