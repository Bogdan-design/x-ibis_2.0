import React from 'react';
import {Header} from "@/component/layout/header/header";
import {HomePage} from "@/component/home/homePage";
import {Clients} from "@/component/servises/clients/clients";
import {Services} from "@/component/servises/services";
import {About} from "@/component/about/about";
import {Certification} from "@/component/certification/certification";
import {Contact} from "@/component/contact/contact";

export default function LandingPage() {
    return (
        <section>
            <About/>
            <Certification/>
            <Contact/>
        </section>
    )
}
