import React from "react";
import {LandingHeader} from "@/component/landing/landingHeager/landingHeader";
import {About} from "@/component/about/about";
import {Certification} from "@/component/certification/certification";
import {Contact} from "@/component/contact/contact";

function LandingPage() {
    return <section>
            <LandingHeader/>
            <About/>
            <Certification/>
            <Contact/>
    </section>
}


export default LandingPage