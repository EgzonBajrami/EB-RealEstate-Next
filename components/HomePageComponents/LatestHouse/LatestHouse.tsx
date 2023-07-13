'use client'
import {useEffect, useState} from 'react';
import './LatestHouse.css'
import LatestHouseCard from '../LatestHouseCard/LatestHouseCard';
export default function LatestHouse(){
    const [data, setData] = useState<String[]>();
    useEffect(()=>{
        async function getData(){
            const result = await fetch(`/api/gethouses`,{
                method:'GET',
                mode:'cors'
            })
            if(result.ok){
                const finalData = await result.json();
                setData(finalData.result);
            }
        }
        getData();
    },[])
    console.log(data);
    return<>
    <section className="container latest-container">
        <div className="row">
            <div className="col-md-12 latest-image-container">
                <h2>Shtëpia</h2>

            </div>
            {data &&(
                <div className="col-md-12 latest-grid-container">
                    <LatestHouseCard data={data} />
            </div>
            )}
            
        </div>
        <div className="house-linear">
            
        </div>
    </section>
    </>
}