import ServicesHolder from '../ServicesHolder/ServicesHolder'
import './WhatWeDo.css'
import building from '../../../public/images/building.png'
import houseImage from '../../../public/images/houseimage.png'
import Banesa from '../../../public/images/Banesa.jpg'
import House from '../../../public/images/house.jpg'
import Land from '../../../public/images/land.webp'
import ObjektAfarist from '../../../public/images/objektafarist.webp'
import LandIcon from '../../../public/images/LandIcon.webp'
import CustomerService from '../../../public/images/CustomerService.webp'
import PeopleBusy from '../../../public/images/peoplebusy.webp'
import LokaleIcon from '../../../public/images/LokaleIcon.webp'
export default function WhatWeDo(){
    return<>
    <section className="container whatwedo">
        <div className="row">
            <div className="col-12 short-description">
                <h2>Shërbimet tona</h2>
            </div>
            <div className="col-12  services-container">
                <div className="services-holder">
                    <div className="initial-service">
                        <ServicesHolder image={building.src} title="Banesa" text="Gjeni apartamentin ideal në Kosovë me ndihmën tonë të ekspertëve. Na kontaktoni sot dhe bashkë të gjejmë shtëpinë tuaj të re." otherImage={Banesa.src}/>
                    </div>
                    <ServicesHolder image={houseImage.src} title="Shtëpia" text="Zbuloni shtëpitë e ëndrrave në Kosovë. Bota juaj personale e qetësisë dhe harmonisë. Lidhuni me ne për më shumë informacion." otherImage={House.src}/>
                    <div className="initial-service">
                        <ServicesHolder image={LokaleIcon.src} title="Lokale" text="Zgjidh lokal tërheqës për biznesin tënd në Kosovë. Kontakto tani dhe ndihmojmë në arritjen e suksesit tënd." otherImage={ObjektAfarist.src}/>
                    </div>
                    <div className="offset-md-6">
                    <ServicesHolder image={LandIcon.src} title="Prona" text="Zgjidh pronën e ëndrrave në Kosovë. Ndihmojmë në gjetjen e pasurisë së duhur për ty. Kontakto tani për të filluar kërkimin!" otherImage={Land.src}/>
                    </div>
                    <div className="offset-md-6">
                        <ServicesHolder image={CustomerService.src} title="Mbështetje të Plotë" text="Shërbime të gjera për pronat në Kosovë. Gjithçka që ju duhet për t'u marrë me pronat. Kontaktoni tani për ndihmë dhe këshillim." otherImage={PeopleBusy.src}/>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>
}