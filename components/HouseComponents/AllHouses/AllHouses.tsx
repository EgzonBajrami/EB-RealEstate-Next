"use client"
import './AllHouses.css'
import {useState, useEffect} from 'react';
import AllHousesCard from '../AllHousesCard/AllHousesCard';
export default function AllHouses(){

    const [data, setData] = useState<String[]>();

    useEffect(()=>{
        async function getData(){
            const result = await fetch(`/api/getallhouses`,{
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
                        <AllHousesCard data={elem} />
                    </div>
            })}
        </div>
    </section>
    </>
}