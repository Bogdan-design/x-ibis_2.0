import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="none"
        {...props}
    >
        <g
            stroke="#514E4E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        >
            <path d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z" />
            <path d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" />
        </g>
    </svg>
)
export default SvgComponent
