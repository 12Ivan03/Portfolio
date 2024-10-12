import mochupTop10 from '/public/mockup_top10.png';
import './CarouselCard.css';
import { useState } from 'react';

function TopBerlinThree() {

    const [hoverRed, setHoverRed] = useState(false);

    const handleHoverOn = () => setHoverRed(true);
    const handleHoverOff = () => setHoverRed(false);

    return (
        <div className="carousel_card" onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
            <div className="button_container">
                <div className="top_arrow"></div>
                <div className="bottom_arrow"></div>
            </div>
            <div className="carousel_text">
                <h3 className='carousel_text_h3'>Top10 Berlin</h3>
                <h4 className='carousel_text_h4'>Redesign of Berlin&apos;s largest online location guide</h4>
            </div>
            <img className='carousel_image' src={mochupTop10} alt="Not available" />

            <div className={`hover_red_carousel ${hoverRed ? 'fade_in' : 'fade_out'}`}></div>
        </div>
    )
}

export default TopBerlinThree;