import { useEffect } from "react";
import SCHeader from "../components/SevenCirclesComponents/SCHeader";
import SCBody from "../components/SevenCirclesComponents/SCBody";

function SevenCircles() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <section className="padding_page">
            
            <SCHeader />

            <SCBody />

        </section>
    )
}

export default SevenCircles;