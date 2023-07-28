import Header from "../../../components/Header/Header"
import EbIntro from "../../../components/HomePageComponents/EbIntro/EbIntro"
import Footer from "../../../components/Footer/Footer"

import AllApartments from "../../../components/AppartmentsPageComponents/AllApartments/AllApartments"

import ShortDescription from "../../../components/ShortDescription/ShortDescription"
import FirstApartment from "../../../components/AppartmentsPageComponents/FirstApartment/FirstApartment"
export default function Banesa() {
    return <>
      <Header />
      <main >
        <FirstApartment />
      </main>
      <ShortDescription propertyType="Banesa" />
      <AllApartments />
      <Footer />
      </>
  }