import {AbstractionForPages} from "@/component/layout/image/image";
import React from "react";

export default function PagesLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return <section>
        {children}
        <AbstractionForPages/>
    </section>
}