'use client'
import {useEffect, useState} from 'react';
import './LatestProna.css'

import LatestPronaCard from '../LatestPronaCard/LatestPronaCard';
export default function LatestProna(){
    const [data, setData] = useState<String[]>();
    useEffect(()=>{
        async function getData(){
            const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/prona?per_page=3`,{
                method:'GET',
                mode:'cors'
            })
            if(result.ok){
                setData(await result.json());
            }
        }
        getData();
    },[])
    console.log(data);
    return<>
    <section className="container latest-container">
        <div className="row">
            <div className="col-md-12 latest-image-container">
                <h2>Prona</h2>

            </div>
            {data &&(
                <div className="col-md-12 latest-grid-container">
                    <LatestPronaCard data={data} />
            </div>
            )}
            
        </div>
    </section>
    </>
}