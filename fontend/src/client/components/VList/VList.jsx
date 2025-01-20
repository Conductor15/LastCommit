import styles from './VList.module.css';
import Card2 from '../../../shared/components/Card/Card2/Card2.jsx';

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