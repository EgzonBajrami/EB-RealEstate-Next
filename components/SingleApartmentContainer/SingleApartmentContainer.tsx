"use client"
import './SingleApartmentContainer.css'
import {usePathname, useRouter} from "next/navigation"
import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import CarouselItems from '../CarouselItems/CarouselItems';
import TitleContainer from '../TitleContainer/TitleContainer';
import SingleApartmentItems from '../SingleApartmentItems/SingleApartmentItems';
import SingleApartmentFrame from '../SingleApartmentFrame/SingleApartmentFrame';
export default function SingleApartmentContainer(){
    const pathName = usePathname();
    const router = useRouter();
    const pathToGet = pathName.split('/')[2];
    const auth = useSelector((state:any)=>state.auth.data);
    console.log(auth);

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
    {data && (
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

            <div className='col-12 edit-btn-holder'>
                {auth &&(<>
                <button onClick={()=>{router.push(`/dashboard/banesa=${data.id}`)}}>Edito</button></>)}
            </div>
        </div>
    </section>
    )}
    </>
}