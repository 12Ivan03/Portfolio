import "./ProjectFormatBody.css";
import ResearchAndDiscovery from "./QTBodyComponents/BodyResearchAndDiscovery";
import Ideation from "./QTBodyComponents/BodyIdeation";
import TestingAndIterating from "./QTBodyComponents/BodyTestingAndIterating";
import InteractivePrototype from "./QTBodyComponents/BodyInteractivePrototype";

function QTBody() {

    return (
        <body className="project_position">
            <div className="project_container_position btm_end">
                <div className="project_context section_gap">
                    <div className="project_text_width">
                        <h3 className="text_gap">Project context</h3>
                        <p>
                            The objective of my Careerfoundry&apos;s 
                            course was to build a web app that connects users to 
                            experts in any given field for a fee.
                        </p>
                        <p className="p_bold text_gap">
                            I decided to design the app from the perspective of a hobbyist.
                        </p>
                        <p className="text_gap">
                            The prototype has 5 features:
                        </p>

                        <ul className="list_project">
                            <li><p>Book &amp; pay a call</p></li>
                            <li><p>Start a chat</p></li>
                            <li><p>Teachers profiles</p></li>
                            <li><p>Video lessons with supporting materials</p></li>
                            <li><p>Search & filter</p></li>
                        </ul>
                    </div>
                    <div className="nav_UX_Process">
                        <h3>The applied UX Process </h3>
                        <div className="btn_procces_nav">
                            <div className="flex_procces_nav">
                                <div className="btn_width">
                                    <button className="secondary_btn mesur"><a href="#research">1. Research & Discovery</a></button>
                                    <button className="secondary_btn mesur"><a href="#ideation">2. Ideation</a></button>
                                </div>
                            </div>
                            <div className="flex_procces_nav">
                                <div className="btn_width">
                                    <button className="secondary_btn mesur"><a href="#Design">3. Designing & Testing</a></button>
                                    <button className="secondary_btn mesur"><a href="#prototyping">4. Prototyping</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ResearchAndDiscovery />
                
                <Ideation />

                <TestingAndIterating />
                
                <InteractivePrototype />
                
            </div>
        </body>
    )
}

export default QTBody;