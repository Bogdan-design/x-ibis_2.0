import {AbstractionForPages} from "@/component/layout/image/image";
import React from "react";
import {HeaderPage} from "@/component/layout/header/headerPage";

export default function PagesLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return <section>
        <HeaderPage/>
        {children}
        <AbstractionForPages/>
    </section>
}


