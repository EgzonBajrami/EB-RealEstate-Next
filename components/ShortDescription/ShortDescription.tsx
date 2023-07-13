"use client";
import './ShortDescription.css'
import ApartmentComplex from '../../public/images/ApartmentComplex.webp'
import propertyCool from '../../public/images/propertyCool.jpg'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
interface ShortDescription{
    propertyType:string
}
export default function ShortDescription({propertyType}:ShortDescription){

    const {ref, inView} = useInView({
        rootMargin: '-50% 0% -50% 0%',
        triggerOnce:true,
        threshold:0
    })
    const data =[{
        id:"Banesa",
        caption:"Zgjidhni elegancën dhe komoditetin e jetesës në apartamentet tona të mahnitshme.",
        text:"Në E.B Real Estate, kuptojmë që kërkesat e secilit klient janë të veçanta. Prandaj, ofrojmë zgjidhje të përshtatura për të përmbushur qëllimet tuaja specifike të pronave të patundshme. Qoftë që jeni duke kërkuar të blini, të shisni, të qirani, ose të investoni, marrim kohën për të dëgjuar nevojat tuaja, për të kuptuar objektivat tuaja dhe për të përshtatur shërbimet tona në përputhje me to. Prioriteti ynë është të sigurojmë që udhëtimi juaj në pronën e patundshme të jetë i lehtë, i suksesshëm dhe në përputhje me vizionin tuaj.",
        secondText:"Në një treg të patundshm të pronave mund të jepet emocionuese, por me ekipin tonë të profesionistëve të njohur të pronave të patundshme në anën tuaj, mund të merrni vendime të informuara me vetëbesim. Qoftë që jeni një blerës i parë, një investitor i përvojshëm, ose kërkoni të qirani një pronë, ne ofrojmë ndihmë eksperte të përshtatur për qëllimet tuaja të veçanta të pronave të patundshme. Ekipi ynë ka njohuri të gjerë të tendencave të tregut lokal, aftësi të negocimit dhe përkushtim për të ofruar shërbim të jashtëzakonshëm ndaj klientëve.",
        imageToSend:ApartmentComplex,
        altAttribute:"Apartment Complex"
    }]
    return<>
    {data && data.map((elem,index)=>{
        return(<div key={index} ref={ref}>
            {propertyType===elem.id&&(<>
            <div className="container short-description-container">
                <div className="row">
                    <div className="col-12 caption-container">  <h1>{elem.caption}</h1></div>
                    <div className="col-12 col-md-6 shortdescription-text"
                    style={{animationName:inView ? "shortDescriptionText":""}}>
                      
                        <p>{elem.text}</p>
                        <p>{elem.secondText}</p>
                    </div>
                    <div className="col-12 col-md-6 shortdescription-image "
                    style={{animationName:inView ? "shortDescriptionImage":""}}>
                        <Image src={elem.imageToSend.src} width={elem.imageToSend.width} height={elem.imageToSend.height} alt={elem.altAttribute} />
                    </div>
                </div>
            </div>
            </>)}
        </div>)
    })}
    </>

}