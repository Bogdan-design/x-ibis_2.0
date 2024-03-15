import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34px"
        height="30px"
        fill="none"
        {...props}
    >
        <g
            stroke="#E75934"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            clipPath="url(#a)"
        >
            <path d="M24.907 28.784H9.093c-4.744 0-7.907-2.433-7.907-8.108V9.324c0-5.675 3.163-8.108 7.907-8.108h15.814c4.744 0 7.907 2.433 7.907 8.108v11.352c0 5.675-3.163 8.108-7.907 8.108Z" />
            <path d="m24.907 10.135-4.95 4.054c-1.629 1.33-4.301 1.33-5.93 0l-4.934-4.054" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h34v30H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
