import GifPhoneMochUp from "/public/Beige Black Aesthetic Phone Mockup Fashion Shop Promotion Mobile Video.gif";

function UserTesting() {

    return (
        <section id="userInterface">
            <div className="section_gap user_testing_container">
                <div className="user_text_container">
                    <h2 className="user_title_testing">5. User Interface</h2>
                    <div className="">
                        <ul className="ol_dimentions_TTB">
                            <li className="text_gap">
                                <p>
                                    <span className="p_bold">Brand Color: </span>
                                    Top10&apos;s brand color is red, a hue often associated with strong emotions, 
                                    including distress or urgency. To create a more calming and approachable feel, 
                                    I paired it with a very light cream-white-green tint. This combination helps 
                                    to balance the intensity of red and provides a more soothing visual experience.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="p_bold">Typography: </span>
                                    The client wished to retain the original Futura PT font. To improve the 
                                    readability and scannability of the site, I combined Futura PT with a contrasting 
                                    font for the titles, making them more prominent and easier for users to scan.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="user_img_container_TTB">
                    <img src={GifPhoneMochUp} alt="GIF not avaialbe" />
                </div>
            </div>
        </section>
    )
}

export default UserTesting;