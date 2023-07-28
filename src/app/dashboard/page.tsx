"use client"
import {useSelector} from 'react-redux';
import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react';
import './page.css'
import DashboardSidebar from '../../../components/DashboardComponents/DashboardSidebar/DashboardSidebar';
import DashboardFormType from '../../../components/DashboardComponents/DashboardFormType/DashboardFormType';
export default function Dashboard(){
    const router = useRouter();
    const [dataToCall, setDataToCall] = useState<string>("Banesa");
    const auth = useSelector((state:any) => state.auth.data)

    useEffect(() => {
        if (!auth) {
          router.push('/');
        }
      }, [auth, router]);
    return<>
    {auth &&(<>
        <div className="container-fluid px-0 dashboard-wrapper d-flex">

            <section className="sidebar">
                <DashboardSidebar dataToCall={dataToCall} setDataToCall={setDataToCall} />
            </section>
            
            <section className="addition-forms">
                <DashboardFormType dataToCall={dataToCall} />
            </section>

        </div>
    </>)}
    </>
}