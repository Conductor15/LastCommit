import styles from "./header.module.css";
import NavBar from "../NavBar/navbar.jsx";
import whitelogo from '../../assets/logo/whitelogo.svg';

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
