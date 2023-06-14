import ServicesHolder from '../ServicesHolder/ServicesHolder'
import './WhatWeDo.css'
import building from '../../../public/images/building.png'
import houseImage from '../../../public/images/houseimage.png'
import Banesa from '../../../public/images/Banesa.jpg'
import House from '../../../public/images/house.jpg'
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
                        <ServicesHolder image={building.src} title="Banesa" text="Ne ju sigurojmë në cilësinë e banesave tona, si dhe ju ofrojmë shërbimet më të mira" otherImage={Banesa.src}/>
                    </div>
                    <ServicesHolder image={houseImage.src} title="Shtëpia" text="Ne ju sigurojmë në cilësinë e shtëpive tona, si dhe ju ofrojmë shërbimet më të mira" otherImage={House.src}/>
                    <div className="initial-service">
                        <ServicesHolder image={building.src} title="Lokale" text="Ne ju sigurojmë në cilësinë e banesave tona, si dhe ju ofrojmë shërbimet më të mira" otherImage={Banesa.src}/>
                    </div>
                    <ServicesHolder image={houseImage.src} title="Shtëpia" text="Ne ju sigurojmë në cilësinë e shtëpive tona, si dhe ju ofrojmë shërbimet më të mira" otherImage={House.src}/>
                    <div className="initial-service">
                        <ServicesHolder image={building.src} title="Banesa" text="Ne ju sigurojmë në cilësinë e banesave tona, si dhe ju ofrojmë shërbimet më të mira" otherImage={Banesa.src}/>
                    </div>
                    <ServicesHolder image={houseImage.src} title="Shtëpia" text="Ne ju sigurojmë në cilësinë e shtëpive tona, si dhe ju ofrojmë shërbimet më të mira" otherImage={House.src}/>
                </div>
            </div>
        </div>
    </section>
    </>
}