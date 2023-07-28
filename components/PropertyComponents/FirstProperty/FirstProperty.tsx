"use client"
import './FirstProperty.css'
import {useState, useEffect} from 'react';
import Image from 'next/image';
import isometricFarm from '../../../public/images/isometricFarm.webp'
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
export default function FirstProperty(){
    const [data, setData] = useState<Property[]>([]);
    useEffect(()=>{
        const getData = async()=>{
            const result = await fetch('/api/latestProperty', {
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
            <Image src={isometricFarm.src} alt="Isometric city" width={isometricFarm.width} height={isometricFarm.height} />
        </div>
        <div className="first-apartment-wrapper">
            {data &&(<AnItem data={data[0]} type="prona" />)}
        </div>
    </div>
    </>
}