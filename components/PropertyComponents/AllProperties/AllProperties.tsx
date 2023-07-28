"use client"
import './AllProperties.css'
import {useState, useEffect} from 'react';
import AllPropertiesCard from '../AllPropertiesCard/AllPropertiesCard';
export default function AllProperties(){

    const [data, setData] = useState<String[]>();

    useEffect(()=>{
        async function getData(){
            const result = await fetch(`/api/allproperties`,{
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
    <section className="container all-houses-container">
        <div className="row">
            {data && data.map((elem:any,index)=>{
                return <div className="col-md-4" key={index}>
                        <AllPropertiesCard data={elem} />
                    </div>
            })}
        </div>
    </section>
    </>
}