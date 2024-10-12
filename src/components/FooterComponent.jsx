import ARLogo from "/public/AR-Logo.png"
import "./FooterComponent.css"

function FooterComponent() {

    return( 
        <footer>
            <div className="footer-container">
                <div>
                    <h6>Alexandra Radoulova 2024</h6>
                    <h6>radoulovaa@gmail.com</h6>
                </div>
                <div className="logo-footer">
                    <img className="logo-footer-img" src={ARLogo} alt="Not available" />
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;