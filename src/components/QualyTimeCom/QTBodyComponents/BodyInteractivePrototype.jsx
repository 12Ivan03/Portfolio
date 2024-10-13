import HiFiWireframe from "/public/hi_fi_wireframes.png";
import QualyTimeDetailedStudy from "/public/QualiTimeDetailedStudy.jpg";

function InteractivePrototype() {

    const handleClick = () => {
        window.open('https://www.figma.com/proto/9crukMBTKIUdY2hxl49FJL/6.5-QualyTime-Presentation?page-id=82%3A702&node-id=2101-1973&node-type=frame&viewport=2974%2C2531%2C0.18&t=MBQpeSTjZmFqsfQe-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2101%3A1973', '_bloank')
    }

    const handleDetailedStudy = () => {
        window.open(QualyTimeDetailedStudy, '_blank');
    }

    return (
        <section>
            <div id="prototyping" className="section_text_width fourth_two_half_gap">
                <h2 className="section_gap">4. High-fidelity interactive Prototype</h2>
                <div className="in_section_gap">
                    <h3 className="text_gap">Accessibility</h3>
                    <p>
                        To provide an immersive experience for all individuals interested in the QualyTime project, 
                        I developed a high-fidelity Interactive Prototype.
                    </p>
                    <p>
                        To maximize the effectiveness and functionality of the product, I adhered to the 
                        Level A usability and Level AAA color contrast standards as outlined in the Web Content Accessibility Guidelines.
                    </p>
                </div>

                <div>
                    <h3 className="text_gap">Features</h3>
                    <p className="text_gap">The prototype demonstrates the full development of key features, including:</p>
                    <ul className="list_project">
                        <li className="text_gap"><p>Homepage</p></li>
                        <li className="text_gap"><p>Lesson area</p></li>
                        <li className="text_gap"><p>Teacher&apos;s profile</p></li>
                        <li className="text_gap"><p>Booking a call</p></li>
                        <li className="text_gap"><p>Starting a chat</p></li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="pic_ideation_arch in_section_gap">
                    <img className="interactive_img" src={HiFiWireframe} alt="Not available" />
                </div>

                <div className="project_footer_buttons">
                    {/* <div className="home_btn_container">
                        <button className="primary_button">Interactive prototype</button>
                    </div>
                    <div className="home_btn_container">
                        <button className="secondary_btn sec_project_btn_adjust">Detailed case study</button>
                    </div> */}
                    <button className="primary_button" onClick={handleClick}>Interactive prototype</button>
                    <div className="secondary_button_width">
                        <button className="secondary_btn sec_project_btn_adjust" onClick={handleDetailedStudy}>Detailed case study</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default InteractivePrototype;