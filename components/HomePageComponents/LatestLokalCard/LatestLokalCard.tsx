import './LatestLokalCard.css'
import Link from 'next/link';
interface latestLokal{
    data:String[]
}
export default function LatestLokalCard({data}:latestLokal){
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
                <h3>{elem.price}</h3>
                    <div className="euro">
                <span className="euro">&#8364;</span>
                </div>
          
               
                    {elem.type==="Po" && (
                        <span>/Muaj</span>
                    )} 
                    <div className="content-icons">
                        <div className="content-icon">
                            <svg width="16px" height="16px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.799897693"><g id="Group-3" transform="translate(-266.000000, -269.000000)" fill="#817F96"><g id="Group-2" transform="translate(20.000000, 245.000000)"><g id="Group-4" transform="translate(246.000000, 0.000000)"><g id="Artboard-Copy" transform="translate(0.000000, 23.000000)"><g id="2oun_Bed_1578249" transform="translate(0.000000, 1.760000)"><path d="M15.4666667,6.016 L15.4666667,3.2 C15.4666667,1.4326888 14.0339779,0 12.2666667,0 L3.73333333,0 C1.96602213,0 0.533333333,1.4326888 0.533333333,3.2 L0.533333333,6.016 C0.205285828,6.20538912 0.00228635867,6.5545482 0,6.93333333 L0,9.6 C0.00190099505,10.2764026 0.428944695,10.8785342 1.06666667,11.104 L1.06666667,12.2666667 C1.06666667,12.5612185 1.30544813,12.8 1.6,12.8 C1.89455187,12.8 2.13333333,12.5612185 2.13333333,12.2666667 L2.13333333,11.2 L13.8666667,11.2 L13.8666667,12.2666667 C13.8666667,12.5612185 14.1054481,12.8 14.4,12.8 C14.6945519,12.8 14.9333333,12.5612185 14.9333333,12.2666667 L14.9333333,11.104 C15.5710553,10.8785342 15.998099,10.2764026 16,9.6 L16,6.93333333 C15.9977136,6.5545482 15.7947142,6.20538912 15.4666667,6.016 Z M3.73333333,1.06666667 L12.2666667,1.06666667 C13.4448741,1.06666667 14.4,2.02179253 14.4,3.2 L14.4,5.86666667 L13.8666667,5.86666667 L13.8666667,5.33333333 C13.8666667,4.44967773 13.1503223,3.73333333 12.2666667,3.73333333 L10.1333333,3.73333333 C9.24967773,3.73333333 8.53333333,4.44967773 8.53333333,5.33333333 L8.53333333,5.86666667 L7.46666667,5.86666667 L7.46666667,5.33333333 C7.46666667,4.44967773 6.75032227,3.73333333 5.86666667,3.73333333 L3.73333333,3.73333333 C2.84967773,3.73333333 2.13333333,4.44967773 2.13333333,5.33333333 L2.13333333,5.86666667 L1.6,5.86666667 L1.6,3.2 C1.6,2.02179253 2.55512587,1.06666667 3.73333333,1.06666667 Z M12.8,5.86666667 L9.6,5.86666667 L9.6,5.33333333 C9.6,5.03878147 9.83878147,4.8 10.1333333,4.8 L12.2666667,4.8 C12.5612185,4.8 12.8,5.03878147 12.8,5.33333333 L12.8,5.86666667 Z M6.4,5.86666667 L3.2,5.86666667 L3.2,5.33333333 C3.2,5.03878147 3.43878147,4.8 3.73333333,4.8 L5.86666667,4.8 C6.16121853,4.8 6.4,5.03878147 6.4,5.33333333 L6.4,5.86666667 Z M14.9333333,9.6 C14.9333333,9.89455187 14.6945519,10.1333333 14.4,10.1333333 L1.6,10.1333333 C1.30544813,10.1333333 1.06666667,9.89455187 1.06666667,9.6 L1.06666667,6.93333333 L14.9333333,6.93333333 L14.9333333,9.6 Z" id="Shape"></path></g></g></g></g></g></g></svg>
                            <p>{elem.rooms}</p>
                            </div>
  
                                <div className="content-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 32 32" id="house"><path fill="#817F96" fillRule="evenodd" d="M30 15a1 1 0 0 1-.58-.19L16 5.23 2.58 14.81a1 1 0 0 1-1.16-1.62l14-10a1 1 0 0 1 1.16 0l14 10A1 1 0 0 1 30 15zM5 9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H6v3a1 1 0 0 1-1 1z"></path><path fill="#817F96" fillRule="evenodd"  d="M25 29h-5a1 1 0 0 1-1-1v-7h-6v7a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V16a1 1 0 0 1 2 0v10a1 1 0 0 0 1 1h4v-7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h4a1 1 0 0 0 1-1V16a1 1 0 0 1 2 0v10a3 3 0 0 1-3 3Z"></path></svg>
                                <p>{elem.space}m<span>2</span></p>
                                </div>
                    </div>
                    </div>
                <div className="link-holder">
             
                    <Link   href={{
                        pathname: `/lokale/${elem.id}`,
                    }}> <button>Më shumë</button></Link>
                </div>
            </div>
        )
    })}
    </div>
    </>
}