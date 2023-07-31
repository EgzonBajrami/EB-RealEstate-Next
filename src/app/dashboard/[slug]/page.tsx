"use client"
import Header from "../../../../components/Header/Header";
import { usePathname } from "next/navigation";
import {useEffect, useState} from 'react';
import EditItemForm from "../../../../components/Forms/EditItemForm/EditItemForm";
export default function ChangeData(){
    const path = usePathname();
    const pathToGet = path.split('/')[2].split('=')[0];
  
    const pathToSend = path.split('=')[1];

    const [data, setData] = useState<any>();
    const [currentItem, setCurrentItem] = useState<string>();
   
    useEffect(()=>{
        const getData = async() =>{
            if(pathToGet==='banesa'){
                const result = await fetch(`/api/getapartments/${pathToSend}`)
                if(result.ok){
                    const finalResult = await result.json();
                    setData(finalResult.result);

                    setCurrentItem('banesa');
                }
            }

            if(pathToGet==='shtepia'){
                const result = await fetch(`/api/gethouses/${pathToSend}`)
                if(result.ok){
                    const finalResult = await result.json();
                    setData(finalResult.result);
                    setCurrentItem('shtepia');
                }
            }

            if(pathToGet==='lokale'){
                const result = await fetch(`/api/getlokale/${pathToSend}`)
                if(result.ok){
                    const finalResult = await result.json();
                    setData(finalResult.result);
                    setCurrentItem('lokale')
                }
            }

            if(pathToGet==='prona'){
                const result = await fetch(`/api/allproperties/${pathToSend}`)
                if(result.ok){
                    const finalResult = await result.json();
                    setData(finalResult.result);
                    setCurrentItem('prona');
                }
            }
        }
        
        getData();

    },[pathToGet, pathToSend])

    console.log(data);
    console.log(currentItem);

    return<>
    <Header />
    {data &&(<section className="container">
        <div className="row">
            <EditItemForm data={data} type={currentItem}/>
        </div>
    </section>)}
    </>
}