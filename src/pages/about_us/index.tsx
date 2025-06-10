import {FC, JSX} from "react";
import {HeaderComponent} from "../../components/header";
import {FooterComponent} from "../../components/footer";

export const AboutUs: FC = (): JSX.Element => {
    return (
        <div>
            <HeaderComponent/>
            <div>About us</div>
            <FooterComponent/>
        </div>
    )
}