import {RefObject, useEffect} from "react";
import {OverlayScrollbars} from 'overlayscrollbars'


const config = {}

export const useScrollbar = (root:RefObject<HTMLDivElement>) => {
    useEffect(() => {
        let scrollbars: OverlayScrollbars
        if (root && root.current) {
            scrollbars =  OverlayScrollbars(root.current, config)
        }
        return ()=> {
            if(scrollbars) {
                scrollbars.destroy()
            }
        }
    }, [root])
}