import styles from './HeroSection.module.css';
import sliderTemp from '../../../shared/assets/sliderTemp.jpg';
import Button3 from '../../../shared/components/Button/Button3/button3.jsx';
function HeroSection() {



    return (
        <div className={styles.hero}>
            <div className={styles.slider}>

                <div className={styles.slide}>
                    <img src={sliderTemp} alt="" />
                    <div className={styles.titleSlid}>
                        <div>
                            <h1>How to train your dragon?</h1>
                            <p>by Quang Hieu</p>
                        </div>
                        <div className={styles.buttonCont}>
                            <Button3 text={"Read"}/> 
                        </div>
                    </div>
                </div>
                <button className={`${styles.navBut} ${styles.prev}`}><i className="ti-angle-left"></i></button>
                <button className={`${styles.navBut} ${styles.next}`}><i className="ti-angle-right"></i></button>
            </div>
            <div className={styles.calendar}>
                <ul>
                    <li>
                        <i className={styles.time}>21:00 1/12</i>
                        <i className={styles.title}>How to...</i>
                        <i className={styles.author}>(Hoang)</i>
                        </li>
                    <li className={styles.active}>
                    <i className="ti-calendar" style={{ fontWeight: 500, fontSize: 32, paddingRight:8}}></i>
                    <i className={styles.time}>21:00 1/12</i>
                        <i className={styles.title}>How to...</i>
                        <i className={styles.author}>(Hoang)</i>
                        </li>
                    <li>
                        <i className={styles.time}>21:00 1/12</i>
                        <i className={styles.title}>How to...</i>
                        <i className={styles.author}>(Hoang)</i>
                        </li>
                </ul>
            </div>
            <div className={styles.leaderboard}>
                <h1>Leaderboard</h1>
                <ul>
                    <li className={styles.Top1LB}>1. Khánh Huy <i>(69)</i></li>
                    <li>2. Quang Hiếu <i>(55)</i></li>
                    <li>3. Thiên Hào <i>(10)</i></li>
                    <li>4. Vũ Hoàng <i>(7)</i></li>
                    <button><i className='ti-more-alt'></i></button>
                </ul>
                
            </div>
        </div>
    );
    }
export default HeroSection;