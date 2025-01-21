import HomePage from './HomePage/HomePage.jsx';
import styles from './Body.module.css';
import ReadPage from './ReadPage/ReadPage.jsx';
import {Outlet} from 'react-router-dom';
function Body(){
    return (
        <div className={styles.body}>
            <Outlet />
        </div>
    );
}

export default Body;