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
        bg-[#1b1b1b]
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