import styles from './card2.module.css';
import tempPic from '../../../assets/sliderTemp.jpg';
function Card2(){
    return (
        <div className={styles.card2}>
            <img src={tempPic} alt="" />
            <div className={styles.detail}>
                <h1>Lorem ipsum odor ameat, consectetuer adipiscing elit adipiscing </h1>
                <div className={styles.upload}>
                    <p>Date: 01/01/2024</p>
                    <p>Author: John Doe</p>
                </div>
            </div>
        </div>
    );
}
export default Card2;