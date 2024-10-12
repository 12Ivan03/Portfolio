import TTBSchreenshot from "/public/Screenshot.png"
import TTBDropdown from "/public/drodowns.png"
import "../../QualyTimeCom/ProjectFormatBody.css"
import TraficTTB from "/public/traffic_spikes.png"

function DefineProblems() {

    return (
        <section id="research">
            <h2 className="section_gap">1. Defining Problems & Opportunities</h2>
            <div className="section_text_width_TTB in_section_gap">
                <h3 className="text_gap">Competitive Analysis</h3>
                <p className="text_gap">
                    In the competitive analysis of Top10 Berlin, I used the SWOT method to identify the
                    <span className="p_bold"> strengths, weaknesses, opportunities, and threats </span> 
                    relative to its competitors.
                </p>

                <div>
                    <p className="text_gap"><span className="p_bold">Top10&apos;s strengths:</span></p>

                    <ul className="list_project text_gap">
                        <li>
                            <p>
                                <span className="p_bold">strong SEO rankings</span>
                            </p>
                        </li>
                        <li><p><span className="p_bold">longstanding brand recognition</span></p></li>
                        <li><p><span className="p_bold">curated directory of over 3,500 locations</span></p></li>
                        <li><p>
                            vast content tailored for <span className="p_bold"> family-friendly locations and businesses, </span>
                            addressing an 
                            important local audience that most competitors do not cater to.
                        </p></li>
                    </ul>
                </div>

                <div>
                    <p className="text_gap"><span className="p_bold">Weaknesses:</span></p>

                    <ul className="list_project text_gap">
                        <li>
                            <p>
                                <span className="p_bold">low user engagement</span>
                            </p>
                        </li>
                        <li><p><span className="p_bold">dated UI/UX</span></p></li>
                        <li><p><span className="p_bold">Lack of modern features </span>
                            such as dynamic maps and advanced filtering functionality that 
                            direct and indirect competitors like Mit Vergnügen, Visit Berlin, and Mr. München have long integrated. 
                        </p></li>
                        <li><p>
                            <span className="p_bold">the abundance of content, </span>
                            which boosts the high SEO rankings, 
                            <span className="p_bold">poses a great challenge when designing an intuitive user interface.</span>
                        </p></li>
                    </ul>
                </div>

                <div>
                    <p className="text_gap"><span className="p_bold">Opportunities:</span></p>

                    <ul className="list_project text_gap">
                        <li>
                            <p>
                                Enhancing the platform by focusing on
                                <span className="p_bold"> mobile optimization</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className="p_bold">Introducing a location-based filter, m</span>
                                offering a more personalized and relevant user 
                                experience for locals. Competitors primarily focus on time-based filters as they mainly target tourists.
                            
                            </p>
                        </li>
                        {/* <li><p><span className="p_bold"></span></p></li> */}
                        <li>
                            <p>
                                <span className="p_bold">Becoming the go-to platform for child caretakers and expat families </span>
                                organizing activities in Berlin presents a unique
                                <span className="p_bold">opportunity overlooked by competitors.</span>
                                Modern Berlin is home to a growing number of expats who heavily 
                                rely on local businesses to productively spend their free time with their young children. 
                            </p>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text_gap"><span className="p_bold">Threats:</span></p>

                    <ul className="list_project text_gap">
                        <li>
                            <p>
                                <span className="p_bold">Larger, better-resourced competitors.</span>
                                Top10 has recently been acquired and holds the status of a startup, with limited resources. 
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="opening_description_CSH in_section_gap">
                    <h3 className="text_gap">The challenge</h3>
                    <p className="text_gap"> 
                        This redesign requires a 
                        <span className="p_bold">careful balance between maintaining the site&apos;s established SEO rankings while 
                        implementing modern UX/UI improvements. </span>
                    </p>
                    <p className="extra_text_gap_SC">
                        Additionally, the <span className="p_bold">underperforming content strategy </span>
                        must be transformed into one that not only retains users but also delivers value to both the audience and the 
                        businesses hosted on the platform.
                    </p>
                    <p className="extra_text_gap_SC">
                        Complicating the project further is the very<span className="p_bold"> limited budget and resources </span>
                        available, presenting a challenge in fitting this ambitious project within  vigorous time constraints.
                    </p>
                </div>

                <div className="fourth_two_half_gap">
                    <div className="sec_two_capture sec_two_capture_width sec_two_capture_TTB section_gap">
                        <img className="sec_two_image_SC" src={TTBSchreenshot} alt="Not available" />
                        <h6>Before Redesign - Top10 Berlin&apos;s Homepage and Navigation</h6>
                    </div>
                </div>
            </div>

            <div className="testing_text_TTB fourth_two_half_gap">
                <div className="findings_text_TTB">
                    <h3 className="text_gap">Website Audit & Findings:</h3>
                    <p className="text_gap">
                        <span className="p_bold">Content Structure Analysis:</span>
                    </p>
                    <p className="text_gap">
                        The content on <span className="p_bold"> Top10 is organized </span>into main categories 
                        (e.g. Food), subcategories (Asian Food), and Top10 lists (Top10 Sushi Restaurants on Berlin), 
                        all accessed<span className="p_bold"> via dropdown menus.</span>
                    </p>
                    <p className="text_gap">
                        While dropdowns are typically effective for professional or goal-oriented users, they 
                        <span className="p_bold"> do not encourage explorative or discovery-driven searches, which are 
                        key to retaining a broader audience. </span>
                        In Top10&apos;s case, encouraging users to explore further is critical, but this content structure 
                        fails to support such behavior.
                    </p>

                    <p className="text_gap_TTB text_gap">
                         <span className="p_bold">Content Strategy Issue: </span>
                    </p>
                    <p className="text_gap">
                        Over the years, content has grown without a clear strategy, resulting in <span className="p_bold">misaligned categories, 
                        subcategories, and Top10 lists</span> that do not logically belong together. This disorganization makes 
                        navigation challenging, contributing to a <span className="p_bold"> bounce rate of over 95%. </span> The current structure is 
                        overwhelming for users, particularly when it lacks coherence, leading to user frustration and 
                        early abandonment.
                    </p>
                </div>
                <div className="pic_arch_TTB ">
                    <img className="testing_arch_img_TTB" src={TTBDropdown} alt="Not available" />
                    <h6>Click map of the Lesson Area</h6>
                </div>
            </div>

            <div className="text_gap section_gap">
                <p className="text_gap">
                         <span className="p_bold">Hierarchy & Cognitive Overload:</span>
                    </p>
                    <p className="text_gap">
                        The site&apos;s poor visual hierarchy is another contributor to low user engagement. After 
                        <span className="p_bold"> analyzing 200+ user sessions in PostHog, </span>I observed that mobile 
                        users exhibit erratic behavior, rapidly scrolling through pages without interacting with key 
                        information. This suggests<span className="p_bold"> poor visual hierarchy and cognitive overload due to large blocks of 
                        unstructured text </span>on each location page. By reducing the amount of text and using clear visual 
                        cues, we can alleviate this issue and encourage users to explore more.
                    </p>
            </div>

            <div className="text_gap">
                <p className="text_gap">
                         <span className="p_bold">Opportunities Identified in Google Search Console:</span>
                    </p>
                    <p className="text_gap">
                        Further analysis of traffic spikes in Google Search Console reveals that 
                        <span className="p_bold"> the site attracts significantly more visitors during holidays and seasonal events. </span>
                        This insight presents a clear<span className="p_bold"> opportunity to engage users by 
                        featuring seasonal recommendations on the homepage, boosting visibility for less-known or 
                        underperforming Top 10 lists. </span>Organizing high-traffic categories like Food (1300+ businesses) 
                        and Family Activities into well-defined subcategories could further encourage users to explore 
                        more offerings.
                    </p>
            </div>

            <div className="pic_ideation_arch_SC small_text_gap_TTB section_gap">
                <img className="image_ideation_arch_SC" src={TraficTTB} alt="Not available" />
                <h6>Sitemap SevenSircles</h6>
            </div>

            <div className="section_gap">
                <h3 className="text_gap">
                    Analysis Conclusion
                </h3>
                <p className="text_gap">
                    <span className="p_bold">A comprehensive content audit and strategy are necessary 
                    to reduce cognitive overload, simplify navigation, and better align the site&apos;s content 
                    structure</span> with user needs. By introducing a seasonal content strategy and refining the hierarchy, 
                    Top10 can improve user retention and engagement.
                </p>
            </div>
        </section>
    )
}

export default DefineProblems;