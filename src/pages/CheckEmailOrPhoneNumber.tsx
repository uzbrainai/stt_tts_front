import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {ArrowLeft} from 'lucide-react';
import {FaGoogle} from "react-icons/fa";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import {ConfigProvider, message, Spin, Statistic} from "antd";
import instance from "@/config/axios_config";
import {ACCESS_TOKEN} from "@/config/constants";
import {useAuthStore} from "@/store/authStore";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import logo from "@/assets/logo.png";
import {FcRefresh} from "react-icons/fc";
import {GrFormRefresh} from "react-icons/gr";

export const CheckEmailOrPhoneNumber = () => {
    const {t} = useTranslation();
    const {type} = useParams();
    const [expired, setExpired] = useState(null);
    const [checkId, setCheckId] = useState<number>()
    const navigate = useNavigate();

    useEffect(() => {
        let split = type?.split("_");
        if (type?.startsWith("phone")) {
            setCheckId(Number(split?.[split?.length - 1]));
            setExpired(Number(split?.[split?.length - 2]));
        } else {
            setExpired(Number(split?.[split?.length - 1]));
        }
    }, [type])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let data = new FormData(e?.target);
        if (data.get("password") === data.get("confirmPassword")) {
            let resp = await instance({
                method: "post",
                url: type?.startsWith("email") ? "/auth/check-email" : "/auth/check-phone",
                params: type?.startsWith("email") ? {
                    email: type?.split("_")?.[1],
                    code: data.get("code")
                } : {
                    phoneNumber: type?.split("_")?.[1],
                    code: data.get("code"),
                    checkId
                }
            });
            if (resp?.data?.status === 1) {
                navigate("/login");
            }
        } else {
            message.error("Passwords not matches!");
        }
    };

    const reSendCode = async () => {
        try {
            let resp = await instance({
                method: "post",
                url: type?.startsWith("email") ? "/auth/re-send-code" : "/auth/re-send-sms",
                params: type?.startsWith("email") ? {
                    email: type?.split("_")?.[1]
                } : {
                    phoneNumber: type?.split("_")?.[1]
                }
            });
            if (resp?.data?.status === 1) {
                let split = type?.split("_");
                if (type?.startsWith("phone")) {
                    split[split?.length - 1] = resp?.data?.data?.checkId;
                    split[split?.length - 2] = resp?.data?.data?.expireDate;
                } else {
                    split[split?.length - 1] = resp?.data?.data?.expireDate+5*60*1000;
                }
                navigate("/check/" + split?.join("_"))
                message.success("Success");
            } else {
                message.error(resp?.data?.message);
            }
        } catch (e) {
            console.log(e);
            message.error("Error!");
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
            <div className="w-full max-w-md space-y-8 p-8">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <div
                            className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                            <img src={logo} alt="logo"/>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold">{t('auth.signup.title')}</h1>
                    <p className="text-muted-foreground mt-2">Join the future of UzBrainAi</p>
                </div>

                <div className="bg-card border rounded-2xl p-8 shadow-lg">
                    <div className="mb-3 text-center">
                        {
                            type?.startsWith?.("email") ? "Sizning " + type?.split("_")?.[1] + " nomli emailingizga tasdiqlash kodini yubordik. Iltimos uni bu yerga kiriting!" :
                                "Sizning " + type?.split("_")?.[1] + " raqamingizga tasdiqlash kodini yubordik. Iltimos uni bu yerga kiriting!"
                        }
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                            <Label htmlFor="name" className="flex justify-between items-center">
                                {t('auth.signup.code')}
                                {expired === null ? <span className="flex cursor-pointer" onClick={reSendCode}>
                                    <GrFormRefresh/>
                                    Qayta yuborish
                                </span> : <Statistic.Countdown onFinish={() => setExpired(null)}
                                                               valueStyle={{color: "white", fontSize: "12px"}}
                                                               className="text-light" format="mm:ss" value={expired}/>}
                            </Label>
                            <Input
                                id="code"
                                name="code"
                                type="text"
                                required
                                className="mt-1"
                                placeholder="Enter your verification code!"
                            />
                        </div>
                        <Button type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            {t('auth.signup.submit_code')}
                        </Button>
                    </form>
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

            {/* Background decoration */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>
        </div>
    )
        ;
};
