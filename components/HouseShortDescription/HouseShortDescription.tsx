"use client"
import './HouseShortDescription.css'
import WoodenHouse from '../../public/images/WoodenHouse.jpg'
import secondHouse from '../../public/images/secondHouse.jpg'
import Image from 'next/image'
import {useState, MouseEvent} from 'react';
import {useInView} from 'react-intersection-observer'
interface property{
    propertyType:string
}

export default function HouseShortDescription({propertyType}:property){
    const [isOver, setIsOver] = useState<boolean>(false);
    const [secondOver, setSecondOver] = useState<boolean>(false);

    const {ref, inView} = useInView({
        rootMargin: '-50% 0% -50% 0%',
        triggerOnce:true,
        threshold:0
    })
    
    const data =[{
        id:"Shtepia",
        caption:"Krijoni kujtime të paharrueshme në shtëpitë tona të ëndrrave, ku ndjeni qetësinë dhe harmoninë e një banimi të vërtetë.",
        secondCaption:`Kthejeni ëndrrat tuaja në realitet në shtëpinë perfekte për ju dhe familjen tuaj, një hapësirë që thërret "Të lumtur në shtëpi".`,
        imageOne:WoodenHouse,
        imageTwo:secondHouse
    }]

    const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
        setIsOver(true);
      };
     const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
        setIsOver(false);
      };
      const handleSecondMouseEnter = (event: MouseEvent<HTMLDivElement>) => {

        setSecondOver(true);
      };
     const handleSecondMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
        setSecondOver(false);
      };
    return<>
    {data && data.map((elem, index)=>{
        return(<div key={index}>
            {elem.id === propertyType &&(<>
            <div className="house-images-container" ref={ref}>
                <div className="collage-image-one"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                style={{animationName:inView ? "houseOpacity":""}}>
                    <Image src={elem.imageOne.src} width={elem.imageOne.width} height={elem.imageOne.height} alt="First house" /> 
                    {isOver &&(
                    <div className="house-images-text">
                        <p>{elem.caption}</p>
                    </div>
                    )}
                </div>
                <div className="collage-image-one"
                onMouseEnter={handleSecondMouseEnter} onMouseLeave={handleSecondMouseLeave}
                style={{animationName:inView ? "houseOpacity":""}}>
                    <Image src={elem.imageTwo.src} width={elem.imageTwo.width} height={elem.imageOne.height} alt="First house" />   
                    {secondOver &&(
                    <div className="house-images-text">
                        <p>{elem.secondCaption}</p>
                    </div>
                    )}
                </div>
            </div>
            </>)}
        </div>)
    })}
    </>
}