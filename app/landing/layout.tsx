import React from 'react';

import {HeaderPage} from "@/component/layout/header/headerPage";

export default function LandingLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return <section >
        <HeaderPage/>
        {children}
    </section>
}
