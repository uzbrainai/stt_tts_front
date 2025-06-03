import {Button, Form, Grid, Input, message, theme, Typography} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import logo from '../../assets/logo.jpg'
import {styles} from "./style";
import instance from "../../config/axios_config";
import {useAuthStore} from "../../store/authStore";
import {ACCESS_TOKEN} from "../../config/constants";

const {useToken} = theme;
const {useBreakpoint} = Grid;
const {Title} = Typography;

export const LoginPage = () => {
    const {token} = useToken();
    const screens = useBreakpoint();
    const {setUserAndAuth, setLoading} = useAuthStore(s => s);

    const onFinish = async (values: any) => {
        try {
            setLoading(true)
            let data = new FormData();
            data.append("username", values?.username);
            data.append("password", values?.password);
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
                        requiredChangePassword: resData?.user?.requiredChangePassword
                    },
                    permissions: resData?.user?.roles?.map((item: any) => item?.permissions)?.flat()
                });
                localStorage.setItem(ACCESS_TOKEN, resData?.auth_data?.token)
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


    return (
        <section style={styles(token, screens)?.section}>
            <div className="shadow" style={styles(token, screens)?.container}>
                <div className="text-center" style={styles(token, screens)?.header}>
                    <img src={logo}
                         width="150"
                         height="100"
                    />
                    <Title style={styles(token, screens)?.title}>Adminga kirish</Title>
                </div>
                <Form
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    layout="vertical"
                    requiredMark="optional"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Iltimos maydonni toldiring!",
                            }
                        ]}
                    >
                        <Input
                            allowClear
                            prefix={<UserOutlined/>}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Iltimos maydonni toldiring!",
                            }
                        ]}
                    >
                        <Input.Password
                            allowClear
                            prefix={<LockOutlined/>}
                            type="password"
                            placeholder="Parol"
                            autoComplete="new-password"
                        />
                    </Form.Item>
                    <Form.Item style={{marginBottom: "0px"}}>
                        <Button block type="primary" htmlType="submit">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>)
}