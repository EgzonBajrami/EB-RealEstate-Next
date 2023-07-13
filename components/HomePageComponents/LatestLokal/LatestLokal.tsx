'use client'
import {useEffect, useState} from 'react';
import './LatestLokal.css'

import LatestLokalCard from '../LatestLokalCard/LatestLokalCard';
export default function LatestHouse(){
    const [data, setData] = useState<String[]>();
    useEffect(()=>{
        async function getData(){
            const result = await fetch(`/api/getlokale`,{
                method:'GET',
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
    <div className="container lokal-heading">
        <h3>
Zhvendosni biznesin tuaj në hapësirën e ëndrrave me E.B Real Estate - partneri juaj i besuar për lokale të cilësisë së lartë. Zgjidhni ndër gamën tonë të gjerë të lokaleve për të gjetur atë që përshtatet më së miri me vizionin dhe nevojat e biznesit tuaj.</h3>
<h3> Jemi këtu për të bërë suksesin tuaj të jetë realitet në një ambient të përshtatshëm dhe tërheqës.</h3>
    </div>
    <section className="container latest-container">
        <div className="row">
            <div className="col-md-12 latest-image-container">
                <h2>Lokale</h2>

            </div>
            {data &&(
                <div className="col-md-12 latest-grid-container">
                    <LatestLokalCard data={data} />
            </div>
            )}
            
        </div>
    </section>
    </>
}