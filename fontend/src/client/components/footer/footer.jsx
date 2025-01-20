import styles from './footer.module.css';
import FooterLinks from '../footerLinks/footerLinks.jsx';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        
        <div className={styles.categories}>
          <FooterLinks />
        </div>
        <div className={styles.navLinks}>
          <FooterLinks />
        </div>
        <div className={styles.contact}>
          <FooterLinks />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyRight}>Copyright © 2025 TechWiz.</p>
        <p className={styles.name}>TechWiz</p>
      </div>
    </div>
  );
}

export default Footer;