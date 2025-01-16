import HomePage from './HomePage/HomePage.jsx';
import styles from './Body.module.css';

function Body(){
    return (
        <div className={styles.body}>
            <HomePage />
        </div>
    );
}

export default Body;