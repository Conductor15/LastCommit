import HomePage from './HomePage/HomePage.jsx';
import styles from './Body.module.css';
import ReadPage from './ReadPage/ReadPage.jsx';
import {Routes, Route} from 'react-router-dom';
function Body(){
    return (
        <div className={styles.body}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="?page=:page" element={<ReadPage />} />
                <Route path="/detail/:id" element={<ReadPage />} />
            </Routes>
        </div>
    );
}

export default Body;