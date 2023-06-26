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
            const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banesa/${pathToGet}`,{
                method:'GET',
                mode:'cors'
            })
            console.log(result);
            if(result.ok){
                const finalData = await result.json();
                setData(finalData);
                const datas = [];
                if(finalData.acf.first_image){
                    datas.push(finalData.acf.first_image)
                }
                if(finalData.acf.second_image){
                    datas.push(finalData.acf.second_image)
                }
                if(finalData.acf.third_image){
                    datas.push(finalData.acf.third_image)
                }
                if(finalData.acf.fourth_image){
                    datas.push(finalData.acf.fourth_image)
                }
                if(finalData.acf.fifth_image){
                    datas.push(finalData.acf.fifth_image)
                }
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
            latitude={data.acf.latituda}
            longitute={data.acf.longituda} />)}
        </div>
    </section>

    </>
}