import "./ContactComponent.css"

function ContactComponent({ sendEmail }) {

    return(
        <>
            <section id="contact">

                <div className="center_container_contact">
                    <div className="contact_container">
                        <h2>Contact</h2>

                        <div className="contact_text">
                            <h4>
                                I would be happy to hear from you! I&apos;m excited about new projects, collaborations, 
                                or simply exchanging ideas. 
                                <br /> <br />
                                Let&apos;s connect!
                            </h4>
                        </div>

                        <div className="contact_btn_container">
                            <button onClick={sendEmail} className="primary_button">Get in touch</button>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default ContactComponent;