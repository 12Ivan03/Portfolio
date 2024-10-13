import "./ProjectFormatHeader.css"
import QualyTimeProjectPic from "/public/mockup_qualy_project.png";
import Usertesting from "/public/userTesting.png";
import Miro from "/public/miro 1.png"
import Figma from "/public/figma_3.png"

function QTHeader() {

    return( 
        <header className="project_position">
            <div className="project_container_position">
                <div className="header_open_text">
                    <div className="opening_text_container">
                            <div className="opening_text">
                                <h1>QualyTime</h1>
                                <h2>An educational app for hobbyists</h2>
                            </div>
                            <div className="opening_btn">
                                <button className="primary_button">Interactive prototype</button>
                                <div className="secondary_button_width">
                                    <button className="secondary_btn sec_project_btn_adjust">Detailed case study</button>
                                </div>
                            </div>
                    </div>

                    <div className="opening_description">
                            <p>An app designed to empower people to engage in recreational activities in a productive, time-efficient, and inspiring way.</p>
                            <p className="p_bold_two">It offers a wide range of instructional lessons (both videos and documents), as well as easy access to experts through booking and chat features.</p>
                            <p>This carefully structured content supports hobbyists of all levels in learning and advancing efficiently, helping them make the most of their time.</p>
                    </div>
                </div>
{/* Big image Scope, Role, and Tools */}
                <div className="header_image_project">
                    <img src={QualyTimeProjectPic} alt="Not available" />
                </div>

                <div className="project_tools">
                    <div className="project_tools_container">
                        <h3 className="des_proj_text">Scope, Role, and Tools</h3>
                        <div className="list_techniques">
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">Project type:</p>
                                <p className="description_list_test">Web-responsive app</p>       
                            </div>
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">My role:</p>
                                <p className="description_list_test">UX/UI Design from Concept to MVP and Prototype</p>                            
                            </div>                           
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">Audience:</p>
                                <p className="description_list_test">Hobbyists, Millenials</p>
                            </div>                           
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">Methods:</p>
                                <p className="description_list_test" >Ideation, User Research, User Personas, Journey Maps, IA, Wireframes, Usability Testing, A/B Testing, UI Design, Interactive Prototyping</p>                            
                            </div>
                        </div>

                    </div>
                    <div className="tools_icons project_icons project_icons_CS">
                        <div>
                            <img src={Figma} alt="Not available" />
                            <h6>Figma</h6>
                        </div>
                        <div>
                            <img src={Miro} alt="Not available" />
                            <h6>Miro</h6>
                        </div>
                        {/* className="miro-icon" */}
                        <div>
                            <img src={Usertesting} alt="Not available" />
                            <h6>UserTesting</h6>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default QTHeader;