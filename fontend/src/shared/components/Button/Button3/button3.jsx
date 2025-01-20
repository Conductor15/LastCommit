import styles from "./button3.module.css";

function Button3(props) {
  return (
    <div className={styles.GlowButt}>
            <button className={styles.but} >{props.text}</button>
            <div className={styles.inner_butt}></div>
    </div>
  );
}

export default Button3;