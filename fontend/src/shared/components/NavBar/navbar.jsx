import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
function NavBar() {
    // [categories, setCategories] = useState([]);
    // fetch(API.get_categories)
    // .then(response => response.json())
    // .then(data=> {
    //     setCategories(data);

    // });


  return (
    <ul id={styles.navbar}>
        <li> <Link id={styles.currPage} to="/">Home</Link> </li>
        <li> <Link to="">DSA</Link> </li>
        <li> <Link to="">Software</Link></li>
        <li> <Link to="">Data Science</Link></li>
        <li><Link to="">AI</Link></li>
        <li><Link to="">Security</Link></li>
    </ul>
  );
}

export default NavBar;