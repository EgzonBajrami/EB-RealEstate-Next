"use client"
import './FirstApartment.css'
import {useState, useEffect} from 'react';
import Image from 'next/image';
import isometricCity from '../../../public/images/isometricCity.webp'
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
    space: string;
    floors:string;
    latitude: string;
    longitude: string;
    createdAt: string;
    images: string[];
  }
export default function FirstApartment(){
    const [data, setData] = useState<Property[]>([]);
    useEffect(()=>{
        const getData = async()=>{
            const result = await fetch('/api/latestApartment', {
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
            <Image src={isometricCity.src} alt="Isometric city" width={isometricCity.width} height={isometricCity.height} />
        </div>
        <div className="first-apartment-wrapper">
            {data &&(<AnItem data={data[0]} type="banesa" />)}
        </div>
    </div>
    </>
}