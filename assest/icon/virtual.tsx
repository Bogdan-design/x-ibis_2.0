import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="85"
        height="74"
        fill="none"
        {...props}
    >
        <g fill="#E75934" clipPath="url(#a)">
            <path d="M85 42.46c-.193 1.019-.25 2.058-.53 3.063-2.299 8.27-7.69 13.251-16.121 14.975-1.387.284-2.81.275-4.223.27-.272 0-.39-.059-.389-.362.014-1.515.025-3.031-.004-4.545-.009-.467.271-.383.534-.377 2.556.066 5.012-.36 7.295-1.533 4.42-2.27 7.138-5.853 7.912-10.738 1.275-8.044-4.06-15.27-12.157-16.642-.904-.154-1.802-.336-2.706-.48-.406-.067-.578-.26-.653-.668-.441-2.402-.842-4.817-1.866-7.067-3.008-6.612-8-10.994-15.123-12.554-7.88-1.726-14.588.77-20.09 6.524-3.042 3.182-4.792 7.037-5.525 11.356-.101.592-.253 1.178-.333 1.772-.057.428-.293.58-.679.647-1.387.25-2.792.43-4.152.807C10.564 28.47 6.052 33.605 5.4 39.186c-.856 7.33 3.788 14.017 11.017 15.853 1.416.36 2.858.463 4.311.43.404-.01.534.085.525.506-.029 1.442-.015 2.885-.007 4.326 0 .288-.008.456-.394.467-5.013.121-9.547-1.237-13.444-4.407C3.075 52.84.574 48.282.08 42.704c-.89-10.066 5.73-18.959 15.715-21.152.38-.084.606-.206.699-.625 1.683-7.494 5.817-13.265 12.427-17.229C33.419 1 38.328-.239 43.584.038c9.07.48 16.127 4.55 21.21 11.99 1.817 2.66 3.014 5.624 3.678 8.782.09.428.25.652.71.746 8.405 1.704 14.575 8.706 15.63 16.605.05.373.01.768.187 1.121v3.177l.002.002Z" />
            <path d="M58.447 51.547c0 5.64-.007 11.279.002 16.92.005 3.157-2.265 5.505-5.44 5.516-6.991.024-13.984.024-20.975.004-3.169-.009-5.493-2.33-5.493-5.412 0-11.354 0-22.705.004-34.06 0-2.732 1.683-4.812 4.34-5.358.408-.083.838-.094 1.26-.094 6.9-.005 13.798 0 20.698 0 3.337 0 5.597 2.244 5.6 5.563v16.92h.004ZM42.494 34.349c-3.359 0-6.715.007-10.074-.009-.416 0-.569.084-.564.531.024 2.282.026 4.563.008 6.844-.004.432.126.55.554.55 6.735-.01 13.468-.01 20.203 0 .379 0 .502-.098.5-.486-.015-2.3-.015-4.6.007-6.9.004-.44-.14-.54-.56-.539-3.359.016-6.715.01-10.074.01Zm.002 21.137c3.359 0 6.717-.008 10.074.011.437.002.556-.123.551-.55-.018-2.227-.004-4.453-.004-6.68 0-.47-.24-.704-.72-.704-6.661 0-13.321.005-19.983-.01-.437 0-.56.115-.558.548.022 2.263.028 4.527.004 6.789-.004.482.13.612.613.61 3.339-.02 6.68-.011 10.019-.011l.004-.003Zm0 13.208c3.359 0 6.715-.005 10.074.006.375 0 .562-.052.56-.495-.02-2.319-.018-4.635-.007-6.954 0-.37-.099-.498-.491-.498-6.733.011-13.468.013-20.2 0-.486 0-.57.178-.568.601.016 2.227.023 4.453-.006 6.68-.007.528.15.675.677.673 3.321-.022 6.642-.011 9.963-.011l-.002-.002Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h85v74H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
