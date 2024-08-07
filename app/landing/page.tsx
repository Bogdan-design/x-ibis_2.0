import React from 'react';
import {About} from "@/component/about/about";
import {Certification} from "@/component/certification/certification";
import {Contact} from "@/component/contact/contact";
import {LandingHeader} from "@/component/landing/landingHeager/landingHeader";
import {Description} from "@/component/landing/description/description";

export default function LandingPage() {
    return (
        <section>
            <LandingHeader/>
            <Description/>
            <About/>
            <Certification/>
            <Contact/>
        </section>
    )
}
