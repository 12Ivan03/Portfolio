import "../SCBody.css";
// import "../../QualyTimeCom/ProjectFormatBody.css";
import AfinnityMap from "/public/affinity_map_.png"

function ResearchAndDiscoverySC() {

    return (
        <section id="research">
            <h2 className="section_gap">1. Research & Discovery</h2>
            <div className="opening_description_CSH in_section_gap">
                <h3 className="text_gap">The challenge</h3>
                <p className="text_gap"> 
                    The primary challenge is to design a website that is 
                    rich in both text and imagery, yet remains effortlessly navigable and accessible.
                </p>
                <p className="extra_text_gap_SC">
                    <span className="p_bold">The objective is to develop a user-friendly interface that not only allows for quick 
                    overviews but also supports in-depth exploration.</span> This design must cater to a wide range of 
                    user requirements, from the casual browsing of an art enthusiast to the detailed analysis 
                    sought by art industry stakeholders.
                </p>
            </div>

            <div className="fourth_two_half_gap">
                <div className="sec_two_capture sec_two_capture_width">
                    <img className="sec_two_image_SC" src={AfinnityMap} alt="Not available" />
                    <h6>A snippet of the first survey&apos;s affinity map</h6>
                </div>
            </div>

            <div className="section_text_width_SC in_section_gap">
                <h3 className="text_gap">Research goals</h3>
                <p className="text_gap">Two surveys were conducted aiming at:</p>

                <ul className="list_project text_gap">
                    <li>
                        <p>
                            Identify the art-event Key Information that audiences need to evaluate their interest in an 
                            art event
                        </p>
                    </li>
                    <li><p>Uncover audiences Pain Points encountered in relation to contemporary art promotional materials</p></li>
                    <li><p>Gain insights into general attitudes and emotional responses towards reading contemporary art event descriptions.</p></li>
                </ul>
            </div>
            
            <div className="section_text_width  section_gap">
                <h3 className="text_gap">Insight-based approach for the MVP</h3>
                <p>The surveys revealed specific audience attitudes and preferences:</p>

                <ol className="ol_dimentions">
                    <li>
                        <p>
                            <span className="p_bold">Users need immediate access to essential event information - </span> 
                            date, location, ticketing link, event duration
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className="p_bold">Preference for short yet impactful event descriptions,</span>
                            with concrete, relatable tone of voice
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className="p_bold">People want to know what makes each event special - </span>
                            content, setting, or concept
                        </p>
                    </li>
                    <li>
                        <p>
                            <span className="p_bold">Event imagery evokes immediate emotional connection</span>
                            between the user and the event and should be prominently displayed.
                        </p>
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default ResearchAndDiscoverySC;