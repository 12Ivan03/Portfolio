import SiteMap from "/public/sitemap_7SC.png";
import PanesImg from "/public/panes_img_SC.png";
import Layout from "/public/layout-1_SC.png";

function InformationLayout() {

    return (
        <section id="ideation" className="section_gap">
                <h2 className="section_gap">2. Information Architecture & Layout</h2>
                <div>
                    <div className="pic_ideation_arch_SC fourth_two_half_gap">
                        <img className="image_ideation_arch_SC" src={SiteMap} alt="Not available" />
                        <h6>Sitemap SevenSircles</h6>
                    </div>
                    <div className="text_width_SC in_section_gap">
                        <h3 className="text_gap">Structure & Navigation</h3>
                        <p>
                            The websites navigation was designed with a fixed menu layout, providing easy overview of 
                            all page categories. Art industry stakeholders often want to gain a detailed understanding 
                            of collaborations, projects, and their artists so I further interlinked those pages, making 
                            all available information a couple clicks away.
                        </p>
                    </div>
                </div>



                <div>
                    <div className="section_text_width fourth_two_half_gap">
                        <h3 className="text_gap">General Layout</h3>
                        <p className="text_gap">
                            The <span className="p_bold">two independently scrollable panes</span> 
                            are an important feature that:
                        </p>

                        <ul className="list_project text_gap">
                            <li>
                                <p>
                                    allows users to <span className="p_bold">independently explore text and images,</span> 
                                    enhancing user autonomy and reducing cognitive load
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="p_bold">simplifies navigation through the lengthy content,</span> 
                                    dividing it in two shortens the pages length
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="p_bold">maximally utilizes the screen real estate,</span> enhancing the page content organization
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="in_section_gap">
                        <img className="image_width_SC" src={PanesImg} alt="Not available" />
                    </div>

                    <div className="section_text_width in_section_gap">
                        <h3 className="text_gap">Content Strategy & layout</h3>
                        <p className="text_gap">
                            The layout allows for scannable display in accordance with the content hierarchy defined by the research.
                        </p>

                        <p className="text_gap">
                            The following example is an event&apos;s page featuring 
                        </p>

                        <ul className="list_project text_gap">
                            <li>
                                <p>
                                    a title,
                                </p>
                            </li>
                            <li><p>a subtitle, </p></li>
                            <li><p>8 images, </p></li>
                            <li><p>a brief event description, </p></li>
                            <li><p>a detailed artistic concept, </p></li>
                            <li><p>and links to 9 featured artists</p></li>
                        </ul>
                    </div>

                    <div className="pic_ideation_arch_SC">
                        <img className="layout_img_SC" src={Layout} alt="Not available" />
                    </div>
                </div>
            </section>
    )
}

export default InformationLayout;