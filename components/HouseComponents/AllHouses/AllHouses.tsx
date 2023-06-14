"use client"
import './AllHouses.css'
import {useState, useEffect} from 'react';
import AllHousesCard from '../AllHousesCard/AllHousesCard';
export default function AllHouses(){

    const [data, setData] = useState<String[]>();

    useEffect(()=>{
        async function getData(){
            const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shtepia`,{
                method:'GET',
                mode:'cors'
            })
            if(result.ok){
                setData(await result.json());
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