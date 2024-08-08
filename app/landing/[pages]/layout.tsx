import React from "react";
import {Footer} from "@/component/footer/footer";
import {Blocks} from "@/component/landing/blocks/blocks";

export default function PagesLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return <section>
        {children}
        <Blocks/>
        <Footer/>
    </section>
}
