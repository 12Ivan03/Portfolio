import "./SCBody.css";
import "../QualyTimeCom/ProjectFormatBody.css";
import ResearchAndDiscoverySC from "./SCBodyComponents/BodyResearchAndDiscoverySC";
import InformationLayout from "./SCBodyComponents/InformationLayoutSC";
import DesingingAndBuilding from "./SCBodyComponents/BodyDesigningAndBuilding";
import TestingSC from "./SCBodyComponents/BodyTesting";

function SCBody() {

    return (
        <body className="project_position">
            <div className="project_container_position btm_end">
                <div className="project_context section_gap">
                    <div className="project_text_width">
                        <h3 className="text_gap">Project context</h3>
                        <p className="text_gap">
                            Seven Circles is a small Austrian non-profit organization that promotes contemporary art through 
                            accessible events designed for wide audiences. These events often involve heavy content, 
                            including long texts, images, and detailed event information.
                        </p>

                        <p className="text_gap">
                            Given SevenCircles&apos; audience development philosophy, the website&apos;s content must be easily 
                            accessible to the general public. At the same time, art stakeholders, government officials, 
                            and event organizers should be able to access more in-depth details, such as full event 
                            descriptions and additional resources.
                        </p>
                    </div>
                    
                    <div className="nav_UX_Process">
                        <h3>The applied UX Process </h3>
                        <div className="btn_procces_nav">
                            <div className="flex_procces_nav">
                                <button className="secondary_btn mesur mesurCS"><a href="#research">1. Research & Discovery</a></button>
                                <button className="secondary_btn mesur mesurCS"><a href="#ideation">2. Information Architecture & Layout</a></button>
                            </div>
                            <div className="flex_procces_nav">
                                <button className="secondary_btn mesur mesurCS"><a href="#design">3. Designing & Building</a></button>
                                <button className="secondary_btn mesur mesurCS"><a href="#prototyping">4. Testing</a></button>
                            </div>
                        </div>
                    </div>
                </div>

                <ResearchAndDiscoverySC />

                <InformationLayout />

                <DesingingAndBuilding />

                <TestingSC />
                
            </div>
        </body>
    )
}

export default SCBody;