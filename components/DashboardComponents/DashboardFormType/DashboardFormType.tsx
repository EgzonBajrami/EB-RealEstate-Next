"use client"
import BanesaForm from '../../Forms/BanesaForm/BanesaForm';
import HouseForm from '../../Forms/HouseForm/HouseForm'
import LokaleForm from '../../Forms/LokaleForm/LokaleForm';
import PronaForm from '../../Forms/PronaForm/PronaForm';
import './DashboardFormType.css';
interface DataToCall{
    dataToCall:string
}
export default function DashboardFormType({dataToCall}:DataToCall){
    console.log(dataToCall)
    return<>
    {dataToCall==="Banesa" &&(<>
    <div className="move-form"> 
        <BanesaForm />
    </div></>)}
    {dataToCall==="Shtepia" &&(<>
    <div className="move-form">
        <HouseForm />
    </div>
    </>)}
    {dataToCall==="Prona" &&(<>
    <div className="move-form">
        <PronaForm /></div></>)}
    {dataToCall==="Lokale" &&(<>
    <div className="move-form">
        <LokaleForm />
        </div></>)}
    </>
}