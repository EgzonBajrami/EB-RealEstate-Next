import './BanesaHeading.css'
import Image from 'next/image'

interface ImageProps {
    src: string;
  
    width: number;
    height: number;
  }
interface BanesaInterface{
    title:string,
    firstText:string,
    secondText:string,
    thumbnail: ImageProps

}
export default function BanesaHeading({title, firstText, secondText,thumbnail}:BanesaInterface){
    return<>
    <section className="container banesa-heading">
        <div className="row">
            <div className="col-12 banesa-caption">
            <h1>{title}</h1>
            </div>
            <div className="col-12 col-md-6 banesa-page-text">
             
                <p>{firstText}</p>
                <p>{secondText}</p>
            </div>
            <div className="col-12 col-md-5 offset-md-1 image-container">
                <Image src={thumbnail.src} alt="Apartment complex" width={thumbnail.width} height={thumbnail.height} />
            </div>
        </div>
    </section>
    </>
}