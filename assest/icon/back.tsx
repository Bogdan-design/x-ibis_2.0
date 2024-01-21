import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="none"
        {...props}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m15.5 19-7-7 7-7"
        />
    </svg>
)
export default SvgComponent
