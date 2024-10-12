import ClickMap from "/public/clickmap.png";
import CarouselTwo from "/public/carousel.png";

function TestingAndIterating()  {   

    return (
        <section id="Design" className="testing_container section_gap">
            <h2 className="section_gap">3. Testing & Iterating</h2>
            <div className="testing_text in_section_gap gap_media">
                <div>
                    <h3 className="text_gap">Usability Testing</h3>
                    <p className="text_gap">
                        The app&apos;s Information Architecture and Navigation patterns underwent validation through 
                        6 moderated Usability Tests and an A/B Test
                    </p>
                    <p className="text_gap">
                        These tests uncovered usability issues within the app&apos;s UI.
                    </p>
                    <p className="text_gap">
                        The problem with highest priority was that testers frequently mistook the image-carousel in the Lesson 
                        Area&apos;s for the video-tutorial. 
                    </p>
                    <p className="text_gap">
                        This problem could lead to confusion, frustration, and potential app abandonment. This issue also hinders 
                        the discoverability of the tab menu, jeopardizing the functionality of the Lesson Area
                    </p>
                </div>
                <div className="pic_ideation_arch testing_arch">
                    <img className="testing_arch_img" src={ClickMap} alt="Not available" />
                    <h6>Click map of the Lesson Area</h6>
                </div>
            </div>

            <div className="testing_text_two" >
                <div className="text_exponation_testing">
                    <h3 className="text_gap">Problem solution</h3>
                    <p className="text_gap">
                        The solution implemented a more visually prominent tab menu and a distinctive image carousel. 
                    </p>
                    <p className="text_gap">
                        The solution implemented a more visually prominent tab menu and a distinctive image carousel. 
                        Borrowed from the principles of the well tested Material Design 3 design system the iterated 
                        UI improved the video discoverability, and enhanced the findability of the tab pattern.
                    </p>
                </div>
                <div className="pic_ideation_arch testing_arch_two">
                    <img className="testing_arch_img_two" src={CarouselTwo} alt="Not available" />
                    <h6>Before and after applying MD3 Guidelines</h6>
                </div>
            </div>
        </section>
    )
            
}

export default TestingAndIterating;