import {RouteType} from "../types";
import {LoginPage} from "../pages/auth";
import {CustomLayout} from "../components/layout";
import {LuLayoutDashboard} from "react-icons/lu";
import {PiTreeStructure} from "react-icons/pi";
import {RolesAndPermissions} from "../pages/roles_and_permissions";
import {HomePage} from "../pages/home";
import {MainContent} from "../components/profile/MainPage";
import {UserProfile} from "../components/profile/UserProfile";
import {SttPage} from "../components/profile/SttPage";
import {TtsPage} from "../components/profile/TtsPage";
import {ApiPage} from "../components/profile/ApiDocPage";
import {WatermarkingPage} from "../components/profile/WatermarkingPage";
import {AuthenticityPage} from "../components/profile/AuthenticityPage";
import {HistoryPage} from "../components/profile/HistoryPage";
import {BillingPage} from "../components/profile/BillingPage";
import {FeedbackPage} from "../components/profile/FeedbackPage";

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
        element: UserProfile,
        layout:MainContent,
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
        name: "Bosh sahifa",
        path: "/account/stt",
        element: SttPage,
        layout:MainContent,
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
        name: "Bosh sahifa",
        path: "/account/tts",
        element: TtsPage,
        layout:MainContent,
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
        name: "Bosh sahifa",
        path: "/account/developer-api",
        element: ApiPage,
        layout:MainContent,
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
        name: "Bosh sahifa",
        path: "/account/watermarking",
        element: WatermarkingPage,
        layout:MainContent,
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
        name: "Bosh sahifa",
        path: "/account/check-voice",
        element: AuthenticityPage,
        layout:MainContent,
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
        name: "Bosh sahifa",
        path: "/account/history",
        element: HistoryPage,
        layout:MainContent,
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
        name: "Bosh sahifa",
        path: "/account/payment",
        element: BillingPage,
        layout:MainContent,
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
        name: "Bosh sahifa",
        path: "/account/feedback",
        element: FeedbackPage,
        layout:MainContent,
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