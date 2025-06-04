import {HeaderComponent} from "../../components/header";
import {BannerComponent} from "../../components/banner";
import {AboutComponent} from "../../components/about";
import {NewsComponent} from "../../components/news";
import {ArticlesComponent} from "../../components/articles";
import {ProductsComponent} from "../../components/products";
import {PricesComponent} from "../../components/prices";
import {ServicesComponent} from "../../components/services";
import {ClientsComponent} from "../../components/clients";
import {ContactsComponent} from "../../components/contacts";
import {FooterComponent} from "../../components/footer";

export const HomePage = () => {

    return <>
        <HeaderComponent/>
        <BannerComponent/>
        <AboutComponent/>
        <ArticlesComponent/>
        <NewsComponent/>
        <PricesComponent/>
        <ProductsComponent/>
        <ServicesComponent/>
        <ClientsComponent/>
        {/*<PartnersComponent/>*/}
        <ContactsComponent/>
        <FooterComponent/>
    </>
}