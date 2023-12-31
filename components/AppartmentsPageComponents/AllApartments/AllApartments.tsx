"use client"
import LatestApartmentCard from '../../HomePageComponents/LatestApartmentCard/LatestApartmentCard';
import ApartmentCard from '../ApartmentCard/ApartmentCard';
import './AllApartments.css'
import {useState, useEffect} from 'react';
export default function AllApartments(){
    const [data, setData] = useState<string[]>();

    useEffect(()=>{
        async function getData(){
  
            const result = await fetch(`/api/allapartments`,{
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
    <section className="container all-apartments">
        <div className="row">
            {data && data.map((elem:any, index)=>{
                return<>
                <div className="col-md-4" key={index}>
                    <ApartmentCard data={elem} />
                </div>
         
                </>
            })}
        </div>
    </section>
    </>
}