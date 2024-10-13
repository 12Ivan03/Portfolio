import "./TTBHeader.css";
import TopTebBerlinImg from "/public/mockup_top10.png"
import FigmaLogo from "/public/figma_3.png";
import GoogleLogo from "/public/unnamed.png";
import PosthogLogo from "/public/posthog-logomark.png";
import GoogleSheetsLogo from "/public/icons8-google-sheets.png";

function TTBHeader() {

    return (
        <header className="project_position">
            <div className="project_container_position">
                <div className="header_open_text">
                    <div className="opening_text_container">
                            <div className="opening_text">
                                <h1>Top10 Berlin</h1>
                                <h2>redesign of a Berlin location guide</h2>
                            </div>
                            <div className="opening_btn">
                                <button className="primary_button">Live website</button>
                                <div className="secondary_button_width">
                                    <button className="secondary_btn sec_project_btn_adjust">Detailed case study</button>
                                </div>
                            </div>
                    </div>

                    <div className="opening_description open_des_TTB">
                            <p>Top10 Berlin is <span className="p_bold">Berlin&apos;s largest location guide,</span> with over 3500 locations organized into Top 10 lists. </p>
                            <p>IThe project primarily focused on making the vast content more accessible by <span className="p_bold">redesigning the layout, UI and improving the Information Architecture</span> to enhance usability. </p>
                            <p>
                                The process was guided by <span className="p_bold">in-depth research, content audits, and content strategy,</span> aiming to optimize the user experience by refining the content structure, 
                                improving navigation, and integrating user-centered design principles throughout. The redesign modernized the site and made it easier for both locals and tourists to discover locations in the city.
                            </p>
                    </div>
                </div>

                <div className="header_image_project">
                    <img src={TopTebBerlinImg} alt="Not available" />
                </div>

                <div className="project_tools">
                    <div className="project_tools_container">
                        <h3 className="des_proj_text">Scope, Role, and Tools</h3>
                        <div className="list_techniques">
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">Project type:</p>
                                <p className="description_list_test">Website redesign</p>       
                            </div>
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">My role:</p>
                                <p className="description_list_test">UX/UI Design, Product Design</p>                            
                            </div>                           
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">Audience:</p>
                                <p className="description_list_test">Berlin locals, Berlin tourists, Berlin business owners</p>
                            </div>                           
                            <div className="list_small_cont">
                                <p className="p_bold title_ul">Methods:</p>
                                <p className="description_list_test" >
                                    Competitive Analysis, User Behavior Analysis, Interviews, Affinity Mapping, Content Audit, 
                                    Content Strategy, Content Optimization, Information Architecture Redesign, Wireframing, 
                                    Prototyping, UI, Testing
                                </p>                            
                            </div>
                            <div className="list_small_cont list_small_cont_TTB">
                                <p className="p_bold title_ul">Team:</p>
                                <p className="description_list_test">Myself, Top10&apos;s CEO, SEO consultant, 2 Developers</p>
                            </div>  
                        </div>

                    </div>
                    <div className="tools_icons project_icons project_icons_TTB">
                        <div>
                            <img src={FigmaLogo} alt="Not available" />
                            <h6>Figma</h6>
                        </div>
                        <div>
                            <img src={GoogleLogo} alt="Not available" />
                            <h6>Miro</h6>
                        </div>
                        <div>
                            <img src={PosthogLogo} alt="Not available" />
                            <h6>UserTesting</h6>
                        </div> 
                        <div>
                            <img src={FigmaLogo} alt="Not available" />
                            <h6>Figjam</h6>
                        </div>
                        <div>
                            <img src={GoogleSheetsLogo} alt="Not available" />
                            <h6>UserTesting</h6>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TTBHeader;