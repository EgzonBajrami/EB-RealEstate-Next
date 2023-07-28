import './AllHousesCard.css'
import Link from 'next/link'

export default function AllHousesCard({data}:any){
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
                <p>{data.text.substring(0,250)}</p>
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
                            <svg width="16px" height="16px" viewBox="0 0 16 14" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.799897693"><g id="Group-3" transform="translate(-266.000000, -269.000000)" fill="#817F96"><g id="Group-2" transform="translate(20.000000, 245.000000)"><g id="Group-4" transform="translate(246.000000, 0.000000)"><g id="Artboard-Copy" transform="translate(0.000000, 23.000000)"><g id="2oun_Bed_1578249" transform="translate(0.000000, 1.760000)"><path d="M15.4666667,6.016 L15.4666667,3.2 C15.4666667,1.4326888 14.0339779,0 12.2666667,0 L3.73333333,0 C1.96602213,0 0.533333333,1.4326888 0.533333333,3.2 L0.533333333,6.016 C0.205285828,6.20538912 0.00228635867,6.5545482 0,6.93333333 L0,9.6 C0.00190099505,10.2764026 0.428944695,10.8785342 1.06666667,11.104 L1.06666667,12.2666667 C1.06666667,12.5612185 1.30544813,12.8 1.6,12.8 C1.89455187,12.8 2.13333333,12.5612185 2.13333333,12.2666667 L2.13333333,11.2 L13.8666667,11.2 L13.8666667,12.2666667 C13.8666667,12.5612185 14.1054481,12.8 14.4,12.8 C14.6945519,12.8 14.9333333,12.5612185 14.9333333,12.2666667 L14.9333333,11.104 C15.5710553,10.8785342 15.998099,10.2764026 16,9.6 L16,6.93333333 C15.9977136,6.5545482 15.7947142,6.20538912 15.4666667,6.016 Z M3.73333333,1.06666667 L12.2666667,1.06666667 C13.4448741,1.06666667 14.4,2.02179253 14.4,3.2 L14.4,5.86666667 L13.8666667,5.86666667 L13.8666667,5.33333333 C13.8666667,4.44967773 13.1503223,3.73333333 12.2666667,3.73333333 L10.1333333,3.73333333 C9.24967773,3.73333333 8.53333333,4.44967773 8.53333333,5.33333333 L8.53333333,5.86666667 L7.46666667,5.86666667 L7.46666667,5.33333333 C7.46666667,4.44967773 6.75032227,3.73333333 5.86666667,3.73333333 L3.73333333,3.73333333 C2.84967773,3.73333333 2.13333333,4.44967773 2.13333333,5.33333333 L2.13333333,5.86666667 L1.6,5.86666667 L1.6,3.2 C1.6,2.02179253 2.55512587,1.06666667 3.73333333,1.06666667 Z M12.8,5.86666667 L9.6,5.86666667 L9.6,5.33333333 C9.6,5.03878147 9.83878147,4.8 10.1333333,4.8 L12.2666667,4.8 C12.5612185,4.8 12.8,5.03878147 12.8,5.33333333 L12.8,5.86666667 Z M6.4,5.86666667 L3.2,5.86666667 L3.2,5.33333333 C3.2,5.03878147 3.43878147,4.8 3.73333333,4.8 L5.86666667,4.8 C6.16121853,4.8 6.4,5.03878147 6.4,5.33333333 L6.4,5.86666667 Z M14.9333333,9.6 C14.9333333,9.89455187 14.6945519,10.1333333 14.4,10.1333333 L1.6,10.1333333 C1.30544813,10.1333333 1.06666667,9.89455187 1.06666667,9.6 L1.06666667,6.93333333 L14.9333333,6.93333333 L14.9333333,9.6 Z" id="Shape"></path></g></g></g></g></g></g></svg>
                            <p>{data.rooms}</p>
                            </div>
                            <div className="content-icon">
                                <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.799897693"><g id="Group-3" transform="translate(-266.000000, -247.000000)" fill="#817F96"><g id="Group-2" transform="translate(20.000000, 245.000000)"><g id="Group-4" transform="translate(246.000000, 0.000000)"><g id="Artboard" transform="translate(0.000000, 2.000000)"><g id="1noun_bathtub_1563403" transform="translate(0.480000, 0.480000)"><path d="M0.626666667,8.77333333 L1.25333333,8.77333333 L1.25333333,10.6533333 C1.25521903,11.8974925 1.99304066,13.0226705 3.13333333,13.5203333 L3.13333333,14.4133333 C3.13333333,14.7594318 3.41390156,15.04 3.76,15.04 C4.10609844,15.04 4.38666667,14.7594318 4.38666667,14.4133333 L4.38666667,13.7866667 L10.6533333,13.7866667 L10.6533333,14.4133333 C10.6533333,14.7594318 10.9339016,15.04 11.28,15.04 C11.6260984,15.04 11.9066667,14.7594318 11.9066667,14.4133333 L11.9066667,13.5203333 C13.0469593,13.0226705 13.784781,11.8974925 13.7866667,10.6533333 L13.7866667,8.77333333 L14.4133333,8.77333333 C14.7594318,8.77333333 15.04,8.49276511 15.04,8.14666667 C15.04,7.80056822 14.7594318,7.52 14.4133333,7.52 L5.01333333,7.52 L5.01333333,1.88 C5.01333333,1.53390156 5.29390156,1.25333333 5.64,1.25333333 L8.14666667,1.25333333 C8.49276511,1.25333333 8.77333333,1.53390156 8.77333333,1.88 L8.77333333,2.56933333 C7.31424574,2.86716831 6.26636273,4.150825 6.26666667,5.64 C6.26666667,5.98609844 6.54723489,6.26666667 6.89333333,6.26666667 L11.9066667,6.26666667 C12.2527651,6.26666667 12.5333333,5.98609844 12.5333333,5.64 C12.5336373,4.150825 11.4857543,2.86716831 10.0266667,2.56933333 L10.0266667,1.88 C10.0266667,0.84170467 9.184962,6.95739762e-17 8.14666667,0 L5.64,0 C4.60170467,-6.95739762e-17 3.76,0.84170467 3.76,1.88 L3.76,7.52 L0.626666667,7.52 C0.280568223,7.52 6.95739762e-17,7.80056822 0,8.14666667 C-3.47869881e-17,8.49276511 0.280568223,8.77333333 0.626666667,8.77333333 Z M11.1719,5.01333333 L7.6281,5.01333333 C7.89415257,4.26303432 8.60392678,3.76164089 9.4,3.76164089 C10.1960732,3.76164089 10.9058474,4.26303432 11.1719,5.01333333 Z M12.5333333,8.77333333 L12.5333333,10.6533333 C12.5333333,11.6916287 11.6916287,12.5333333 10.6533333,12.5333333 L4.38666667,12.5333333 C3.34837134,12.5333333 2.50666667,11.6916287 2.50666667,10.6533333 L2.50666667,8.77333333 L12.5333333,8.77333333 Z" id="Shape"></path></g></g></g></g></g></g></svg>
                                <p>{data.bathroom}</p>
                             </div> 
                             <div className="content-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 1000 1000" viewBox="0 0 1000 1000" id="storey"><g fill="#817F96" fillRule="evenodd" transform="matrix(.1 0 0 -.1 0 511)"><path d="M2031.9,4971.8c-128.1-53.4-153-153-153-601.3v-430.5h-238.4c-277.5,0-505.2-88.9-594.1-220.6C936.1,3552.3,100,1577.7,100,1485.2c0-124.5,131.6-241.9,284.6-256.2l124.5-10.7L526.9-1674l17.8-2896l117.4-103.2L776-4776.4h1682.8c6293.7-3.6,6759.7,0,6848.7,56.9c188.6,124.5,185,74.7,185,3127.3v2828.4h135.2c145.9,0,227.7,64,270.4,202.8c17.8,60.5-85.4,341.5-387.8,1049.5c-530.1,1238.1-558.6,1287.9-747.1,1380.4c-142.3,67.6-213.5,71.2-2750.1,71.2H3408.7v441.2c0,629.7,28.5,604.8-718.7,615.5C2373.4,5000.3,2074.6,4989.6,2031.9,4971.8z M3209.5,4737c10.7-32,21.3-224.1,21.3-426.9v-370h-587h-587v370c0,202.8,10.7,394.9,21.4,426.9c17.8,49.8,103.2,56.9,565.7,56.9C3106.3,4793.9,3191.7,4786.8,3209.5,4737z M8727.5,3648.3c106.7-92.5,992.6-2109.7,964.1-2188c-14.2-39.1-864.5-46.2-4682-46.2c-4205.3,0-4664.2,7.1-4685.6,56.9c-28.5,74.7,800.5,2020.8,921.5,2152.4l92.5,103.2h3646.7h3650.3L8727.5,3648.3z M9279-1610c0-2800,0-2846.2-71.2-2917.4c-67.6-67.6-117.4-71.2-1672.1-71.2h-1601v1134.9v1134.9l-99.6,188.6c-149.4,288.2-348.7,398.5-754.2,416.3c-416.3,21.3-622.6-46.3-814.7-263.3c-78.3-92.5-153-224.1-177.9-316.6c-24.9-96.1-39.1-555-39.1-1223.9v-1070.9H2469.5c-1501.4,0-1583.2,3.6-1661.5,67.6l-85.4,67.6l-10.7,2803.5c-3.6,1544.1,0,2824.9,10.7,2849.8c10.7,35.6,871.6,46.2,4287.1,46.2H9279V-1610z M5454.4-2019.2c227.7-131.6,266.8-249,266.8-779.2v-448.3h-729.3h-729.3v426.9c0,466.1,35.6,601.2,188.6,743.5C4664.6-1880.4,5173.3-1851.9,5454.4-2019.2z M5721.2-4029.3v-569.2h-729.3h-729.3v569.2v569.2h729.3h729.3V-4029.3z"></path><path d="M2007 613.6c-206.4-74.7-313.1-163.7-405.6-341.5-74.7-145.9-81.8-192.1-71.2-718.6 14.2-750.7-49.8-700.9 889.4-700.9 935.7 0 882.3-42.7 882.3 729.3 0 387.8-14.2 587-49.8 672.4-64.1 153-277.5 327.3-469.6 373.6C2572.6 681.2 2174.2 674.1 2007 613.6zM2793.2 414.3c64-21.3 156.5-85.4 206.3-142.3 74.7-92.5 88.9-142.3 88.9-355.8v-245.4h-676-676v245.4c0 256.2 60.5 384.3 220.6 469.6C2135 481.9 2526.4 496.2 2793.2 414.3zM3088.5-738.4V-934h-676-676v195.7 195.7h676 676V-738.4zM4639.7 613.6c-188.6-67.6-309.5-160.1-394.9-306-60.5-103.2-74.7-199.2-81.8-629.7-14.2-562.1-3.6-651.1 99.6-754.2 67.6-67.6 121-71.2 782.7-71.2 942.8 0 889.4-42.7 889.4 725.8 0 302.4-17.8 594.2-39.1 651.1C5835.1 393 5650.1 556.6 5458 613.6 5237.4 681.2 4824.7 681.2 4639.7 613.6zM5426 410.8c64-17.8 156.5-81.8 206.3-138.7 74.7-92.5 88.9-142.3 88.9-355.8v-245.4h-676-676v213.5c0 245.5 60.5 387.8 199.2 480.3C4742.9 478.4 5137.8 499.7 5426 410.8zM5721.2-738.4V-934h-676-676v195.7 195.7h676 676V-738.4zM7201.3 613.6c-206.3-74.7-313.1-163.7-402-338-74.7-142.3-81.8-209.9-81.8-668.8 0-526.6 35.6-683.1 160.1-732.9 32-10.7 370-21.3 750.7-21.3 917.9 0 868.1-42.7 868.1 729.3 0 387.8-14.2 587-49.8 672.4-64 153-277.5 327.3-469.6 373.6C7767 681.2 7368.5 674.1 7201.3 613.6zM7987.5 414.3c64-21.3 156.5-85.4 206.3-142.3 74.7-92.5 88.9-142.3 88.9-355.8v-245.4h-676-676v224.1c0 245.5 46.3 359.3 181.4 459C7276 478.4 7685.1 503.3 7987.5 414.3zM8282.8-738.4V-934h-676-676v195.7 195.7h676 676V-738.4zM2007-1734.5c-206.4-74.7-313.1-163.7-405.6-341.6-74.7-145.8-81.8-192.1-71.2-718.6 14.2-750.7-49.8-700.9 889.4-700.9 935.7 0 882.3-42.7 882.3 729.3 0 387.8-14.2 587-49.8 672.4-64.1 153-277.5 327.3-469.6 373.6C2572.6-1667 2174.2-1674 2007-1734.5zM2818.1-1944.5c206.4-85.4 270.4-206.3 270.4-505.2v-263.3H2409h-679.5l10.7 281.1c14.2 306 53.4 380.7 256.1 480.3C2142.1-1880.4 2654.5-1876.9 2818.1-1944.5zM3088.5-3086.5v-195.7h-676-676v195.7 195.7h676 676V-3086.5zM7201.3-1734.5c-206.3-74.7-313.1-163.7-405.6-341.6-74.7-145.8-81.8-192.1-71.2-718.6 14.2-750.7-49.8-700.9 889.4-700.9 935.7 0 882.3-42.7 882.3 729.3 0 387.8-14.2 587-49.8 672.4-64 153-277.5 327.3-469.6 373.6C7767-1667 7368.5-1674 7201.3-1734.5zM8012.5-1944.5c206.3-85.4 270.4-206.3 270.4-505.2v-263.3h-676-676v241.9c0 430.5 167.2 572.8 668.9 576.4C7770.5-1894.6 7941.3-1916 8012.5-1944.5zM8282.8-3086.5v-195.7h-676-676v195.7 195.7h676 676V-3086.5z"></path></g></svg>
                                <p>{data.floors}</p>
                                </div>  
                                <div className="content-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 32 32" id="house"><path fill="#817F96" fillRule="evenodd" d="M30 15a1 1 0 0 1-.58-.19L16 5.23 2.58 14.81a1 1 0 0 1-1.16-1.62l14-10a1 1 0 0 1 1.16 0l14 10A1 1 0 0 1 30 15zM5 9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H6v3a1 1 0 0 1-1 1z"></path><path fill="#817F96" fillRule="evenodd"  d="M25 29h-5a1 1 0 0 1-1-1v-7h-6v7a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V16a1 1 0 0 1 2 0v10a1 1 0 0 0 1 1h4v-7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h4a1 1 0 0 0 1-1V16a1 1 0 0 1 2 0v10a3 3 0 0 1-3 3Z"></path></svg>
                                <p>{data.space}m<span>2</span></p>
                                </div>
                    </div>
                    </div>
                <div className="link-holder">
             
                    <Link   href={{
                        pathname: `/shtepia/${data.id}`
                  
                    }}> <button>Më shumë</button></Link>
                </div>
            </div>
    </div>
    </>
}