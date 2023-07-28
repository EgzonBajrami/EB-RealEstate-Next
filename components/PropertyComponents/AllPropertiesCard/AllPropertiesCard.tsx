import './AllPropertiesCard.css'
import Link from 'next/link'

export default function AllPropertiesCard({data}:any){
    const maxLength = 250;
    const truncatedText = data.text.length > maxLength ? data.text.substring(0, maxLength) + '...' : data.text;
    return<>
    <div className="house-page-card">
    <div  className="house-single-card">
                <div className="image-holder">
                    <img src={data.images[0]} alt={data.title} loading="lazy" />
                </div>
                <div className="title-holder">
                    <h3>{data.title}</h3>
                </div>
                <div className="text-holder">
                    <p>{truncatedText}</p>
                </div>
                <div className="content-items">
                <div className="euro">
                <span className="euro">&#8364;</span>
                </div>
                    <h3>{data.price}</h3>
                    {data.type==="Po" && (
                        <span>/Muaj</span>
                    )} 
                    <div className="content-icons">
                      
                      
                                <div className="content-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 32 32" id="house"><path fill="#817F96" fillRule="evenodd" d="M30 15a1 1 0 0 1-.58-.19L16 5.23 2.58 14.81a1 1 0 0 1-1.16-1.62l14-10a1 1 0 0 1 1.16 0l14 10A1 1 0 0 1 30 15zM5 9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H6v3a1 1 0 0 1-1 1z"></path><path fill="#817F96" fillRule="evenodd"  d="M25 29h-5a1 1 0 0 1-1-1v-7h-6v7a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V16a1 1 0 0 1 2 0v10a1 1 0 0 0 1 1h4v-7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h4a1 1 0 0 0 1-1V16a1 1 0 0 1 2 0v10a3 3 0 0 1-3 3Z"></path></svg>
                                <p>{data.space}m<span>2</span></p>
                                </div>
                    </div>
                    </div>
                <div className="link-holder">
             
                    <Link   href={{
                        pathname: `/prona/${data.id}`
                  
                    }}> <button>Më shumë</button></Link>
                </div>
            </div>
    </div>
    </>
}