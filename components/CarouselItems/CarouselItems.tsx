"use client"
import './CarouselItems.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CarouselData{
    data:string[]
}
const Arrow = ({  onClick }:any) => (

      <svg onClick={onClick} fill="#000000" height="40px" width="40px" version="1.1" id="next-arrow" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 511.996 511.996">
<g>
	<g>
		<path d="M508.245,246.953L363.435,102.133c-5.001-5.001-13.099-5.001-18.099,0c-5.001,5-5.001,13.099,0,18.099l122.965,122.965
			H12.8c-7.074,0-12.8,5.726-12.8,12.8c0,7.074,5.726,12.8,12.8,12.8h455.492L345.327,391.763c-5.001,5-5.001,13.099,0,18.099
			c5.009,5.001,13.099,5.001,18.108,0l144.811-144.811C513.246,260.051,513.246,251.953,508.245,246.953z"/>
	</g>
</g>
</svg>
  
  );


export default function CarouselItems({data}:CarouselData){
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll: 1,

        nextArrow:<Arrow />,
     
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 415,
              settings: {
                slidesToShow: 1,
              },
            },
          ]
      };
      console.log(data);
    return<>
    <div className="slider-wrapper">
        <div className="left-blur"></div>
        <div className="right-blur"></div>
    <Slider {...settings}>
        {data && data.map((elem:string)=>{
            return( <div className="slider-images" key={elem}>
            <img src={elem} alt="image of banesa" />
        </div>)
        })}
  
   
    </Slider>
    </div>
    </>
}