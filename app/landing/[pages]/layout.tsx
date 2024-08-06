import React from "react";
import {HeaderPage} from "@/component/layout/header/headerPage";
import {Footer} from "@/component/footer/footer";

export default function PagesLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return <section>
        {children}
        <Footer/>
    </section>
}
