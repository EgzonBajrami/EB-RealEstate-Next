import Header from "../../../components/Header/Header"
import EbIntro from "../../../components/HomePageComponents/EbIntro/EbIntro"
import Footer from "../../../components/Footer/Footer"
import BanesaHeading from "../../../components/AppartmentsPageComponents/BanesaHeading/BanesaHeading"
import AllApartments from "../../../components/AppartmentsPageComponents/AllApartments/AllApartments"
import BanesaImage from '../../../public/images/BanesaImage.jpg'
export default function Banesa() {
    return <>
      <Header />
      <main >
        <EbIntro />
      </main>
      <BanesaHeading title="E.B Real Estate ju ofronë" firstText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ligula mi, mollis eu ornare ac, venenatis a diam. Fusce id lectus laoreet, auctor mi ut, mattis enim. Vestibulum efficitur malesuada tempor. Quisque molestie eros ut ligula mattis, sit amet vulputate ligula euismod. Nunc felis est, accumsan eu tempus id, molestie id magna. Suspendisse imperdiet auctor rutrum. Quisque sed dapibus nisi." secondText="Nullam cursus vulputate nibh eget pretium. Suspendisse sit amet aliquam purus. Cras lacus purus, laoreet scelerisque felis eu, faucibus eleifend tellus. Duis in massa ex. Nullam dolor erat, tristique vitae lorem eu, condimentum commodo nisl. Donec venenatis, arcu a dapibus vulputate, nunc diam bibendum dolor, id viverra lorem dui nec dolor. Nam et leo ex. Quisque sed suscipit purus. Duis commodo lorem commodo nibh imperdiet pretium. Ut semper iaculis est, sed laoreet tortor fermentum ac. Integer in massa orci. Cras ac aliquam tellus, nec gravida nunc. Donec neque arcu, sodales eu ultricies vel, maximus vitae turpis. Maecenas sit amet tortor et massa elementum tristique posuere et risus." thumbnail={BanesaImage} />
      <AllApartments />
      <Footer />
      </>
  }