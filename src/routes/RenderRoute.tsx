import {PageNotFound} from "../pages/not_found";
import {routes} from "./index";
import Component from "./component";
import {FC} from "react";
import {Routes, Route} from "react-router";
import {useAuthStore} from "../store/authStore";
import {LoginPage} from "../pages/auth";

const RenderRoute: FC = (): JSX.Element => {
    const {isAuth} = useAuthStore()
    return (
        <Routes>
            {
                routes?.map((route, index) => {
                    return <Route key={index} element={
                        route?.config?.isRequiredAuth ? isAuth ? route?.layout ?
                                <Component component={route.layout} propData={route?.props}>
                                    <Component propData={route?.props}
                                               component={route.element}/>
                                </Component> : <Component propData={route?.props}
                                                          component={route.element}/> : <LoginPage/> :
                            <Component propData={route?.props}
                                       component={route.element}/>
                    } path={route.path}/>
                })
            }
            <Route element={<PageNotFound/>} path="*"/>
        </Routes>
    );
};

export default RenderRoute;
