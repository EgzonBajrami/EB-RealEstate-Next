import './TitleContainer.css'
export default function TitleContainer({data}:any){
    return<>
    <div className="col-12 single-apartment-title">
       <h1>{data.title}</h1> 
    </div>
    </>
}