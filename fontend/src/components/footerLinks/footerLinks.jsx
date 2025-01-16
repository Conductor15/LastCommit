import styles from './footerLinks.module.css';

function FooterLinks() {
    return (
        <div className={styles.footerLinks}>
        <h1>Categories</h1>
        <hr className={styles.line} />
        <a href="">DSA</a>
        <a href="">Software</a>
        <a href="">Data Science</a>
        <a href="">AI</a>
        <a href="">Security</a>
        </div>
    );
    }
export default FooterLinks;