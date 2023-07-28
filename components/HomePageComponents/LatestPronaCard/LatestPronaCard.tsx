
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
                    <img src={elem.images[0]} alt={elem.title} />
                </div>
                <div className="title-holder">
                    <h3>{elem.title}</h3>
                </div>
                <div className="text-holder">
                <p>{elem.text.substring(0,250)}</p>
                </div>
                <div className="content-items">
                <div className="euro">
                <span className="euro">&#8364;</span>
                </div>
                    <h3>{elem.price}</h3>
                    {elem.type==="Po" && (
                        <span>/Muaj</span>
                    )} 
                    
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