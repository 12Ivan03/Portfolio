import "./TTBBody.css"
import DefineProblems from "./TTBBodyComponents/BodyDefinneProblems";
import Research from "./TTBBodyComponents/BodyResearch";
import InformationArchitecture from "./TTBBodyComponents/BodyInformationArchitecture";
import Testing from "./TTBBodyComponents/BodyTesting";
import UserTesting from "./TTBBodyComponents/BodyUserTesting";

function TTBBody() {

    return (
        <body className="project_position">
            <div className="project_container_position btm_end">
                <div className="project_context section_gap">
                    <div className="project_text_width">
                        <h3 className="text_gap">Project context</h3>
                        <p className="text_gap">
                            Top10 Berlin is a 15+ year-old platform that has grown into the largest location 
                            guide in the city, featuring over 3,500 locations organized into around 350 Top 10 lists.
                             It holds a <span className="p_bold">strong presence on Google,</span> ranking high for 
                             relevant search queries, and attracts <spam className="p_bold">over 500,000 visitors per month. </spam>
                        </p>
                        <p className="p_bold text_gap">
                        Despite this strong traffic, user engagement is a significant challenge, with the average time spent on the site being under 40 seconds.
                        </p>
                        <p className="text_gap">
                            <span className="p_bold">The client&apos;s primary objective is to address this engagement issue.</span> They seek a comprehensive redesign that not only increases user interaction with the platform but also boosts visibility for the businesses hosted on the site. Although the main audience is local residents, the site should be engaging also for Berlin tourists.
                        </p>

                        
                    </div>
                    <div className="nav_UX_Process">
                        <h3>The applied UX Process </h3>
                        <div className="btn_procces_nav">
                            <div className="flex_procces_nav">
                                <div className="btn_width">
                                    <button className="secondary_btn mesur mesur_TTB"><a href="#defining">1. Defining Problems & Opportunities</a></button>
                                    <button className="secondary_btn mesur mesur_TTB"><a href="#research">2. Research</a></button>
                                    <button className="secondary_btn mesur mesur_TTB"><a href="#information">3. Information Architecture & Layout</a></button>
                            
                                </div>
                            </div>
                            <div className="flex_procces_nav flex_sec_clm_TTB">
                                <div className="btn_width">
                                    <button className="secondary_btn mesur mesur_TTB"><a href="#testing">4. Testing</a></button>
                                    <button className="secondary_btn mesur mesur_TTB"><a href="#user_interface">5. User Interface</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <DefineProblems />

                <Research />

                <InformationArchitecture />

                <Testing />

                <UserTesting />

            </div>
        </body>
    )
}

export default TTBBody;