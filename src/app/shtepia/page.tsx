import BanesaHeading from "../../../components/AppartmentsPageComponents/BanesaHeading/BanesaHeading";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import EbIntro from "../../../components/HomePageComponents/EbIntro/EbIntro";
import AllHouses from "../../../components/HouseComponents/AllHouses/AllHouses";
import EbIntroHouse from "../../../components/HouseComponents/EbIntroHouse/EbIntroHouse";
import HouseImage from '../../../public/images/houseHere.jpg'
export default function Shtepia(){
    return<>
    <Header />
    <main>
        <EbIntroHouse />
    </main>
    <BanesaHeading 
    title="Zbuloni mrekullitë e shtëpisë së ëndrrave tuaja. E.B Real Estate - partneri juaj në gjetjen dhe blerjen e shtëpisë së përshtatshme për ju dhe familjen tuaj." 
    firstText="
    Le të filloni një kërkim të mahnitshëm për shtëpinë e ëndrrave tuaja me ndihmën e E.B Real Estate. Ne ofrojmë një gamë të gjerë shtëpish të cilat do t'ju bëjnë të ndjeheni si në parajsë.
    Kryeni një udhëtim virtual ose një vizitë personale në shtëpi me një ekip të përvojshëm të agjentëve tanë të pronave. Ne jemi të angazhuar në të siguruar që ju të gjeni shtëpinë e përshtatshme për stilin tuaj të jetesës, preferencat tuaja dhe nevojat tuaja të individëve.  
    Nga shtëpitë luksoze në qytet deri te kopshtet me pamje panoramike të mrekullueshme, ne ofrojmë një portofol të pasur të pronave. Cdo shtëpi ka unikalitetin e vet dhe është kujdesur me kujdes për të përmbushur standardet më të larta të cilësisë dhe komoditetit." 
    secondText="Me ekspertizën tonë të thellë në tregun e pasurive të paluajtshme, ne ju ofrojmë informacionin e duhur dhe këshillën e nevojshme për çdo shtëpi që ju intereson. Ne kemi njohuritë dhe lidhjet e duhura për të siguruar që ju të merrni ofertat më të mira dhe që të bëni blerjen tuaj të parë një eksperiencë të suksesshme. Përveç kësaj, ne ju ofrojmë ndihmën tonë për të bërë procesin e blerjes sa më i lehtë dhe i shpejtë. Ne do t'ju ndihmojmë në negociatat e çmimeve, në përgatitjen e dokumentacionit të nevojshëm dhe në çdo hap tjetër të procesit të blerjes.
    E.B Real Estate është këtu për t'ju udhëzuar në kërkimin dhe blerjen e shtëpisë së ëndrrave tuaja. Bashkërisht, ne do të gjejmë atë shtëpi të veçantë që ju keni ëndërruar për të krijuar kujtimet më të bukura dhe për të filluar një kapitull të ri emocionues në jetën tuaj."
     thumbnail={HouseImage} />
    <AllHouses />
    <Footer />
    </>
}