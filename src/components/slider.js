import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState,useRef, useEffect } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { sliderAction } from "../redux/sliderAction";

const  SliderComponent = () => {

    const dispatch = useDispatch();
    const [ nav1, setnav1] = useState(null);
    const [ nav2, setnav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);
  

  const isPending =useSelector( (state) => state.isPending);
  const data =useSelector( (state) => state.data);
  const error =useSelector( (state) => state.error); 


  useEffect(() => {
    dispatch(sliderAction());
    setnav1(slider1.current);
    setnav2(slider2.current)
     },[dispatch]);



     var settings1 ={
       
        asNavFor:nav2,
        ref: slider1,
       
     }
     
      var settings2 = {
       
        infinite: true,
        slidesToShow: 3, 
        focusOnSelect:true,
        asNavFor:nav1,
        ref:slider2 
       
      };
       
      
      return (

         <div> 
            
          <Slider  {...settings1}>

               
              { isPending && <div>Loading...</div> }
              { error && <div>{ error }</div> }
              { data && data.map(article =>(
                 <div >
                    <div><img src= {article.poster} alt={article.title}/></div>
                    <div><h3>{article.title} </h3> </div>
                    <div><p>{article.body} </p> </div>
                 </div>

                ))}
          </Slider>

         

           
          <Slider {...settings2}>

              { isPending && <div>Loading...</div> }
              { error && <div>{ error }</div> }
              {  data &&  data.map(article =>(
                      <div>
                        <div><img src= {article.poster} alt={article.title}/></div>
                        <div><h3>{article.title} </h3> </div>
                      </div>
                       
                ))}
          </Slider>


       
        </div>


      );
    }
    
export default SliderComponent;