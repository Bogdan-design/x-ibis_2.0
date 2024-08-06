import React from "react";
import {HeaderPage} from "@/component/layout/header/headerPage";
import {Contact} from "@/component/contact/contact";
import {Footer} from "@/component/footer/footer";

export default function PagesLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return <section>
        <HeaderPage/>
        {children}
    </section>
}
