import Typography from "/public/typography_color_SC.png";

function DesingingAndBuilding() {
    
    return (
        <section id="design" className="section_gap">
            <h2 className="section_gap section_gap">3. Designing & Building</h2>

            <div className="design_aesthetics_container in_section_gap">
                <div className="aesthetics_CS">
                    <h3 className="text_gap">UI Aesthetics</h3>
                    <p className="text_gap"> 
                        The minimalistic color palette is designed to create a calm, clean, and uncluttered space, 
                        allowing the art&apos;s imagery to take center stage while maintaining harmony with the text content.
                    </p>
                    <p className="text_gap">
                        Given the abundance of text, it was important to make the content easily scannable. The use of four 
                        distinct headings aims at striking a balance between harmony and contrast, guiding the viewer&apos;s 
                        eye and enhancing readability.
                    </p>
                </div>
                <div className="design_aesthetics_img">
                    <img src={Typography} alt="Not available" />
                </div>
            </div>

            <div>
                <h3 className="text_gap">Development</h3>
                <p className="text_gap"> 
                    Once the interactive prototype was finished in Figma, the initial static version of the website was 
                    built locally using HTML, CSS, and JS. Later the the static site was transformed into a dynamic one, 
                    using the WordPress environment locally, to be migrated later to the official domain for final 
                    adjustments.
                </p>
            </div>
        </section>       
    )
}

export default DesingingAndBuilding;