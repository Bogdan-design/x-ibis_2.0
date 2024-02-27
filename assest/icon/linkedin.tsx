import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        fill="none"
        {...props}
    >
        <g fill="#fff" clipPath="url(#a)">
            <path d="M5.59 7.69H.77a.39.39 0 0 0-.39.39v15.48c0 .21.17.39.39.39h4.82c.21 0 .39-.17.39-.39V8.08a.39.39 0 0 0-.39-.39ZM3.18 0C1.43 0 0 1.42 0 3.18c0 1.76 1.43 3.18 3.18 3.18 1.75 0 3.18-1.43 3.18-3.18C6.36 1.43 4.93 0 3.18 0ZM17.84 7.31c-1.94 0-3.37.83-4.23 1.78V8.08a.39.39 0 0 0-.39-.39H8.61a.39.39 0 0 0-.39.39v15.48c0 .21.17.39.39.39h4.81c.21 0 .39-.17.39-.39V15.9c0-2.58.7-3.59 2.5-3.59 1.96 0 2.11 1.61 2.11 3.72v7.53c0 .21.17.39.39.39h4.81c.21 0 .39-.17.39-.39v-8.49c0-3.84-.73-7.76-6.16-7.76h-.01Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h24v23.95H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
