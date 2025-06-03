import {FC} from "react";

const CustomComponent: FC<{ component: any, children?: any, propData: any }> = ({
                                                                                    component: Component,
                                                                                    children,
                                                                                    propData
                                                                                }) => {
    return children ?
        <Component propData={propData}>
            {children}
        </Component>
        : <Component propData={propData}/>;
};
export default CustomComponent;