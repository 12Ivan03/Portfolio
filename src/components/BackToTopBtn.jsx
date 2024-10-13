
import "./BackToTopBtn.css"

function BackToTop() {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="back_to_top_btn" onClick={handleClick}>
            <div className="button_container_BtoT top_btn_rotate">
                <div className="top_arrow_BtoT"></div>
                <div className="bottom_arrow_BtoT"></div>
            </div>
        </div>

    )
}

export default BackToTop;