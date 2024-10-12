import "./CarouselCard.css"
import qualyTime from '/public/qualyTimeOne.ong.png';
import { useState } from "react";

function QualyTimeOne() {

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
                <h3 className='carousel_text_h3'>QualyTime</h3>
                <h4 className='carousel_text_h4'>Best place to find and learn more about your hobbies</h4>
            </div>
            <img className='carousel_image' src={qualyTime} alt="Not available" />

            <div className={`hover_red_carousel ${hoverRed ? 'fade_in' : 'fade_out'}`}></div>
        </div>
    )
}

export default QualyTimeOne;