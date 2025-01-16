import styles from './HList.module.css';
import Card1 from '../Card/Card1/Card1.jsx';
function HList(props) {
    return (
        <div className={styles.hList}> 
            <div className={styles.headingCont}>
            <h1 className={styles.heading}>
                Newest Posts
            </h1>
            <a href="">View more <i className='ti-angle-right'></i> </a>
            </div>

            <div className={styles.cardContainer}>
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
            </div>
        </div>
    );
}
export default HList;