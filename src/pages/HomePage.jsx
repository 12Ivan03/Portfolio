import "./HomePage.css";
import HomeComponenet from "../components/HomeComponents/HomeComponent";
import HomeProjects from "../components/HomeComponents/HomeProjects";
import AboutComponent from "../components/HomeComponents/AboutComponent";
import ContactComponent from "../components/HomeComponents/ContactComponent";

function HomePage(){

    const sendEmail = () => {
        const email = "ivan.pavlov1203@gmail.com";
        const subject = "Hello";
        const body = "Hello, I wanted to reach out and offer you a job ;) ... :D ";
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

        return(
            <div className="home_page">
                <div id="home"></div>
                
                <div className="background">
                    <div className="elips1"></div>
                    <div className="elips2"></div>
                    <div className="elips3"></div>
                    <div className="elips4"></div>
                </div>
                
                <HomeComponenet sendEmail = {sendEmail} />

                <HomeProjects />

                <AboutComponent />
                
                <ContactComponent sendEmail = {sendEmail} />          
            </div>
        )
}

export default HomePage;
