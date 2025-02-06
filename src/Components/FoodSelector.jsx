import styles from "./FoodSelector.module.css";
import cinemaFood from "../assets/cinemaFood.jpeg";
import cinemaDrink from "../assets/cinemaDrink.jpg";
import cinemaVeganFood from "../assets/cinemaVeganFood.jpg";

function FoodSelector() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageBox}>
        <img className={styles.image} src={cinemaFood} alt="popcorn" />
        <h1 className={styles.imageText}>Food</h1>
      </div>
      <div className={styles.imageBox}>
        <img className={styles.image} src={cinemaDrink} alt="popcorn" />
        <h1 className={styles.imageText}>Drinks</h1>
      </div>
      <div className={styles.imageBox}>
        <img className={styles.image} src={cinemaVeganFood} alt="popcorn" />
        <h1 className={styles.imageText}>Vegan</h1>
      </div>
    </div>
  );
}

export default FoodSelector;
