import styles from './card1.module.css';
import tempPic from '../../../assets/sliderTemp.jpg';
import { useNavigate } from 'react-router-dom';
function Card1(props) {
  const date = new Date(props.date).toLocaleDateString("vi-VN");
  const navigate = useNavigate();

  return (
    <div className={styles.card1} id={props.id} onClick={()=>navigate(`/detail/${props.id}`)}>
    <img src={props.image} alt={props.title} />
    <div className={styles.textContainer}>
      <h1 alt={props.title}>{props.title}</h1>
      <div className={styles.detail}>
        <p className={styles.date}>Date: {date}</p>
        <p className={styles.author}>Author: {props.author}</p>
      </div>
        <p className={styles.desc}>{props.description}</p>
    </div>
    </div>
  );
}
export default Card1;