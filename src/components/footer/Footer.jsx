import './Footer.css';
import logo from '../../assets/images/logo/logo.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-left">
                        <img src={logo} alt="Logo" loading="lazy" />
                    </div>
                    <div className="footer-right">
                        <p>VISIT OUR STORE</p>
                        <p>Shop no 1/6 shyam vihar, <br /> Gr floor, 706 linking road opposite Punjab Sindh paneer, Khar west mumbai 400052</p>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © 2025 | GhanaSingh | All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
