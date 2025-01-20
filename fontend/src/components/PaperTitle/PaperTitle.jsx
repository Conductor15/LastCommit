import styles from './PaperTitle.module.css';

function PaperTitle(){
    return (
        <div className={styles.paperTitle}>
            <p className={styles.direction}>
                <a href="">Home</a> <i className='ti-angle-double-right'></i>
                <a href="">DSA</a> <i className='ti-angle-double-right'></i>
                <a href="">Unraveling the Link Between Oil Extraction and Earthquakes</a>
            </p>
            <h1 className={styles.title}>Unraveling the Link Between Oil Extraction and Earthquakes</h1>
            <span className={styles.category}>DSA</span>
            <div className={styles.detail}>
                <p>By <a href="" className={styles.author}>Pham Quang Hieu</a> - January 9, 2025</p>
                <div className={styles.buttonCont}>
                <button className={styles.video}><i className='ti-file'></i></button>
                    <button className={styles.video}><i className='ti-video-camera'></i></button>
                    <button className={styles.share}><i className='ti-sharethis'></i></button>
                </div>
            </div>    
            
        </div>
    );
}
export default PaperTitle;