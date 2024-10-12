
import TestVert from "/public/test_vert.png"

function Testing() {

    return (

        <section id="testing">
            <h2 className="section_gap">4. Testing</h2>

            <div className="section_text_width_TTB section_gap">
                <h3 className="text_gap">Key Findings</h3>
                <p className="text_gap">
                    To<span className="p_bold"> validate the general navigation </span>
                    of the platform and the
                    <span className="p_bold"> logic behind the filter feature, </span>
                    I conducted a<span className="p_bold"> usability test with 5 participants. </span>
                    While the general navigation and filter feature performed positively,
                    <span className="p_bold"> an issue </span>
                    was detected with the newly implemented
                    <span className="p_bold"> internal Top 10 list navigation.</span>
                </p>

                <p className="text_gap">
                    This internal
                    <span className="p_bold"> navigation allows users to browse through the contents of a Top 10 list </span>
                    seamlessly,
                    <span className="p_bold"> without needing to return to the previous page </span>
                    after viewing each item.
                </p>
            </div>
{/* <span className="p_bold"></span> */}
            <div className="testing_text_TTB_two section_gap">
                <div className="box_dev_expo box_dev_expo_TTB">
                    <div className="findings_text_TTB_two_three">
                        <h3 className="text_gap">Optimization</h3>
                        <p className="text_gap">
                            <span className="p_bold">4 out of 5 participants were confused by the close proximity of the breadcrumbs to the internal list navigation. </span>
                            This led to participants interchangeably misclicking between the two navigations, 
                            causing frustration and loss of orientation. A common reason cited for the confusion 
                            was the chevrons in both navigation systems being too close together, making it difficult 
                            for users to differentiate intuitively between them. 
                        </p>
                        <p>
                            To address the issue, I decided to separate the two navigational elements by placing 
                            them farther apart, using the distance of the H1 title as a separator. This created 
                            clearer visual differentiation between the two, improving recognition and usability.
                        </p>
                    </div>
                    <div className="pic_ideation_arch ideation_arch_img_second TTB_img_strch">
                        <div>
                            <img className="img_box_dev_expo eight_gap" src={TestVert} alt="not available" />
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default Testing;