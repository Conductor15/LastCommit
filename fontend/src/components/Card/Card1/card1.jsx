import styles from './card1.module.css';
import tempPic from '../../../assets/sliderTemp.jpg';
function Card1() {
  return (
    <div className={styles.card1}>
    <img src={tempPic} alt="" />
    <div className={styles.textContainer}>
      <h1>Post Title</h1>
      <div className={styles.detail}>
        <p className={styles.date}>Date: 01/01/2024</p>
        <p className={styles.author}>Author: John Doe</p>
      </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, haodaden haodaden</p>
    </div>
    </div>
  );
}
export default Card1;