import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import HList from '../../components/HList/HList.jsx';
import { useState, useEffect } from 'react';
import API from '../../../shared/utils/API.js';


function HomePage() {

    return (
        <div className={styles.home}>
            <HeroSection />
            <HList/>
        </div>
    );
}
 export default HomePage;