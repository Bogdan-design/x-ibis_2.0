import React from 'react';
import {About} from "@/component/about/about";
import {Certification} from "@/component/certification/certification";
import {Contact} from "@/component/contact/contact";
import {LandingHeader} from "@/component/landing/landingHeager/landingHeader";

export default function LandingPage() {
    return (
        <section>
            <LandingHeader/>
            <About/>
            <Certification/>
            <Contact/>
        </section>
    )
}
