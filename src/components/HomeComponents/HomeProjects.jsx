import TopBerlinThree from "../componentsCarousel/TopBerlinThree";
import SevenCirclesTwo from "../componentsCarousel/SevenCirclesTwo";
import QualyTimeOne from "../componentsCarousel/QualtTimeOne";
import "./HomeProjects.css";
// import { useState } from "react";
import { Link } from "react-router-dom";


function HomeProjects() {

    return(
        <section id="projects" >

            <div className="project_container">

                <div className="border_container">
                    <h2 className="project_title">Projects</h2>
                    <div className="carousel">
                        <Link className="link_a_projects_carousel" to={"/top-10-berlin"}>
                            <TopBerlinThree />
                        </Link>
                        <Link className="link_a_projects_carousel" to={"/seven-circles"}><SevenCirclesTwo /></Link>
                        <Link className="link_a_projects_carousel" to={"/qualy-time"}><QualyTimeOne /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProjects;




    // const [currentIndex, setCurrentIndex] = useState(0);

    // const projects = [ 
    //     { component: <TopBerlinThree />, path: "/top-10-berlin" }, 
    //     { component: <SevenCirclesTwo />, path: "/seven-circles" }, 
    //     { component: <QualyTimeOne />, path: "/qualy-time" }
    // ];

    // // const visibleCards = 2 
    // const totalGroups = Math.ceil(projects.length / 2);

    // const handleNext = () => {
    //     setCurrentIndex((prevIndex) => {
    //         const nowIndex = prevIndex + 1;
    //         return nowIndex < projects.length - 1 ? nowIndex : prevIndex;
    //     });
    // }

    // const handlePrev = () => {
    //     setCurrentIndex((prevIndex) => {
    //         const nowIndex = prevIndex - 1;
    //         return nowIndex >= 0 ? nowIndex : prevIndex;
    //     });
    // }

                        {/* <div className="button_container">
                            <button className={ `${currentIndex === 0 ? 'hide_button' : '' } button_carsl` } onClick={handlePrev}>
                                <div className="top_arrow"></div>
                                <div className="bottom_arrow"></div>
                            </button>
                        </div> */}

                        {/* <div className="carousel_wrapper">
                            <div className="carousel_content"
                                style={ { transform: `translateX(-${currentIndex * (53.8 / 2)}%)` } }
                            >                              
                                {projects.map((project, index) => (
                                    <div key={index}>
                                        <Link to={project.path} className="link_a_projects_carousel">
                                            {project.component}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div> */}

                        {/* <div className="button_container">
                            <button className={ `${currentIndex + 1 === totalGroups ? 'hide_button': '' } button_carsl` } onClick={handleNext}>
                                <div className="top_arrow_next"></div>
                                <div className="bottom_arrow_next"></div>
                            </button>
                        </div> */}