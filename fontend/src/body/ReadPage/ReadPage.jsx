import styles from './ReadPage.module.css';
import PaperTitle from '../../components/PaperTitle/PaperTitle.jsx';
import PaperContent from '../../components/PaperContent/PaperContent.jsx';
import VList from '../../components/VList/VList.jsx';
import PaperComment from '../../components/PaperComment/PaperComment.jsx';
import { useEffect } from 'react';
function ReadPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // fetch 
    
    return (
        <div className={styles.readPage}>
            <div className={styles.sideNav}>

            </div>
            <div className={styles.main}>
                <PaperTitle/>
                <PaperContent/>
                <PaperComment/>
            </div>
            <div className={styles.side}>
                <VList/>
                <VList/>
            </div>
        </div>
    );
}
export default ReadPage;