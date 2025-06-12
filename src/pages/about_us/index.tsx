import {FC, JSX} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const AboutUs: FC = (): JSX.Element => {
    return (
        <div>
            <Header/>
            <div>About us</div>
            <Footer/>
        </div>
    )
}