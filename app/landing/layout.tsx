import React from 'react';

import {HeaderPage} from "@/component/layout/header/headerPage";
import {About} from "@/component/about/about";
import {Certification} from "@/component/certification/certification";
import {Contact} from "@/component/contact/contact";

export default function LandingLayout({
                                          children,
                                      }: {
    children: React.ReactNode
}) {
    return <section>
        <HeaderPage/>
        {children}
        <About/>
        <Certification/>
        <Contact/>
    </section>
}
