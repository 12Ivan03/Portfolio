import "./AboutComponent.css";
import profilePic from "/public/04 Alecandra R.-cp-Violeta Lenz.png";
import Figma from "/public/figma_3.png";
import Illustrator from "/public/adobe_illustrator_3.ong.png";
import Miro from "/public/miro 1.png";
import Html from "/public/html_5_3.ong.png";
import Css from "/public/css_3.png";
import Github from "/public/github_3.png";
import AlexCV from "/public/resume_english_1024.pdf";

function AboutComponent() {

    const handleCvOpen = () => {
        window.open(AlexCV, '_blank');
    }

    return(
        <>
            <section id="about" >  

                <div className="about_position_container">

                    <div className="combine_container">
                        <h2 className="about_title">About</h2>

                        <div className="about_container">

                            <div>
                                <h3>Who am I</h3>
                                <div className="about_text">
                                    <p> 
                                        My name is Alexandra, and I am a UX/UI Designer based in Graz, Austria. 
                                        My lifelong fascination with psychology inspired me to pursue a career in UX Design, 
                                        where I am passionate about understanding and enhancing user interactions. 
                                            <br /><br />
                                        I believe that great design is a visually pleasing interpretation of research-based 
                                        insights.
                                            <br /><br />
                                        My strengths lie in  
                                            <span className="p_bold"> User Research, Wireframing, and Interactive Prototyping, </span> 
                                        where I blend creativity with analytical thinking to transform business objectives 
                                        into seamless, engaging user journeys.
                                    </p>
                                    <img src={profilePic} alt="Not available" />
                                </div>

                            </div>

                            <div className="tools_container">
                                <h3>
                                    Tools I use
                                </h3>

                                <div className="tools_icons">
                                    <div>
                                        <img src={Figma} alt="Not available" />
                                        <h6>Figma</h6>
                                    </div>
                                    <div>
                                        <img src={Illustrator} alt="Not available" />
                                        <h6>Illustrator</h6>
                                    </div>
                                    <div>
                                        <img className="miro-icon" src={Miro} alt="Not available" />
                                        <h6>Miro</h6>
                                    </div>
                                    <div>
                                        <img src={Html} alt="Not available" />
                                        <h6>html5</h6>
                                    </div>
                                    <div>
                                        <img src={Css} alt="Not available" />
                                        <h6>CSS</h6>
                                    </div>
                                    <div>
                                        <img src={Github} alt="Not available" />
                                        <h6>github</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="button_resume">
                                <button className="secondary_btn padding_sec_btn" onClick={handleCvOpen}>
                                    Check out my resume
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default AboutComponent;