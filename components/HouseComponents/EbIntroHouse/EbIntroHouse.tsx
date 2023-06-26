import './EbIntroHouse.css'
import EbIntroImg from '../../../public/images/houseNight.jpg'
export default function EbIntroHouse(){
    return<>
    <section className="container-fluid ps-0 eb-intro-house"
    style={{backgroundImage:`url(${EbIntroImg.src})`}}>
        <div className="row">
     
            <div className="col-md-6 offset-md-3 city-text-holder">
                <h1>EB Patundshmëri</h1>
                <p>EB Real Estate është themeluar në vitin 2018. Qëllimi jonë është të sigurojmë nivelin më të lartë profesional të shërbimeve tona për shitësit dhe blerësit njësoj. Të fokusuar në tregun e Prishtinës me rrethinë, ne ofrojmë mbulim të plotë të të gjitha pronave në faqet e internetit që kryesojnë tek ne, gjithashtu në faqen tone personale të internetit.</p>
            </div>
        
        </div>
    </section>
    </>
}