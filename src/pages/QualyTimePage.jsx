import { useEffect } from "react";
import QTHeader from "../components/QualyTimeCom/QTHeaderComp";
import QTBody from "../components/QualyTimeCom/QTBodyComp";

function QualyTime() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <section className="padding_page">
                
                <QTHeader />
                
                <QTBody />

            </section>
        </>
    )
}

export default QualyTime;