import SevenTwo from "/public/seven2.png";
import "../QualyTimeCom/ProjectFormatHeader.css";
import "./SCHeader.css";
import Figma from "/public/figma_3.png";
import Miro from "/public/miro 1.png";
import Google from "/public/Google_Forms_Logo 1.png";
import JSImg from "/public/js.png";
import Css from "/public/css_3.png";
import html from "/public/html_5_3.ong.png"

function SCHeader() {

    return (
        <header className="project_position">
            <div className="project_container_position">
                <div className="header_open_text">
                    <div className="opening_text_container">
                        <div className="opening_text">
                            <h1>SevenCircles</h1>
                            <h2>website redesign of an art non-profit</h2>
                        </div>
                        <div className="opening_btn">
                            <button className="primary_button">Live Website</button>
                            <button className="secondary_btn sec_project_btn_adjust">Detailed case study</button>
                        </div>
                    </div>

                    <div className="opening_description opening_description_CSH">
                        <p>
                            This project entailed a comprehensive redesign of a contemporary art event website, 
                            notable for its dense textual content (8000+ words) and rich imagery.
                        </p>
                        <p>
                            The primary focus was centered on <span className="p_bold">reorganizing the site&apos;s information architecture</span> and presenting its content through 
                            the application of <span className="p_bold">UX writing and content strategy</span> principles, aiming to enhance accessibility and user engagement.
                        </p>
                        <p>
                            This led to <span className="p_bold">defining a clear content hierarchy and developing focused text guidelines.</span>
                        </p>
                    </div>
                </div>

                <div className="header_image_project">
                    <img src={SevenTwo} alt="Not available" />
                </div>

                <div className="project_tools project_tools_SCHeader">
                    <div>

                        <h3 className="des_proj_text">Scope, Role, and Tools</h3>
                        <div className="list_techniques">
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">Project type:</p>
                                <p className="description_list_test">Website redesign </p>       
                            </div>
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">My role:</p>
                                <p className="description_list_test">UX/UI Design, UX writing</p>                            
                            </div>                           
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">Audience:</p>
                                <p className="description_list_test">Art-event Enthusiasts, Government Officials, Event Organizers</p>
                            </div>                           
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">Methods:</p>
                                <p className="description_list_test" >
                                    Competitive Analysis, Surveys, Affinity Mapping, Content Strategy, 
                                    Content Optimization, Information Architecture Redesign, Wireframing, Prototyping, 
                                    UI, Testing
                                </p>                            
                            </div>
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">Team:</p>
                                <p className="description_list_test" >Myself, a UX Designer, a Developer</p>                            
                            </div>
                        </div>
                    </div>
                    <div className="icon_container_SCHeader">
                        <div className="icons_SCHeader">
                            <div>
                                <img src={Figma} alt="Not available" />
                                <h6>Figma</h6>
                            </div>
                            <div>
                                <img className="miro_icon" src={Miro} alt="Not available" />
                                <h6>Miro</h6>
                            </div>
                            {/* className="miro-icon" */}
                            <div>
                                <img className="google_icon" src={Google} alt="Not available" />
                                <h6>Google Forms</h6>
                            </div>
                        </div>
                        <div className="icons_SCHeader second_row">
                            <div>
                                <img src={JSImg} alt="Not available" />
                                <h6>Java Script</h6>
                            </div>
                            <div>
                                <img src={Css} alt="Not available" />
                                <h6>CSS</h6>
                            </div>
                            <div>
                                <img src={html} alt="Not available" />
                                <h6>html5</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default SCHeader;