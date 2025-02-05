import styles from "./SignIn.module.css";
import locationPin from "../assets/locationPin.png";
import userIcon from "../assets/userIcon.png";

function SignIn() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.locationHeader}>
        <img src={locationPin} alt="locationPin" />
        <h1 className={styles.cinemaBox}>Cinema Location</h1>
      </div>

      <div className={styles.signInBox}>
        <div className={styles.image}>
          <img className={styles.userIcon} src={userIcon} alt="signInImage" />
        </div>

        <form className={styles.form}>
          <h2 className={styles.inboxBoxText}>Username</h2>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Type username here..."
          />
          <h2 className={styles.inboxBoxText}>Password</h2>
          <input
            className={styles.inputBox}
            type="password"
            placeholder="Type username here..."
          />
          <button className={styles.submitFormButton}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
