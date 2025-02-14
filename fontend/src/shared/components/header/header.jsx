import styles from "./header.module.css";
import NavBar from "../NavBar/navbar.jsx";
import whitelogo from '../../assets/logo/whitelogo.svg';
import Search from "../Search/Search.jsx";
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();

  return (
    <div id={styles.Header}>
        <a href="" id={styles.logoButton}><img src={whitelogo} alt="" id={styles.headLogo} /></a>
        <NavBar />
        <div className={styles.butContainer}>
          <Search />
          <div className= {styles.loginButton} onClick={()=>navigate(`/admin`)}><i className="ti-user"></i></div>
        </div>
    </div>
  );
}
export default Header;
