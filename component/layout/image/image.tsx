import Image from "next/image";
import abstraction from '@/assest/icon/abstraction_for_pages.png'

export const AbstractionForPages = ()=>{
    return <Image style={{position:"absolute",bottom:'0',left:'0',zIndex:'-1'}} src={abstraction} alt={''}/>
}