import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai";
import {Avatar, Button, Dropdown, Layout, Menu, theme} from 'antd';
import {FC, useState} from "react";
import {routes} from "../../routes";
import {useLocation, useNavigate} from "react-router";
import logo from '../../assets/logo.jpg'
import Component from "../../routes/component";
import {useAuthStore} from "../../store/authStore";
import {CiSettings} from "react-icons/ci";
import {RiLogoutCircleRLine} from "react-icons/ri";
import {ACCESS_TOKEN} from "../../config/constants";

const {Sider, Header, Content} = Layout

export const CustomLayout: FC<{ children: any }> = ({children}) => {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {user, setUserAndAuth} = useAuthStore(s => s);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const logout = () => {
        setUserAndAuth({isAuth: false, user: undefined, permissions: []})
        localStorage.removeItem(ACCESS_TOKEN)
    }
    return <Layout style={{width: "100vw", height: "100vh"}}>
        <Sider trigger={null} collapsedWidth={0} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical d-flex justify-content-center py-2">
                <img width={50} src={logo} alt="Logo"/>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[pathname]}
                items={routes?.filter(r => r.config?.isShowMenu)
                    .map((r) => ({
                        label: <span className="ms-2">{r.name}</span>,
                        key: r.path,
                        icon: <Component component={r.icon} propData={{}}/>,
                        onClick: () => {
                            navigate(r.path)
                        }
                    }))}
            />
        </Sider>
        <Layout>
            <Header style={{padding: 0, background: colorBgContainer}}>
                <div className="d-flex justify-content-between align-items-center">
                    <Button
                        type="text"
                        icon={collapsed ? <AiOutlineMenuUnfold/> : <AiOutlineMenuFold/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div>
                        <h3>
                            UZ BRAIN AI
                        </h3>
                    </div>
                    <div className="me-3">
                        <Dropdown menu={{
                            items: [
                                {label: user?.username,type:"group"},
                                {key: "1", label: "Settings", icon: <CiSettings/>},
                                {key: "2", label: "Log out", icon: <RiLogoutCircleRLine/>, onClick: logout}
                            ]
                        }}
                        >
                        <span className="d-flex justify-content-between align-items-center">
                                <Avatar>{user?.username?.[0]?.toUpperCase?.()}</Avatar>
                            </span>
                        </Dropdown>
                    </div>
                </div>
            </Header>
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    maxHeight: "88vh",
                    overflow: "auto",
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                {children}
            </Content>
        </Layout>
    </Layout>
}