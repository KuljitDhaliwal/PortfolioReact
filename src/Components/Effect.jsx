import { useContext, useEffect, useState } from "react"
import { effectContext } from "../contexts/EffectContext"

export const Effect = () => {
    const { effect } = useContext(effectContext);
    const [height, setHeight] = useState()
    useEffect(()=>{
        const handleHeight = () =>{
            if(window.innerWidth <= 768){
                setHeight('100')
            } else{
                setHeight('200')
            }  
        }
        window.addEventListener('resize', handleHeight)

        return ()=> window.removeEventListener('resize', handleHeight)
    },[])
    return (
        <>
            <div className={`absolute z-[-2] duration-300 pointer-events-none transition-all ${effect ? 'left-0 top-0 opacity-0' : 'left-[90%] top-[60%] opacity-100'}`}>
                <svg width="100" height={height} className={`transition-all duration-300 svg-val ${effect ? '' : 'blur-2xl'}`} viewBox="0 0 195 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_22_15)">
                        <mask id="path-1-inside-1_22_15" fill="white">
                            <path d="M9.99999 360C32.9813 360 55.7376 355.473 76.9696 346.679C98.2016 337.884 117.493 324.994 133.744 308.744C149.994 292.493 162.884 273.202 171.679 251.97C180.473 230.738 185 207.981 185 185C185 162.019 180.473 139.262 171.679 118.03C162.884 96.7984 149.994 77.5065 133.744 61.2563C117.493 45.006 98.2015 32.1156 76.9696 23.3211C55.7376 14.5265 32.9813 9.99999 9.99995 10L10 185L9.99999 360Z" />
                        </mask>
                        <path d="M9.99999 360C32.9813 360 55.7376 355.473 76.9696 346.679C98.2016 337.884 117.493 324.994 133.744 308.744C149.994 292.493 162.884 273.202 171.679 251.97C180.473 230.738 185 207.981 185 185C185 162.019 180.473 139.262 171.679 118.03C162.884 96.7984 149.994 77.5065 133.744 61.2563C117.493 45.006 98.2015 32.1156 76.9696 23.3211C55.7376 14.5265 32.9813 9.99999 9.99995 10L10 185L9.99999 360Z" fill="url(#paint0_linear_22_15)" />
                        <path d="M9.99999 360C32.9813 360 55.7376 355.473 76.9696 346.679C98.2016 337.884 117.493 324.994 133.744 308.744C149.994 292.493 162.884 273.202 171.679 251.97C180.473 230.738 185 207.981 185 185C185 162.019 180.473 139.262 171.679 118.03C162.884 96.7984 149.994 77.5065 133.744 61.2563C117.493 45.006 98.2015 32.1156 76.9696 23.3211C55.7376 14.5265 32.9813 9.99999 9.99995 10L10 185L9.99999 360Z" stroke="black" strokeWidth="2" mask="url(#path-1-inside-1_22_15)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_22_15" x="0" y="0" width="195" height="370" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_22_15" />
                        </filter>
                        <linearGradient id="paint0_linear_22_15" x1="10" y1="10" x2="10" y2="360" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F68E9C" />
                            <stop offset="0.5" stopColor="#F9B0C0" />
                            <stop offset="1" stopColor="#F7F48B" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className={`absolute z-[-2] duration-300 pointer-events-none transition-all ${effect ? 'left-0 top-0 opacity-0' : '-left-[40%] -top-[50%] opacity-100'}`}>
                <svg width="100" className={`transition-all duration-300 ${effect ? '' : 'blur-2xl'}`} height={height} viewBox="0 0 183 358" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_22_14)">
                        <path d="M3.99998 354C26.9813 354 49.7376 349.473 70.9696 340.679C92.2016 331.884 111.493 318.994 127.744 302.744C143.994 286.493 156.884 267.202 165.679 245.97C174.474 224.738 179 201.981 179 179C179 156.019 174.473 133.262 165.679 112.03C156.884 90.7984 143.994 71.5065 127.744 55.2563C111.493 39.006 92.2015 26.1156 70.9696 17.3211C49.7376 8.5265 26.9813 3.99999 3.99995 4L4 179L3.99998 354Z" fill="url(#paint0_linear_22_14)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_22_14" x="0" y="0" width="183" height="358" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_22_14" />
                        </filter>
                        <linearGradient id="paint0_linear_22_14" x1="4" y1="4" x2="4" y2="354" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#78EBF2" />
                            <stop offset="1" stopColor="#BA9EFC" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className={`absolute  z-[-2] duration-300 pointer-events-none transition-all ${effect ? 'left-0 top-0 opacity-0' : 'left-[30%] rotate-45 -top-[90%] opacity-100'}`}>
                <svg width="82" className={`transition-all duration-300 ${effect ? '' : 'blur-3xl'}`} height={height} viewBox="0 0 82 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_22_4)">
                        <rect x="4" y="4" width="74" height="213" rx="37" fill="url(#paint0_linear_22_4)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_22_4" x="0" y="0" width="82" height="221" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_22_4" />
                        </filter>
                        <linearGradient id="paint0_linear_22_4" x1="41" y1="4" x2="41" y2="217" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4DE2CA" />
                            <stop offset="0.86" stopColor="#86A2F7" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className={`absolute z-[-2] duration-300 pointer-events-none transition-all ${effect ? 'left-0 top-0 opacity-0' : 'left-[50%] rotate-45 top-[90%] opacity-100'}`}>
                <svg width="82" className={`transition-all duration-300 ${effect ? '' : 'blur-2xl'}`} height={height} viewBox="0 0 82 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_22_8)">
                        <rect x="4" y="4" width="74" height="213" rx="37" fill="url(#paint0_linear_22_8)" />
                    </g>
                    <defs>
                        <filter id="filter0_f_22_8" x="0" y="0" width="82" height="221" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_22_8" />
                        </filter>
                        <linearGradient id="paint0_linear_22_8" x1="41" y1="4" x2="41" y2="217" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#89F7A0" />
                            <stop offset="1" stopColor="#F0F88F" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </>
    )
}