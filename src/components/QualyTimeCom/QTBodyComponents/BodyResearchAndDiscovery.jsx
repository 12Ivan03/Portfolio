import AffinityMap from "/public/affinity_map.png";

function ResearchAndDiscovery() {

    return(
        <section id="research">
            <h2 className="section_gap">1. Research & Discovery</h2>
            <div className="section_text_width">
                <h3 className="text_gap">Research Goals</h3>
                <p className="text_gap"> To understand how people approach new or old hobbies, and find out what might help them, 
                    I conducted user interviews, focusing on:
                </p>
                <ul className="list_project">
                    <li><p>How do people choose, prepare, start, and progress in an activity;</p></li>
                    <li><p>What supports people best in their hobbies- materials, best practices etc;</p></li>
                    <li><p>When do people feel trust towards information sources in unfamiliar fields;</p></li>
                </ul>
            </div>

            <div className="sec_two_two">
                <div>
                    <h3 className="text_gap">Interview Insights and Problem Framing</h3>
                    <p>
                        The analysis of interviews with five participants, conducted using the Affinity map method, 
                        revealed several key insights related to the app&apos;s features and structure:
                    </p>
                </div>
                <div className="sec_two_capture">
                    <img className="sec_two_image" src={AffinityMap} alt="Not available" />
                    <h6>A snippet of the affinity map</h6>
                </div>
            </div>

            <div className="section_text_width in_section_gap">
                <ul className="list_project text_gap">
                    <li>
                        <p>
                            Four out of five participants believe they should consult an expert only once they are more advanced in their chosen activity. However, they simultaneously report that they
                            benefit the most from expert help at the very beginning of their learning journey. 
                        </p>
                    </li>
                    <li><p>Participants overwhelmingly prefer to learn through video content.</p></li>
                    <li><p>Many beginners waste significant time researching learning materials and inspiration appropriate for their skill level, which often discourages them from pursuing their hobbies or advancing further.</p></li>
                    <li><p>People tend to distrust online strangers unless they can relate to them on a personal level.</p></li>
                </ul>
                <p>These insights highlight the core problem:<span className="p_bold"> How can we motivate hobby beginners to book and pay for calls with experts despite these obstacles?</span></p>
            </div>

            <div className="section_text_width  section_gap">
                <h3 className="text_gap">Insight-based approach for the MVP</h3>
                <p>Based on the conducted user research, an informed hypothesis, 2 user personas, and 2 user journey maps, I concluded that the most useful MVP for hobbyists would:</p>

                <ol className="ol_dimentions">
                    <li>
                        <p>Make People Feel Comfortable with Their Skill Level</p>
                        <ul className="circle_ul_li">
                            <li><p>To make hobbyists feel more comfortable reaching out, especially beginners, the app should <span className="p_bold">refer to &quot;experts&quot; as Teachers.</span> This shift in language helps reduce intimidation and makes users more likely to seek guidance.</p></li>
                        </ul>
                    </li>
                    <li>
                        <p>Encourage Engagement and Build Loyalty:</p>
                        <ul className="circle_ul_li">
                            <li><p><span className="p_bold">Saving users time </span>by offering curated selection of high-quality video tutorials.</p></li>
                            <li><p>Allowing users to <span className="p_bold">browse, sort, and filter content</span> to access level-appropriate materials quickly.</p></li>
                            <li><p>Providing a <span className="p_bold">succinct overview</span> of each video&apos;s content for easy decision-making.</p></li>
                        </ul>
                    </li>
                    <li>
                        <p>Foster Connection with Teachers:</p>
                        <ul className="circle_ul_li">
                            <li><p>Design space for a <span className="p_bold">detailed Teacher Profile</span> that highlights credentials.</p></li>
                            <li><p>Include the teacher&apos;s <span className="p_bold">personal mission statement</span> based on specific guidelines to create a sense of purpose and relatability.</p></li>
                            <li><p>Provide a <span className="p_bold">gallery of their personal work</span> to showcase their expertise and inspire trust.</p></li>
                        </ul>
                    </li>
                </ol>
            </div>
        </section>
    )
}

export default ResearchAndDiscovery;