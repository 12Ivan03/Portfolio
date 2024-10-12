
import ContentTree from "/public/content_tree.png"
import BrowsingFood from "/public/brwosingFood.png";
import CategoryMVersion from "/public/category_mobile2.png";
import TwoFeatures from "/public/two_features.png"

function InformationArchitecture() {

    return (
        <section id="research">
            <h2 className="section_gap">2. Research</h2>
            <div className="section_text_width_TTB in_section_gap">
                <h3 className="text_gap">Content Audit</h3>
                <p className="text_gap">
                    To enhance the information architecture of the platform&apos;s extensive content, 
                    I initiated a content audit that involved 
                    <span className="p_bold"> indexing the Top 10 lists across three hierarchical levels: category, subcategory, and Top 10 lists. </span>
                    Each element was assigned a unique identifier using a hierarchical numbering system for better organization and clarity.
                </p>

                <p className="text_gap">
                    During this process, I identified that
                    <span className="p_bold"> more than 25% of the platform&apos;s content consisted of duplicate Top 10 lists </span>
                    residing in different areas of the website, which caused redundancy and confusion.
                    <span className="p_bold"> 50 lists were categorized as seasonal </span>
                    (Christmas, Halloween, Easter, etc.), and
                    <span className="p_bold"> 15 lists were flagged as outdated </span>and no longer relevant.
                
                </p>
            </div>

            <div className="section_text_width_TTB in_section_gap">
                <h3 className="text_gap">Restructuring </h3>
                <p className="text_gap">
                    Next, 
                    <span className="p_bold"> I created a visual representation of over 400 Top 10 lists, spread across 41 subcategories and 8 main categories. </span>
                    Based on the audit, we removed the duplicate Top 10 lists and moved the 50 seasonal lists 
                    to a dedicated seasonal category to keep them from cluttering the site throughout the year. 
                    Additionally, the 15 outdated lists were removed from the platform.
                </p>

                <p className="text_gap">
                    Following this,
                    <span className="p_bold"> the content was reorganized into a more intuitive, taxonomy-based hierarchical structure, </span>
                    reducing the number of main categories from 8 to 6 and consolidating subcategories into 30 logical groupings—without 
                    losing any essential content.
                </p>
            </div> 

            <div className="pic_ideation_arch_SC fourth_two_half_gap">
                <img className="image_ideation_arch_SC" src={ContentTree} alt="Not available" />
                <h6>Snippet from the interviews&apos; Affinity Map</h6>
            </div>

            <div className="section_text_width_TTB in_section_gap">
                <h3 className="text_gap">Naming</h3>
                <p className="text_gap">
                    Many subcategories previously shared the same or similar names across different categories, 
                    creating confusion and navigational challenges. These duplications were addressed to create a clearer, 
                    more intuitive structure for users to explore the website&apos;s content.
                </p>

                <p className="text_gap">
                    <span className="p_bold">To further enhance navigability and SEO relevance, while ensuring space for a minimalist design, 
                    I strongly recommend renaming several subcategories and Top 10 lists </span>
                    to better align with popular search keywords, making it easier for users to locate content and for 
                    search engines to index it effectively.
                </p>
            </div>

            <div className="testing_text_TTB_two in_section_gap">
                <div className="findings_text_TTB_two">
                    <h3 className="text_gap">Mobile-First Design</h3>
                    <p className="text_gap">
                        With <span className="p_bold">63% of traffic </span>coming from 
                        <span className="p_bold"> mobile users, </span>
                        I applied a mobile-first design approach to ensure a scannable and intuitive layout. 
                    </p>

                    <p className="text_gap">
                        <span className="p_bold">The platform&apos;s three-level navigation system, </span>
                        comprising categories (e.g. Food), subcategories (e.g. Asian Food), and Top 10 lists 
                        (Top10 Sushi Restaurants in Berlin), is structured now as follows:
                    </p>
                    <ul className="ol_dimentions_TTB">
                        <li className="text_gap">
                            <p>
                                <span className="p_bold">Main categories </span>
                                were now made always visible, eliminating the need for dropdown menus and making navigation more user-friendly.
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className="p_bold">Subcategories </span>
                                are now displayed in
                                <span className="p_bold"> expandable horizontal containers, </span>
                                displaying a
                                <span className="p_bold"> card-based layout for the Top10 Lists.</span>
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="kerstin_img_container">
                    <img className="kerstin_arch_img_TTB" src={BrowsingFood} alt="Not available" />
                    
                </div>
            </div>

            <div className="section_text_width_TTB_two in_section_gap">
                <div className="">
                    <h3 className="text_gap">Reducing Cognitive Overload with Progressive Disclosure</h3>
                    <p className="text_gap">
                        To handle the platform&apos;s vast content and improve usability, I implemented the following strategies:
                    </p>
                    <ul className="ol_dimentions_TTB">
                        <li className="text_gap">
                            <p>
                                <span className="p_bold">Card Limits: </span>
                                I limited the number of visible cards in horizontal containers to
                                <span className="p_bold"> 5 on mobile and 9 on desktop, </span>
                                aligning with Miller&apos;s Law to reduce cognitive overload and enhance user focus.
                            </p>
                            
                        </li>
                        <li className="text_gap">
                            <p>
                                <span className="p_bold">Text Length & SEO: </span>
                                Only the first paragraph of each text is displayed. I advocated for using 
                                SEO-optimized keywords early in the content, while maintaining a friendly 
                                and straightforward tone of voice to improve both readability and search 
                                engine performance.
                            </p>
                            
                        </li>
                    </ul>
                </div>
            </div>

            <div className="in_section_gap">
                <div className="sec_two_capture sec_two_capture_width_TTB">
                    <img className="sec_two_image_SC TTB_img_width" src={CategoryMVersion} alt="Not available" />
                    <h6>Horizontal container card-based layout</h6>
                </div>
            </div>

            <div className="testing_text_TTB_two section_gap">

                <div className="box_dev_expo fourth_two_half_gap">
                    <div className="findings_text_TTB_two_two">
                        <h3 className="text_gap">Filter Feature & Search</h3>
                        <p className="text_gap">
                            Due to SEO considerations,
                            <span className="p_bold"> the content audit was postponed until </span>
                            after the relaunch to better track potential traffic changes. As a result,
                            <span className="p_bold"> the design process focused on making the layout adaptable for both pre- and post-audit content structures </span>
                            while accommodating the following
                            <span className="p_bold"> upcoming features.</span>
                        </p>

                        <ul className="ol_dimentions_TTB_two">
                            <li className="text_gap">
                                <p>
                                    <span className="p_bold">A location filter feature </span>
                                    was conceptualized, prototyped, and interactively tested to ensure smooth future integration.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className="p_bold">A suggestive search feature </span>
                                    with
                                    <span className="p_bold"> categorical sorting </span>
                                    and fuzzy matching was conceptualized to improve user experience and content discoverability.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="pic_ideation_arch ideation_arch_img_second">
                        <img className="img_box_dev_expo eight_gap" src={TwoFeatures} alt="not available" />
                        <h6>Home, Browsing, low-fidelity wireframes</h6>
                    </div>
                </div>    
            </div>

        </section>
    )
}

export default InformationArchitecture;