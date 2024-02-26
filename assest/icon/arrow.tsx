import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        fill="none"
        {...props}
    >
        <g stroke="#fff" clipPath="url(#a)">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m13 23.5 7-7 7 7"
            />
            <path d="M20 .5C30.77.5 39.5 9.23 39.5 20S30.77 39.5 20 39.5.5 30.77.5 20 9.23.5 20 .5Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h40v40H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
