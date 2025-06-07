import {RouteType} from "../types";
import {Dashboard} from "../pages/main";
import {LoginPage} from "../pages/auth";
import {CustomLayout} from "../components/layout";
import {LuLayoutDashboard} from "react-icons/lu";
import {PiTreeStructure} from "react-icons/pi";
import {RolesAndPermissions} from "../pages/roles_and_permissions";
import {HomePage} from "../pages/home";

export const routes: Array<RouteType> = [
    {
        name: "Bosh sahifa",
        path: "/",
        element: HomePage,
        layout: CustomLayout,
        icon: LuLayoutDashboard,
        config: {
            isShowMenu: false,
            isRequiredAuth: false
        },
        props: {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    {
        name: "Bosh sahifa",
        path: "/account",
        element: Dashboard,
        layout: CustomLayout,
        icon: LuLayoutDashboard,
        config: {
            isShowMenu: true,
            isRequiredAuth: true
        },
        props: {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    {
        name: "Rol va ruxsatlar",
        path: "/role-and-permissions",
        element: RolesAndPermissions,
        layout: CustomLayout,
        icon: PiTreeStructure,
        config: {
            isShowMenu: true,
            isRequiredAuth: true
        },
        props: {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    {
        name: "Kirish",
        path: "/login",
        element: LoginPage,
        icon: LuLayoutDashboard,
        config: {
            isShowMenu: false,
            isRequiredAuth: false
        },
        props: {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }
]