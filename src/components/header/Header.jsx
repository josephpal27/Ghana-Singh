import './Header.css';
import logo from '../../assets/images/logo/logo.png'; 

const Header = () => {
    return (
        <>
            <header>
                <img src={logo} alt="Logo" loading="lazy" />
            </header>
        </>
    )
}

export default Header
