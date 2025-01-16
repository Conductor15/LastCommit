import styles from "./header.module.css";
import NavBar from "../components/NavBar/navbar.jsx";
import Button1 from "../components/Button/Button1/button1.jsx";
import Button2 from "../components/Button/Button2/button2.jsx";
import whitelogo from '../assets/logo/whiteLogo.svg';

function Header() {
  return (
    <div id={styles.Header}>
        <a href="" id={styles.logoButton}><img src={whitelogo} alt="" id={styles.headLogo} /></a>
        <NavBar />
        <div className={styles.butContainer}>
          <div className= {styles.searchButton}><i className="ti-search"></i></div>
          <div className= {styles.loginButton}><i className="ti-user"></i></div>
        </div>
    </div>
  );
}
export default Header;
