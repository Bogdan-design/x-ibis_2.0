import React from 'react';
import {HeaderPage} from "@/component/layout/header/headerPage";
import {Contact} from "@/component/contact/contact";

export default function LandingLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return <section style={{height:'100vh'}}>
        <HeaderPage/>
        {children}
    </section>
}
