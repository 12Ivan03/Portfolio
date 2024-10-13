import { useState } from "react";
import seven from "/public/seven.png";
import "./CarouselCard.css"

function SevenCirclesTwo() {

    const [hoverRed, setHoverRed] = useState(false);

    const handleHoverOn = () => setHoverRed(true);
    const handleHoverOff = () => setHoverRed(false);

    return (
        <div className="carousel_card" onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff} >
            <div className="button_container">
                <div className="top_arrow"></div>
                <div className="bottom_arrow"></div>
            </div>
            <div className="carousel_text">
                <h3 className='carousel_text_h3'>SevenCircles</h3>
                <h4 className='carousel_text_h4'>website redesign of an art non-profit</h4>
            </div>
            <img className='carousel_image' src={seven} alt="Not available" />

            <div className={`hover_red_carousel ${hoverRed ? 'fade_in' : 'fade_out'}`}></div>
        </div>
    )
}

export default SevenCirclesTwo;