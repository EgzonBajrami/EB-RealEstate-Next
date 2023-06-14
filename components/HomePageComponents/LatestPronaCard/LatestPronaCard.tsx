
import Link from 'next/link';
interface latestProna{
    data:String[]
}
export default function LatestPronaCard({data}:latestProna){
    return<>
    <div className="apartments-grid">
    {data.map((elem:any,index)=>{
        return(
            <div key={index} className="single-card">
                <div className="image-holder">
                    <img src={elem.acf.house_image_one} alt={elem.title.rendered} />
                </div>
                <div className="title-holder">
                    <h3>{elem.title.rendered}</h3>
                </div>
                <div className="link-holder">
             
                    <Link   href={{
                        pathname: '/prona',
                        query: { id: `${elem.id}` },
                    }}> <button>Më shumë</button></Link>
                </div>
            </div>
        )
    })}
    </div>
    </>
}