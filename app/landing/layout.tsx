import React from 'react';
import {HeaderPage} from "@/component/layout/header/headerPage";

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
