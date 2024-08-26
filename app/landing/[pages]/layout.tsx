import React from "react";
import {Blocks} from "@/component/landing/blocks/blocks";

export default function PagesLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return <section>
        {children}
        <Blocks/>
    </section>
}
