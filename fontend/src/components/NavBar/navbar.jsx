import API from '../../API.js';
import styles from './navbar.module.css';

function NavBar() {
    // [categories, setCategories] = useState([]);
    // fetch(API.get_categories)
    // .then(response => response.json())
    // .then(data=> {
    //     setCategories(data);

    // });


  return (
    <ul id={styles.navbar}>
        <li> <a id={styles.currPage} href="">Home</a> </li>
        <li> <a href="">DSA</a> </li>
        <li> <a href="">Software</a></li>
        <li> <a href="">Data Science</a></li>
        <li><a href="">AI</a></li>
        <li><a href="">Security</a></li>
    </ul>
  );
}

export default NavBar;