"use client"
import './SinglePropertyContainer.css'
import {usePathname, useRouter } from "next/navigation"
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import CarouselItems from '../CarouselItems/CarouselItems';
import TitleContainer from '../TitleContainer/TitleContainer';
import SingleItem from '../SingleItem/SingleItem';
import SingleApartmentFrame from '../SingleApartmentFrame/SingleApartmentFrame';
export default function SinglePropertyContainer(){
    const pathName = usePathname();
    const router = useRouter();
    const pathToGet = pathName.split('/')[2];
    const auth = useSelector((state:any)=>state.auth.data)
    const [data, setData] = useState<any>();
    const [carouselData, setCarouselData] = useState<string[]>();
    useEffect(()=>{
        const getData = async()=>{
            const result = await fetch(`/api/allproperties/${pathToGet}`,{
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
                <SingleItem data={data} typeOfProperty="Prona" />
            </div>)}

            {data &&(<SingleApartmentFrame
            latitude={data.latitude}
            longitute={data.longitute} />)}
         
        </div>
        
        <div className='col-12 edit-btn-holder'>
                {auth &&(<>
                <button onClick={()=>{router.push(`/dashboard/prona=${data.id}`)}}>Edito</button></>)}
            </div>
    </section>
    )}

    </>
}