import styles from './VList.module.css';
import Card2 from '../Card/Card2/card2';

function VList(){
    return (
        <div className={styles.vList}>
            <h1>Related papers</h1>
            <div className={styles.cardCont}>
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
            </div>
        </div>
    );
}
export default VList;