"use client"
import './FirstHouse.css'
import {useState, useEffect} from 'react';
import Image from 'next/image';
import isometricHouse from '../../../public/images/isometricHouse.webp'
import AnItem from '../../AnItem/AnItem';

interface Property {
    id: number;
    title: string;
    type: string;
    text: string;
    city: string;
    price: string;
    rooms: string;
    bathroom: string;
    floors:string;
    space: string;
    latitude: string;
    longitude: string;
    createdAt: string;
    images: string[];
  }
export default function FirstHouse(){
    const [data, setData] = useState<Property[]>([]);
    useEffect(()=>{
        const getData = async()=>{
            const result = await fetch('/api/latestHouse', {
                method:"GET"
            })
            if(result.ok){
                const finalData = await result.json();
                console.log(finalData);
                setData(finalData.result);
            }
        }
        getData();
    },[])
    return<>
    <div className="first-apartment-container">
        <div className="first-apartment-image-holder">
            <Image src={isometricHouse.src} alt="Isometric city" width={isometricHouse.width} height={isometricHouse.height} />
        </div>
        <div className="first-apartment-wrapper">
           {data && (<AnItem data={data[0]} type="shtepia" />)}
        </div>
    </div>
    </>
}