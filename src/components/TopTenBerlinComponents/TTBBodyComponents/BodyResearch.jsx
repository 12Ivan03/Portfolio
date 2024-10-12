
import StickyPaperImage from "/public/20240617_180845.png"
import Kerstin from "/public/Kerstin.png"

function Research() {

    return (
        <section id="research">
            <h2 className="section_gap">2. Research</h2>

            <div className="section_text_width_TTB in_section_gap">
                <h3 className="text_gap">Secondary Research on Information Behavior Models</h3>
                <p className="text_gap">
                I conducted secondary research on Information Behavior models (Michael Kohtzba&apos;s  
                &quot;User Behavior Models for Exploratory Information Seeking&quot;).
                </p>

                <p className="text_gap">
                    I identified <span className="p_bold">two critical search behaviors that the platform needs to support:</span>
                </p>

                <div>

                    <ul className="list_project text_gap">
                        <li>
                            <p>
                                <span className="p_bold">Undirected Viewing:</span>
                                users are exposed to information without having a specific informational goal. The Top10 platform should cater to this by inspiring users through a variety of themes and categories on the homepage.
                            </p>
                        </li>
                        <li><p><span className="p_bold">Conditioned Viewing</span>
                            In this mode, users navigate content with a general topic or interest in mind. Structuring the platform around clear categories and subcategories, such as &quot;Asian Food&quot; or &quot;Family Activities,&quot; can help guide users toward more specific interests.
                        </p></li>
                    </ul>
                </div>

                <p>
                    <sapn className="p_bold">For the homepage, an explorative search pattern is ideal. </sapn>
                    This will inspire users by offering seasonal, relevant, and trending topics, while also drawing 
                    attention to the variety of Top10 themes. In contrast, the
                    <sapn className="p_bold"> overall structure of the platform should follow an ontology-supported exploratory search model, </sapn>
                    where users can navigate logically through a hierarchy of categories and subcategories, finding 
                    connections between related topics. This approach would not only make exploration more intuitive 
                    but also encourage users to discover content beyond their initial scope of interest.
                </p>
            </div>

            <div className="pic_ideation_arch_SC fourth_two_half_gap">
                <img className="image_ideation_arch_SC" src={StickyPaperImage} alt="Not available" />
                <h6>Snippet from the interviews&apos; Affinity Map</h6>
            </div>

            <div className="section_text_width_TTB">
                <h3 className="text_gap">Generative Research Insights</h3>
                <p className="text_gap">
                    I conducted 
                    <sapn className="p_bold"> interviews with seven users </sapn>
                    to gain first-hand insights into their 
                    <sapn className="p_bold"> behaviors and needs when planning activities in Berlin:</sapn>
                </p>

                <div className="in_section_gap">
                    <ul className="list_project text_gap">
                        <li>
                            <p>
                                <span className="p_bold">Planning Behavior</span>
                                Most people plan their activities rather spontaneously 
                                (a few hours-couple of days in advance). Therefore the platform should cater to 
                                spontaneous outings by displaying easily accessible, seasonally relevant up-to-date 
                                information.
                            </p>
                        </li>
                        <li><p><span className="p_bold">Curiosity-Driven Discovery:</span>
                            Users rarely actively seek out new experiences but are open to exploring 
                            when made aware of new possibilities. This underlines the importance of 
                            <span className="p_bold"> recommendation systems and content discovery on the homepage </span> 
                            to capture user curiosity.
                        </p></li>
                        <li><p><span className="p_bold">Influencers as Trust Builders:</span>
                            The interviews revealed that Millennial and Gen-z users trust influencers more than 
                            traditional rankings or recommendations. As a result, 
                            <span className="p_bold"> i nvolving influencers on the platform was embraced by the client, </span> 
                            reshaping the business model to include and prioritize influencer-driven content.
                        </p></li>
                        <li><p><span className="p_bold">Key Information Needs:</span>
                            The most relevant information for users in Berlin includes 
                            <span className="p_bold"> location and distance, availability, price, and relevance. </span> 
                            Presenting this information clearly in the user interface will 
                            make it easier for users to quickly assess and scan for their preferred options.
                        </p></li>
                        <li><p><span className="p_bold">Modern and trustworthy aesthetics:</span>
                            Users respond positively to modern design elements.
                            <span className="p_bold"> Short and clear texts, high quality imagery, 
                            minimalistic design, curated and limited content volume are signs of quality and trustworthiness:</span>
                        </p></li>
                    </ul>
                </div>
            </div>
{/* PERSONAS */}
            <div className="testing_text_TTB_two in_section_gap">
                <div className="findings_text_TTB">
                    <h3 className="text_gap">Personas</h3>
                    <p className="text_gap">
                        I developed three personas to be able to discuss more effectively the research findings, platform redesign, content strategy, and filter feature functionality with Top10’s CEO. 
                    </p>
                    <ol className="ol_dimentions_TTB">
                        <li className="text_gap">
                            <p><span className="p_bold">Primary Persona – The Family Manager:</span></p>
                            <ul className="circle_ul_li">
                                <li><p>These users organize their activities around their children&apos;s 
                                needs and are most likely to 
                                <span className="p_bold"> frequently spend money on offers and vouchers. </span> 
                                They value easy access to family-friendly content.</p></li>
                            </ul>
                        </li>
                        <li className="text_gap">
                            <p><span className="p_bold">Secondary Persona – The Professional:</span></p>
                            <ul className="circle_ul_li">
                                <li><p><span className="p_bold">Time-poor and task-oriented, professionals </span>
                                know what they want and need to find it quickly. They prioritize efficiency and prefer 
                                concise and relevant information to help them make fast decisions and
                                <span className="p_bold"> are willing to reward comfort and convenience.</span></p></li>
                            </ul>
                        </li>
                        <li>
                            <p><span className="p_bold">Secondary Persona – The Explorer:</span></p>
                            <ul className="circle_ul_li">
                                <li><p>This persona represents
                                <span className="p_bold"> youthful user personalities </span>who are open 
                                to exploring new and unique experiences. They are
                                <span className="p_bold"> spontaneous with their time and resources </span>
                                and often motivated by recommendations and unexpected discoveries. </p></li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <div className="kerstin_img_container">
                    <img className="kerstin_arch_img_TTB" src={Kerstin} alt="Not available" />
                    
                </div>
            </div>


            <div className="section_text_width_TTB section_gap">
                <h3 className="text_gap">Research Conclusion </h3>
                <p className="text_gap">
                    We have defined the following key focus areas for the redesign:
                </p>
                <ol className="ol_dimentions_TTB">
                    <li className="text_gap">
                        <p>
                            <span className="p_bold">Explorative Homepage: </span>
                            Inspire users with seasonal and relevant topics on the homepage, using an explorative search pattern that encourages discovery across a wide variety of themes.
                        </p>
                    </li>
                    <li className="text_gap">
                        <p>
                            <span className="p_bold">Ontology-Supported Structure: </span>
                            Implement an ontology-supported exploratory search model across the website, enabling users to navigate through categories and subcategories logically and discover related content.
                        </p>
                    </li>
                    <li className="text_gap">
                        <p>
                            <span className="p_bold">Simplified Content Hierarchy: </span>
                            Create clear, structured naming conventions and reduce the volume of content to only the most relevant, thus decreasing cognitive overload.
                        </p>
                    </li>
                    <li className="text_gap">
                        <p>
                            <span className="p_bold">Visual Content Overview: </span>
                            Provide a visual overview of the platform&apos;s diverse themes to help users grasp the breadth of available content at a glance.
                        </p>
                    </li>
                    <li className="text_gap">
                        <p>
                            <span className="p_bold">Flexible Filtering: </span>
                            The location filter feature should allow users to seamlessly switch between themes and topics, offering flexibility in their exploration.
                        </p>
                    </li>
                    <li className="text_gap">
                        <p>
                            <span className="p_bold">Influencer-Driven Content: </span>
                            Leverage influencers to increase platform visibility and build trust with users, leading to higher engagement and business visibility.
                        </p>
                    </li>
                </ol>
            </div>
        </section>
    )
}
export default Research;