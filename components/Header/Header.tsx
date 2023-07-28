"use client"
import Image from 'next/image'
import './Header.css'
import logoEb from '../../public/images/logoEb.webp' 
import Link from 'next/link'
import {useState, useEffect} from 'react';
export default function Header(){
    const [hamburger, setHamburger] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, [scrollPosition]);
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };
      
    return<>
    <header>
    <div className={hamburger ?("hamburger hamburger-opened"):("hamburger")} id="hamb"
           
           onClick={()=>setHamburger(!hamburger)}>
               {hamburger ? (<>

               <span></span>
               <span></span>
               <span></span></>
               ):(<>
              
           <span ></span>
           <span></span>
           <span ></span>
           </>)}
       </div>
    
     <div className="menus-container" style={{display:hamburger ? ("block"):("none")}}>
                
   
     <div className="menu-overlay" style={{ opacity:hamburger ? (1):(0)
   ,zIndex: hamburger ? 2 : 1}}>
       <div className="menu-content">
           <ul>
           <li><Link href="/banesa">Banesa</Link></li>
                        <li><Link href="/shtepia">Shtëpia</Link></li>
                        <li><Link href="/lokale">Lokale</Link></li>
                        <li><Link href="/prona">Prona</Link></li>
           </ul>
       </div>
     </div>
     </div>
        <div className="container">
            <div className="row">
    
                <div className="col-3 logo-container">
                    <Link href="/">
                        <Image src={logoEb.src} height={logoEb.height} width={logoEb.width} alt="logo eb"/>
                    </Link>
                </div>
                <div className="col-5 offset-4 items-container">
                    <ul>
                        <li><Link href="/banesa">Banesa</Link></li>
                        <li><Link href="/shtepia">Shtëpia</Link></li>
                        <li><Link href="/lokale">Lokale</Link></li>
                        <li><Link href="/prona">Prona</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    </header>
    </>
}