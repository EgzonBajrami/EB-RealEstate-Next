"use client"
import {useSelector} from 'react-redux';
import { useRouter } from 'next/navigation';
import {useState} from 'react';
import './page.css'
import DashboardSidebar from '../../../components/DashboardComponents/DashboardSidebar/DashboardSidebar';
import DashboardFormType from '../../../components/DashboardComponents/DashboardFormType/DashboardFormType';
export default function Dashboard(){
    const router = useRouter();
    const [dataToCall, setDataToCall] = useState<string>("Banesa");
    const auth = useSelector((state:any) => state.auth.data)

    if(!auth){
        router.push('/')
    }
    return<>
    {auth &&(<>
        <div className="container-fluid px-0 dashboard-wrapper d-flex">

            <div className="sidebar">
                <DashboardSidebar dataToCall={dataToCall} setDataToCall={setDataToCall} />
            </div>
            
            <div className="addition-forms">
                <DashboardFormType dataToCall={dataToCall} />
            </div>

        </div>
    </>)}
    </>
}