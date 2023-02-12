import { before } from 'node:test'
import React from 'react'

const Footer = () => {
  return (
    <footer 
      className='
        relative 
        flex 
        w-full
        h-[100px]
        justify-center 
        text-white 
        py-16 
        bg-[#111111]
        before:w-[120vw]
        before:h-[200px]
        before:absolute
        before:top-0 
        before:left-1/2 
        before:bg-[#111111]
        before:translate-x-[-50%]
        before:translate-y-[-60%]
        before:skew-x-[0deg]
        before:skew-y-[-2deg]
        before:z-0
        before:appearance-none
      '>
      <small className='relative z-1 font-copy'>&copy; { new Date().getFullYear() } Richard E. Gil</small>
    </footer>
  )
}

export default Footer


// &::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 50%;
//   transform: translateX(-50%) translateY(-60%) skewX(0deg) skewY(-2deg);
//   width: 120vw;
//   height: 200px;
//   background-color: #111;
//   appearance: none;
//   // mix-blend-mode: difference;
// }