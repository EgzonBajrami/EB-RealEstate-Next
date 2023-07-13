"use client"
import './DashboardSidebar.css'
import Image from 'next/image'
import logoEb from '../../../public/images/logoEb.webp'

interface DashboardSidebar{
    dataToCall:string,
    setDataToCall:React.Dispatch<React.SetStateAction<string>>
}

export default function DashboardSidebar({dataToCall, setDataToCall}:DashboardSidebar){
    return<>
    <div className="dashboard-sidebar">

        <div className="dashboard-logo">
            <Image src={logoEb.src} alt="logo eb" width={logoEb.width} height={logoEb.height} />
        </div>

        <div className="menu-holder">
            <h3>Shto</h3>
            <ul className="menu-links-holder">
              <li className={dataToCall==="Banesa" ? ("actice-link"):("")}
              onClick={()=>setDataToCall("Banesa")}>Banesa</li> 

              <li className={dataToCall==="Shtepia" ? ("actice-link"):("")}
              onClick={()=>setDataToCall("Shtepia")}>Shtepia</li>

              <li className={dataToCall==="Prona" ? ("actice-link"):("")}
              onClick={()=>setDataToCall("Prona")}>Prona</li> 

              <li className={dataToCall==="Lokale" ? ("actice-link"):("")}
              onClick={()=>setDataToCall("Lokale")}>Lokale</li>
            </ul>
        </div>

    </div>
    </>
}