import {PageNotFound} from "../pages/not_found";
import {routes} from "./index";
import Component from "./component";
import {FC} from "react";
import {Routes, Route} from "react-router";

const RenderRoute: FC = (): JSX.Element => {
    return (
        <Routes>
            {
                routes?.map((route, index) => {
                    return <Route key={index} element={
                        route?.layout ? <Component component={route.layout} propData={route?.props}>
                            <Component propData={route?.props}
                                       component={route.element}/>
                        </Component> : <Component propData={route?.props}
                                                  component={route.element}/>
                    } path={route.path}/>
                })
            }
            <Route element={<PageNotFound/>} path="*"/>
        </Routes>
    );
};

export default RenderRoute;
