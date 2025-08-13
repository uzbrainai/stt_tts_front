import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {ArrowLeft} from 'lucide-react';
import {ACCESS_TOKEN} from "@/config/constants";
import {message} from "antd";
import instance from "@/config/axios_config";
import {useAuthStore} from "@/store/authStore";
import logo from "@/assets/logo.png";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import i18n from "@/i18n";

const Login = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const {setUserAndAuth, setLoading, loading} = useAuthStore(s => s);

    const onFinish = async (values: any) => {
        console.log(values)
        values?.preventDefault();
        try {
            setLoading(true)
            let data = new FormData(values?.target);
            console.log(data?.values())
            let resp = await instance({
                method: "post",
                url: "/auth/login",
                data
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
                setLoading(false)
            } else {
                setLoading(false)
                message.error("Authorization is failed!");
            }
        } catch (e) {
            setLoading(false)
            console.log(e);
            message.error("Authorization is failed!");
        }
    };

    const handleSuccess = async (e) => {
        let idToken = e?.credential
        try {
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
                        freeRequests:resData?.user?.freeRequests,
                        roles: resData?.user?.roles,
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
            setLoading(false);
            message.error(e?.response?.data?.message ?? "Error!");
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-4">
            <div className="absolute top-4 left-4">
                <Button variant="ghost" size="sm" asChild>
                    <Link to="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4"/>
                        {t('nav.home')}
                    </Link>
                </Button>
            </div>

            <Card className="w-full max-w-md mx-auto">
                <CardHeader className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                            <img src={logo} alt="logo"/>
                        </div>
                        <span
                            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UzBrainAi
            </span>
                    </div>
                    <CardTitle className="text-xl md:text-2xl">{t('auth.login.title')}</CardTitle>
                    <CardDescription className="text-sm md:text-base px-2">
                        {t("auth.login.description")}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={onFinish} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">
                                {t('auth.login.email')}
                            </Label>
                            <Input
                                type="text"
                                name={"username"}
                                required
                                placeholder="username or email"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium">
                                {t('auth.login.password')}
                            </Label>
                            <Input
                                type="password"
                                name={"password"}
                                required
                                placeholder="••••••••"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full text-sm md:text-base h-10 md:h-11"
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : t('auth.login.submit')}
                        </Button>
                    </form>
                    <div className="mt-6 text-center flex justify-center">
                        <GoogleOAuthProvider
                            clientId="250339210889-9903v08ckdqfs37hgaimosk38eekkmdo.apps.googleusercontent.com">
                            <GoogleLogin
                                text={"signin_with"}
                                locale={i18n.language}
                                onSuccess={handleSuccess}
                                onError={() => console.log("Login Failed")}
                            />
                        </GoogleOAuthProvider>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-sm mt-2 text-muted-foreground">
                            {t('auth.login.signup')}{' '}
                            <Link to="/signup" className="text-blue-600 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
