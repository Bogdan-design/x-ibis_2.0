import React from 'react';
import {About} from "@/component/about/about";
import {Certification} from "@/component/certification/certification";
import {Contact} from "@/component/contact/contact";
import {LandingHeader} from "@/component/landing/landingHeager/landingHeader";
import {Blocks} from "@/component/landing/blocks/blocks";

export default function LandingPage() {
    return (
        <section>
            <LandingHeader/>
            <Blocks/>
            <About/>
            <Certification/>
            <Contact/>
        </section>
    )
}
