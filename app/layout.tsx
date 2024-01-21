import 'app/globals.scss'
import type {Metadata} from 'next'
import {ReactNode} from "react";
import {Header} from "@/component/layout/header/header";
import {Toaster} from "react-hot-toast";
import {BDO_Grotesk} from "@/fonts/fonts";
import 'overlayscrollbars/overlayscrollbars.css'
import {Constants} from "@/common/local/constants";


export const metadata: Metadata = {
    title: 'X-IBIS',
    description: 'We will make your IT infrastructure reliable, modern and secure.',
}



export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang={Constants.EN}>
        <body className={`${BDO_Grotesk.className}`}>
        <div>
            <Header/>
            {children}
            <Toaster position='bottom-center'/>
        </div>
        </body>
        </html>
    )
}

