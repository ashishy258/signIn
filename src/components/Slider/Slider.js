import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import One from "./One.jpg";
import Three from "./Three.jpg";
import Four from "./Four.jpg";
import './Slider.css';



class Slider extends React.Component{
    render(){

        return(
            <div className="w-50 center pa3" > 
                <AliceCarousel disableDotsControls disableButtonsControls autoPlay infinite  >
                    <img alt="abc" src={One} className="sliderimg"/>
                    <img alt="abc" src={Three} className="sliderimg"/>
                    <img alt="abc" src={Four} className="sliderimg"/>
                </AliceCarousel>
            </div>
        );
    }
}


export default Slider;