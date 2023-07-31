"use client"
import './SingleLokalContainer.css'
import {usePathname, useRouter } from "next/navigation"
import { useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import CarouselItems from '../CarouselItems/CarouselItems';
import TitleContainer from '../TitleContainer/TitleContainer';
import SingleItem from '../SingleItem/SingleItem';
import SingleApartmentFrame from '../SingleApartmentFrame/SingleApartmentFrame';
export default function SingleLokalContainer(){
    const pathName = usePathname();
    const router = useRouter();
    const pathToGet = pathName.split('/')[2];

    console.log(pathToGet);
    const auth = useSelector((state:any)=>state.auth.data)
    const [data, setData] = useState<any>();
    const [carouselData, setCarouselData] = useState<string[]>();
    useEffect(()=>{
        const getData = async()=>{
            const result = await fetch(`/api/getlokale/${pathToGet}`,{
                method:'GET',
                
            })
            console.log(result);
            if(result.ok){
                const finalData = await result.json();
                console.log(finalData);
                setData(finalData.result);
                const datas = finalData.result.images;
                if(finalData.result.images){

               
                setCarouselData(datas);
            }
            }
        }   
        getData();
    },[pathToGet])
    console.log(data);

    return<>
    {data &&(
    <section className="container single-apartment-container">
        <div className="row">
            <div className="col-12 single-apartment-title">
                {data &&<TitleContainer data={data} /> }
            </div>
            {data &&(<>
            <div className="col-12 carousel-container">
                {carouselData &&(
                <CarouselItems data={carouselData} />
                )}
            </div>
            </>)}
            {data && (<div className="col-12">
                <SingleItem data={data} typeOfProperty="Lokale" />
            </div>)}

            {data &&(<SingleApartmentFrame
            latitude={data.latitude}
            longitute={data.longitute} />)}

            <div className='col-12 edit-btn-holder'>
                {auth &&(<>
                <button onClick={()=>{router.push(`/dashboard/lokale=${data.id}`)}}>Edito</button></>)}
            </div>
        </div>
    </section>
)}
    </>
}