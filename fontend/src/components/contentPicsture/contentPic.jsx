import styles from './contentPic.module.css';
import tempImg from '../../assets/sliderTemp.jpg';

function ContentPic(){
    return (
        <div className={styles.pics}>
        <img src={tempImg} alt="" />
        <span>Morbi rhoncus sagittis tortor orci eleifend mattis suspendisse fusce magna. Praesent nascetur vestibulum non euismod nisi. </span>
    </div>
    );
}
export default ContentPic;