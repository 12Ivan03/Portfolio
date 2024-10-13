
import SevenCirclesDetailedStudy from "/public/SevenCirclesDetailedStudy.jpg"

function TestingSC() {

    const handleClick = () => {
        window.open('https://www.7circles.at/', '_blank');
    };

    const handleDetailedStudy = () => {
        window.open(SevenCirclesDetailedStudy, '_blank');
    };

    return (
         <section id="prototyping">
            <h2 className="section_gap">4. Testing</h2>
            <div className="in_section_gap">
                <h3 className="text_gap">Insights</h3>
                <p className="text_gap"> 
                    A usability test was conducted with five participants. Due to budget and time 
                    constraints, the testing took place after the website was deployed.
                </p>
                <p className="text_gap">
                    A common concern among participants was the absence of a separate agenda for upcoming projects. 
                    Presenting the program directly on the homepage felt unexpected and led to negative feedback, 
                    as three out of five testers actively looked for a dedicated agenda page.
                </p>
                <p className="text_gap">
                    In a future iteration, implementing a dedicated page for the upcoming program would address user 
                    expectations for event websites and improve the overall experience.
                </p>
            </div>

            <div className="project_footer_buttons">
                <button className="primary_button" onClick={handleClick}>Visit live site</button>
                <div className="secondary_button_width">
                    <button className="secondary_btn sec_project_btn_adjust" onClick={handleDetailedStudy}>Detailed case study</button>
                </div>
            </div>
         </section>
    )
}

export default TestingSC;