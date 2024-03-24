import {HomePage} from "@/component/home/homePage";
import {Services} from "@/component/servises/services";
import {About} from "@/component/about/about";
import {Certification} from "@/component/certification/certification";
import {Contact} from "@/component/contact/contact";
import {Clients} from "@/component/servises/clients/clients";
import React from "react";
import {Header} from "@/component/layout/header/header";
import {ServicesMobile} from "@/component/servises/mobile/services.mobile";

export default function Home() {
    return (
        <main>
            <Header/>
            <HomePage/>
            <Clients/>
            <Services/>
            <About/>
            <Certification/>
            <Contact/>
        </main>
    )
}
