'use client'

import Link from "next/link"
import { Menu } from "react-feather"
import { useState } from "react"
import ScrollProgress from "../ScrollProgress"

const translateShow = '-translate-y-0'
const translateHide = '-translate-y-[120vh]'

const Navbar = ({title}) => {

    const [translate, setTranslate] = useState(translateHide)

    const handleNavToggle = () => {
        if (translate === translateHide) {
        setTranslate(translateShow)
        }

        if (translate === translateShow) {
        setTranslate(translateHide)
        }
    }

    const transitionToPage = function(href) {
        document.querySelector('body').style.opacity = 0.1
        setTimeout(function() { 
            window.location.href = href
        }, 500)
    }
    
    

    return (<>
        <div className=" w-full shadow pointer-events-none fixed top-0 z-50">
            <div className="hidden md:flex justify-between items-center p-5 bg-base-100">
                <div className="hidden md:flex md:flex-1">
                    {/* <Link href='/' className="btn btn-ghost text-xl pointer-events-auto"></Link> */}
                    <span onClick={()=>{transitionToPage('/')}} className="btn btn-ghost text-xl pointer-events-auto">{title}</span>
                </div>
                <div className="hidden md:flex mdflex-none pointer-events-auto">
                    <ul className="menu menu-horizontal px-1">
                    <li><span onClick={()=>{transitionToPage('/')}}>Home</span></li>
                    <li><span onClick={()=>{transitionToPage('/about')}}>About</span></li>
                    <li><span onClick={()=>{transitionToPage('/blog')}}>Blog</span></li>
                    </ul>
                </div>
                
            </div>
            

            <div className=" md:hidden w-full h-full overflow-hidden flex-col top-5 shadow-xl pointer-events-auto h-20">
                <div className="w-full p-5 text-base-content flex justify-between items-center bg-base-100">
                    <div>
                        <Link href='/' onClick={()=>{setTranslate(translateHide)}} className="btn btn-ghost text-xl">{title}</Link>
                    </div>
                    <div>
                        <div onClick={()=>{handleNavToggle()}}><Menu className='bg-current w-12 h-12 p-2 rounded-full stroke-base-200 cursor-pointer'/></div>
                    </div>
                
                </div>
                
                
            </div>
            <ScrollProgress />
            <div className={`transition-all duration-700 ease-in-out flex flex-col h-screen bg-neutral bg-opacity-80 text-neutral-content text-center gap-5 p-10 sticky top-0 w-full font-bold !z-[999] ${translate} pointer-events-auto overflow-y-scroll`}>
                <Link className="pointer-events-auto text-3xl" href='/' onClick={()=>{setTranslate(translateHide)}}>Home</Link>
                <Link className="pointer-events-auto text-3xl" href='/about' onClick={()=>{setTranslate(translateHide)}}>About</Link>
                <Link className="pointer-events-auto text-3xl" href='/blog' onClick={()=>{setTranslate(translateHide)}}>Blog</Link>
            </div>
            
        </div>
        
    </>)
}

export default Navbar