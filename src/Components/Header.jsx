import styles from "./Header.module.css";
import triangleImage from "../assets/backgroundTriangle.png";

function Header() {
  return (
    <div className={styles.header}>
      <h1>SNACKMA</h1>
      <p>Pre-order your cinema snacks and miss the wait!</p>
    </div>
  );
}

export default Header;
