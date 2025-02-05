import styles from "./SignIn.module.css";
import locationPin from "../assets/locationPin.png";

function SignIn() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.locationHeader}>
        <img src={locationPin} alt="locationPin" />
        <h1 className={styles.cinemaBox}>Cinema Location</h1>
      </div>

      <div className={styles.signInBox}>
        <img src="" alt="signInImage" />
      </div>
    </div>
  );
}

export default SignIn;
