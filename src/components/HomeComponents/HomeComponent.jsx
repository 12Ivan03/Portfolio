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
                        <h4>I love exploring how to transfrom buisness requirements into enjoyable user experiences.</h4>
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