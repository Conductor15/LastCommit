import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import HList from '../../components/HList/HList.jsx';
import { useState, useEffect } from 'react';
import API from '../../../shared/utils/API.js';
import logo from "../../../shared/assets/logo/logo.svg";


function HomePage() {

    return (
        <div className={styles.home}>
            <HeroSection />
            <HList/>
            <img src={logo} alt="" className={styles.leftImg} />
            <img src={logo} alt="" className={styles.rightImg} /> 
        </div>
    );
}
 export default HomePage;