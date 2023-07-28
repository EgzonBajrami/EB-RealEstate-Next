import Header from "../../../components/Header/Header";
import BanesaHeading from "../../../components/AppartmentsPageComponents/BanesaHeading/BanesaHeading";
import farmImage from '../../../public/images/farm.webp'
import Footer from "../../../components/Footer/Footer";
import AllProperties from "../../../components/PropertyComponents/AllProperties/AllProperties";
import FirstProperty from "../../../components/PropertyComponents/FirstProperty/FirstProperty";
export default function Prona(){
    return<>
    <Header />
    <main>
       <FirstProperty />
    </main>
    <BanesaHeading 
    title="Profesionalizmi ynë në shitjen e pronave të ndihmon të realizoni ëndrrat tuaja. Përvoja dhe angazhimi i E.B Real Estate janë udhërrëfyesi juaj drejt suksesit!" 
    firstText="Kompania jonë, E.B Real Estate, është këtu për t'ju ndihmuar në procesin e shitjes së pronës suaj. Ne kuptojmë se shitja e një prone mund të jetë një sfidë e madhe, por jemi këtu për të ju ndihmuar në çdo hap të rrugës. Ekipi ynë i përvojshëm dhe i angazhuar i agjentëve të pronave do t'ju ofrojë ndihmën dhe këshillën e duhur për të bërë procesin e shitjes sa më efikas dhe të suksesshëm. Ne ofrojmë një gamë të gjerë shërbimesh që i përshtaten nevojave tuaja individuale." 
    secondText="Me ekspertizën tonë të thellë në tregun e pasurive në Kosovë, ne ju ofrojmë informacionin dhe këshillën e nevojshme për çdo pronë që ju intereson. Ne kemi njohuritë dhe lidhjet e duhura për të siguruar që ju të merrni ofertat më të mira dhe të bëni blerjen tuaj të parë një eksperiencë të suksesshme.

    Përveç kësaj, ne ju ofrojmë ndihmën tonë për të bërë procesin e blerjes sa më i lehtë dhe i shpejtë. Ne do t'ju ndihmojmë në negociatat e çmimeve, në përgatitjen e dokumentacionit të nevojshëm dhe në çdo hap tjetër të procesit të blerjes.
    
    E.B Real Estate është këtu për t'ju udhëzuar në kërkimin dhe blerjen e pronave në Kosovë. Bashkërisht, ne do të gjejmë atë pronë të veçantë që ju keni ëndërruar për të arritur objektivat tuaja dhe për të krijuar mundësi të reja të zhvillimit dhe investimit."
     thumbnail={farmImage} />
     <AllProperties />
     <Footer />
    </>
}