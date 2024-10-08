import 'app/globals.scss'
import type {Metadata} from 'next'
import React, {ReactNode} from "react";
import {Toaster} from "react-hot-toast";
import {BDO_Grotesk} from "@/fonts/fonts";
import 'overlayscrollbars/overlayscrollbars.css'
import {Constants} from "@/common/local/constants";
import {MobileContextProvider} from "@/context/mobile.context";
import I18nProvider from "@/common/local/I18nProvider";


export const metadata: Metadata = {
    title: 'X-IBIS',
    description: 'We will make your IT infrastructure reliable, modern and secure.',
}



export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang={Constants.PL}>
        <body className={`${BDO_Grotesk.className}`}>
        <I18nProvider>
            <MobileContextProvider>
                {children}
                <Toaster position='bottom-center'/>
            </MobileContextProvider>
        </I18nProvider>
        </body>
        </html>
    )
}

