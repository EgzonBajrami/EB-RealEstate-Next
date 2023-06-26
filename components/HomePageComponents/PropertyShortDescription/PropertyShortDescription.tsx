"use client"
import './PropertyShortDescription.css'
import propertyCool from '../../../public/images/propertyCool.jpg'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
interface ShortDescription{
    propertyType:string
}
export default function PropertyShortDescription({propertyType}:ShortDescription){
    
    const {ref, inView} = useInView({
        rootMargin: '-50% 0% -50% 0%',
        triggerOnce:true,
        threshold:0
    })
    const data =[{
        id:"Prona",
        caption:"Profesionalizmi ynë në shitjen e pronave të ndihmon të realizoni ëndrrat tuaja. Përvoja dhe angazhimi i E.B Real Estate janë udhërrëfyesi juaj drejt suksesit!",
        text:"Kompania jonë, E.B Real Estate, është këtu për t'ju ndihmuar në procesin e shitjes së pronës suaj. Ne kuptojmë se shitja e një prone mund të jetë një sfidë e madhe, por jemi këtu për të ju ndihmuar në çdo hap të rrugës. Ekipi ynë i përvojshëm dhe i angazhuar i agjentëve të pronave do t'ju ofrojë ndihmën dhe këshillën e duhur për të bërë procesin e shitjes sa më efikas dhe të suksesshëm. Ne ofrojmë një gamë të gjerë shërbimesh që i përshtaten nevojave tuaja individuale.",
        secondText:"Fillimisht, ne do të vlerësojmë pronën tuaj me kujdes dhe do t'ju ofrojmë një vlerësim të drejtë dhe të saktë të tregut. Me njohuritë tona të thella të tregut të pasurive të paluajtshme, ne do të sigurohemi që pronarët e pronave të dinë vlerën e vërtetë të pronës së tyre. Pas vlerësimit, ne do të krijojmë një strategji të personalizuar për të shitur pronën tuaj me sukses. Ne do të përdorim mjetet dhe kanale e-marketingut më efektive për të arritur audiencën e duhur dhe për të promovuar pronën tuaj në mënyrë të efektshme. Përveç kësaj, ne do të përdorim rrjetin tonë të kontakteve të gjerë për të gjetur blerës të interesuar dhe për të organizuar shfaqjet e pronave.",
        imageToSend:propertyCool,
        altAttribute:"Property"
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
                    <div className="col-12 col-md-6  propertymove-image"
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