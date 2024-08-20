import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.5px"
        height="16.5px"
        fill="none"
        {...props}
    >
        <path stroke="#C4C4C4" d="M1.36 1 17.5 17.141M17.5 1 1 17.5" />
    </svg>
)
export default SvgComponent
