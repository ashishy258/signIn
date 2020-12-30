import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import One from "./One.jpg";
import Two from "./Two.jpg";
import Three from "./Three.jpg";
import Four from "./Four.jpg";
import './Slider.css';



class Slider extends React.Component{
    render(){

        return(
            <div style={{margin: 'auto', width: '50%'}} > 
                <AliceCarousel>
                    <img alt="abc" src={One} className="sliderimg"/>
                    <img alt="abc" src={Two} className="sliderimg"/>
                    <img alt="abc" src={Three} className="sliderimg"/>
                    <img alt="abc" src={Four} className="sliderimg"/>
            </AliceCarousel>
            </div>
        );
    }
}


export default Slider;