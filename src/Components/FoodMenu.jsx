import styles from "./FoodMenu.module.css";
import tacos from "../assets/tacos.jpg";

function FoodMenu() {
  return (
    <>
      <div className={styles.foodMenuContainer}>
        <div className={styles.boxFlex}>
          <div className={styles.imageBox}>
            <h3>Tacos</h3>
            <img className={styles.images} src={tacos} alt="Tacos" />
          </div>

          <div className={styles.textBox}>
            <p>
              Crispy tacos served with 3 seperate dips. Mayo, Gherkins and lemon
              avacodos
            </p>
            <button className={styles.addToCart}>Add to cart</button>
            <button className="heart-btn">❤️ Like</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodMenu;
