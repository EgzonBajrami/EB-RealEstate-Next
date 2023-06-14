import './page.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import EbIntro from '../../components/HomePageComponents/EbIntro/EbIntro'
import LatestApartments from '../../components/HomePageComponents/LatestApartments/LatestApartments'
import LatestHouse from '../../components/HomePageComponents/LatestHouse/LatestHouse'
import LatestLokal from '../../components/HomePageComponents/LatestLokal/LatestLokal'
import LatestProna from '../../components/HomePageComponents/LatestProna/LatestProna'
import WhatWeDo from '../../components/HomePageComponents/WhatWeDo/WhatWeDo'
import ShortDescription from '../../components/ShortDescription/ShortDescription'
import HouseShortDescription from '../../components/HouseShortDescription/HouseShortDescription'


export default function Home() {
  return <>
    <Header />
    <main >
      <EbIntro />
    </main>
    <div className="hide-overflow-here">
    <WhatWeDo />
    <ShortDescription propertyType="Banesa"/>
    <LatestApartments />
    <HouseShortDescription propertyType="Shtepia" />
    <LatestHouse />
    <LatestLokal />
    <LatestProna />
    </div>
    <Footer />
    </>
}
