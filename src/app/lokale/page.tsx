import BanesaHeading from "../../../components/AppartmentsPageComponents/BanesaHeading/BanesaHeading";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";

import AllLokale from "../../../components/LokaleComponents/AllLokale/AllLokale";
import FirstLokal from "../../../components/LokaleComponents/FirstLokal/FirstLokal";
import LokaleImage from '../../../public/images/lokale.jpg'
export default function Lokale(){
    return<>
    <Header />
    <FirstLokal />
    <main>
    <BanesaHeading title="Kërkoni objekte biznesi në Kosovë me ndihmën e E.B Real Estate. Ofrojmë një gamë të gjerë të pronave komerciale për të arritur ëndrrat tuaja." 
    firstText="Futeni në një tur virtual ose bëni një vizitë personale për të shfletuar objektet më të mira biznesi në Kosovë, të shoqëruar nga agjentët tanë të përvojshëm të pronave. Jemi të përkushtuar për të siguruar që të zbuloni pronën ideale të përshtatshme për nevojat dhe synimet tuaja të investimit.
    Nga zyrat moderne në qytet deri te parcelat e atraktive për zhvillime të ardhshme, portofoli ynë ka një shumëllojshmëri pronash biznesi në Kosovë. Çdo pronë ka karakteristikat e saj unike dhe është kujdesur me kujdes për të plotësuar standardet më të larta të cilësisë dhe potencialet e zhvillimit." 
    secondText="Me ekspertizën tonë të thellë në tregun e pasurive të Kosovës, ju ofrojmë informacionin dhe këshillën e nevojshme për çdo pronë që ju intereson. Ne kemi njohuritë dhe lidhjet e duhura për të siguruar që të merrni ofertat më të mira dhe për të bërë blerjen tuaj të parë një eksperiencë të suksesshme.

    Përveç kësaj, ju ofrojmë ndihmën tonë për të bërë procesin e blerjes sa më të lehtë dhe të shpejtë. Ne do t'ju ndihmojmë në negociatat e çmimeve, në përgatitjen e dokumentacionit të nevojshëm dhe në çdo hap tjetër të procesit të blerjes.
    
    E.B Real Estate është këtu për t'ju udhëzuar në kërkimin dhe blerjen e objekteve biznesi në Kosovë. Bashkërisht, do të gjejmë atë pronë të veçantë që ju e keni ëndërruar për të arritur qëllimet tuaja dhe për të krijuar mundësi të reja për rritje dhe investime."
     thumbnail={LokaleImage} />
        <AllLokale />
    </main>
    <Footer />
    </>
}