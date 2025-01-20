import styles from './button1.module.css'

function Button1(props) {
  return (
    <button className={styles.button1}>{props.text}</button>
  );
}
export default Button1;