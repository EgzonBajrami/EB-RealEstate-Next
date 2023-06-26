import './SingleApartmentFrame.css'
interface Frame{
    latitude:string,
    longitute:string,
}
export default function SingleApartmentFrame({latitude, longitute}:any){
    const source = `https://maps.google.com/maps?q=${latitude}, ${longitute}&z=18&output=embed`
    return<>
        <div id="#map" className="col-12 col-md-8 offset-md-2 map-holder">
          <iframe src={source}   allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
}