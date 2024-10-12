import TTBHeader from "../components/TopTenBerlinComponents/TTBHeaderComp";
import TTBBody from "../components/TopTenBerlinComponents/TTBBodyComp";
import { useEffect } from "react";

function TopTenBerlin() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <section className="padding_page">
                
                <TTBHeader />

                <TTBBody />

            </section>
        </>
    )
}

export default TopTenBerlin;