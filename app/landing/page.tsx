import React from 'react';
import {LandingHeader} from "@/component/landing/landingHeager/landingHeader";
import {Description} from "@/component/landing/description/description";
import {Blocks} from "@/component/landing/blocks/blocks";

export default function LandingPage() {
    return (
        <section>
            <LandingHeader/>
            <Description/>
            <Blocks landing/>
        </section>
    )
}
