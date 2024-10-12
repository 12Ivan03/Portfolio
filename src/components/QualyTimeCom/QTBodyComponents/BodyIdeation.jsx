import TopSideMap from "/public/top_sitemap_qT.png";
import LofiWireframe from "/public/lofi_wireframe.png";
import LoMid from "/public/lo_mid_wireframes.png";
import LowMid2 from "/public/lo_mid_wireframes_teacherID.png";

function Ideation() {

    return (
            <section id="ideation" className="section_gap">
                <h2 className="section_gap">2. Ideation</h2>
                <div>
                    <div className="section_text_width ideaton_architecture">
                        <h3 className="text_gap">Information Architecture Process</h3>
                        <p>
                            To define the app&epos;s Information Architecture and identify its key features, I initially created User Flows. These subsequently evolved into a Sitemap,
                            which was then refined and validated through an iterative process of card sorting.
                        </p>
                    </div>
                    <div className="pic_ideation_arch in_section_gap">
                        <img className="image_ideation_arch" src={TopSideMap} alt="Not available" />
                        <h6>top level site map</h6>
                    </div>
                </div>
                <div>
                    <div className="box_dev_expo fourth_two_half_gap">
                        <div className="dox_text_expo">
                            <h3 className="text_gap">Home (Browsing)</h3>
                            <p>
                                The landing page serves as the initial point for 
                                users to browse and search through tutorials and hobby categories.
                            </p>
                        </div>
                        <div className="pic_ideation_arch ideation_arch_img_second">
                            <img className="img_box_dev_expo eight_gap" src={LofiWireframe} alt="not available" />
                            <h6>Home, Browsing, low-fidelity wireframes</h6>
                        </div>
                    </div>

                    <div className="box_dev_expo fourth_two_half_gap">
                        <div className="dox_text_expo">
                            <h3 className="text_gap">Lesson Area</h3>
                            <p>
                                The contents of the Lesson Area are organized with a tab menu. 
                                The tabs contain information on the lesson&apos;s details and the video tutorials. The user could see the 
                                lesson&apos;s difficulty, duration, description, realted videos, and a contact card for support by a teacher.
                            </p>
                        </div>
                        <div className="pic_ideation_arch ideation_arch_img_second">
                            <img className="img_box_dev_expo eight_gap" src={LoMid} alt="Not available" />
                            <h6>Lesson area, low- and mid-fidelity wireframes</h6>
                        </div>
                    </div>

                    <div className="box_dev_expo fourth_two_half_gap">
                        <div className="dox_text_expo">
                            <h3 className="text_gap">Home (Browsing)</h3>
                            <p>
                                For the user&apos;s convenience, the third tab was transformed into a separate screen Teacher&apos;s Profile. 
                                This section provides information on the teacher&apos;s credentials, 
                                creative path, personal work and interests, and a way to contact them.
                            </p>
                        </div>
                        <div className="pic_ideation_arch ideation_arch_img_second">
                            <img className="img_box_dev_expo eight_gap" src={LowMid2} alt="Not abailable" />
                            <h6>Teacher&apos;s Profile, low-, mid-fidelity wireframes</h6>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Ideation;