"use client"
import LokaleCard from '../LokaleCard/LokaleCard';
import './AllLokale.css'
import {useState, useEffect} from 'react'
export default function AllLokale(){
    const [data, setData] = useState<String[]>();
    useEffect(()=>{
        async function getData(){
            const result = await fetch(`/api/getalllokale`,{
                method:'GET',
            })
            if(result.ok){
                const finalData = await result.json();
                setData(finalData.result);
            }
        }
        getData();
    },[])
    return<>
        <section className="container all-lokale-container">
        <div className="row">
            {data && data.map((elem:any,index)=>{
                return <div className="col-md-4" key={index}>
                        <LokaleCard data={elem} />
                    </div>
            })}
        </div>
    </section>
    </>
}