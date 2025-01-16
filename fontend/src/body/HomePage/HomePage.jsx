import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import HList from '../../components/HList/HList.jsx';
import { useState, useEffect } from 'react';
import API from '../../API.js';


function HomePage() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch(API.get_posts)
        .then((response) => response.json())
        .then((data) => console(data));
    }, []);
    return (
        <div className={styles.home}>
            <HeroSection />
        
            <HList/>
        </div>
    );
}
 export default HomePage;