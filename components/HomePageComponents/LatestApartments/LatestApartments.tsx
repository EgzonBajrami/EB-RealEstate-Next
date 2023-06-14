"use client"
import './LatestApartments.css'
import {useEffect, useState} from 'react';
import LatestApartmentCard from '../LatestApartmentCard/LatestApartmentCard';
export default function LatestApartments(){
    const [data, setData] = useState<String[]>();
    useEffect(()=>{
        async function getData(){
  
            const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banesa?per_page=3`,{
                method:'GET',
                mode:"cors"
            })
     
            if(result.ok){
               const finalData = await result.json();
               setData(finalData);
            }
        }
        getData();
    },[])

    return<>
    <section className="container latest-container">
        <div className="row">
            <div className="col-md-12 latest-image-container">
                <h2>Banesa</h2>

            </div>
            {data &&(
                <div className="col-md-12 latest-grid-container">
                <LatestApartmentCard data={data} />
            </div>
            )}
            
        </div>
        <div className="linear-holder">
            
        </div>
    </section>
    </>
}