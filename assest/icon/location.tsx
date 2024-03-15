import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27px"
        height="30px"
        fill="none"
        {...props}
    >
        <path
            stroke="#E75934"
            strokeWidth={1.5}
            d="M13.074 16.995a4.36 4.36 0 0 0 4.354-4.353 4.36 4.36 0 0 0-4.354-4.354 4.359 4.359 0 0 0-4.353 4.354 4.36 4.36 0 0 0 4.353 4.353Z"
        />
        <path
            stroke="#E75934"
            strokeWidth={1.5}
            d="M1.381 10.102c2.75-12.083 20.652-12.07 23.386.014 1.605 7.089-2.804 13.089-6.67 16.8-2.804 2.707-7.241 2.707-10.06 0-3.85-3.711-8.26-9.725-6.656-16.814Z"
        />
    </svg>
)
export default SvgComponent
