'use client'
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';

type MobileContextProviderPropType = { children: ReactNode }
type MobileContextType = {
    isMobile: boolean
}

export const MobileContext = createContext<MobileContextType | null>(null)

export const MobileContextProvider = ({children}:MobileContextProviderPropType)=>{
    const [isMobile, setIsMobile] = useState<boolean>(false);


    useEffect(() => {

    const handleDevice = () => {
        setIsMobile(/Android|Iphone/i.test(navigator.userAgent))
    }
    handleDevice()
}, []);

    return (
        <MobileContext.Provider value={{isMobile}}>
            {children}
        </MobileContext.Provider>
    );
}

export const useMobileContext =()=> {
    const context = useContext(MobileContext)
    if (!context) {
        throw new Error('useMobileContext must be used within an MobileContextProvider')
    }
    return context
}