import styles from "./MainHeader.module.css";
import userIcon from "../assets/userIcon.png";
import headerTabBar from "../assets/tabBar.png";
import cinemaFood from "../assets/cinemaFoodImage1.jpeg";
import FoodSelector from "./FoodSelector";

function MainHeader() {
  return (
    <>
      <div className={styles.mainHeader}>
        <img src={headerTabBar} alt="miniBar" />
        <h1>Snackma</h1>
        <img className={styles.userIcon} src={userIcon} alt="profileImage" />
      </div>

      <div className={styles.imageSection}>
        <button className={styles.arrow} id={styles.leftArrow}>
          &#9664;
        </button>

        <img
          className={styles.foodCarousel}
          src={cinemaFood}
          alt="Food carousel"
        />

        <button className={styles.arrow} id={styles.rightArrow}>
          &#9654;
        </button>
      </div>

      <div className={styles.imageSectionText}>
        {/* <h1>What are you hungry for?</h1> */}
      </div>

      <FoodSelector />
    </>
  );
}

export default MainHeader;
