import styles from './button2.module.css'

function Button2(props) {
    return (
        <button className={styles.button2}>{props.text}</button>
    );
}
export default Button2;