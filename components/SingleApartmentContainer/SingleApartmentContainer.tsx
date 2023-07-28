"use client"
import './SingleApartmentContainer.css'
import {usePathname } from "next/navigation"
import {useEffect, useState} from 'react';
import CarouselItems from '../CarouselItems/CarouselItems';
import TitleContainer from '../TitleContainer/TitleContainer';
import SingleApartmentItems from '../SingleApartmentItems/SingleApartmentItems';
import SingleApartmentFrame from '../SingleApartmentFrame/SingleApartmentFrame';
export default function SingleApartmentContainer(){
    const pathName = usePathname();
    const pathToGet = pathName.split('/')[2];

    const [data, setData] = useState<any>();
    const [carouselData, setCarouselData] = useState<string[]>();
    useEffect(()=>{
        const getData = async()=>{
            const result = await fetch(`/api/getapartments/${pathToGet}`,{
                method:'GET',
                
            })
            console.log(result);
            if(result.ok){
                const finalData = await result.json();
                setData(finalData.result);
                const datas = finalData.result.images;
      
                setCarouselData(datas);
            }
        }   
        getData();
    },[pathToGet])
    console.log(data);

    return<>
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
                <SingleApartmentItems data={data}/>
            </div>)}
            {data &&(<SingleApartmentFrame
            latitude={data.latitude}
            longitute={data.longitute} />)}
        </div>
    </section>

    </>
}