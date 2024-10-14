import profilePic from "/public/alexImg.png";
import "./HomeComponent.css"

function HomeComponenet({ sendEmail }) {

    return (
        <>
            <section className="home_section" >

                <div className="home_section_position">
                    <div className="home_text_container">
                        <h2>Hello! I am Alexandra,</h2>
                        <h1> UX / UI Designer & Researcher</h1>
                        <h4 className="home_opening_text">My approach is exploring how to transform business requirements into engaging user experiences. </h4>
                        <h4>I consider good design to be the functional and aesthetically pleasing interpretation of research insights.</h4>
                        <div className="home_btn_container">
                            <button onClick={sendEmail} className="primary_button">Get in touch</button>
                        </div>
                    </div>
                    <div className="img_container">
                            <img src={profilePic} alt="Not available" />
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default HomeComponenet;