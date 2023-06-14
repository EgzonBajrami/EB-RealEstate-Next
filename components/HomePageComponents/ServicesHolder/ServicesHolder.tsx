"use client"
import Image from "next/image"
import './ServicesHolder.css'
import ReactCardFlip from 'react-card-flip';
import {useState, MouseEvent} from 'react';
interface servicesInterface{
    image: string,
    text:string,
    title:string,
    otherImage: string
}
type MouseType = {
    onMouseOver: (event: MouseEvent<HTMLDivElement>) => void;
  };
  
export default function ServicesHolder({image, text, title, otherImage}:servicesInterface){
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
        // Update the state when mouseover event occurs
       setIsFlipped(true);
      };
     const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
        // Update the state when mouseover event occurs
       setIsFlipped(false);
      };
    return<>
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <ReactCardFlip isFlipped={isFlipped}       
        flipSpeedBackToFront={1.5}
        flipSpeedFrontToBack={1.5}
        flipDirection="horizontal">
    <div className="services-card" >
        <Image src={image} height="50" width="50" alt={title} />
        <div className="services-title">
            {title}
        </div>
        <div className="services-text">
            {text}
        </div>
    </div>
    <div className="services-card-back">
        <div className="services-card-holder" >
        <Image src={otherImage} height="275" width="275" alt={title} />
   
        </div>
    </div>
    </ReactCardFlip>
    </div>
    </>
}