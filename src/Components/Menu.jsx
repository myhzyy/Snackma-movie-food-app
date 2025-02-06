import styles from "./Menu.module.css";
import FoodMenu from "./FoodMenu";

function Menu() {
  return (
    <>
      <div className={styles.menu}>
        <h1>Menu</h1>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.boxContainer}>
          <div className={styles.boxes}>
            <h1>All</h1>
            <button className={styles.button}>!</button>
          </div>
          <div className={styles.boxes}>
            <h1>A-Z</h1>
            <button className={styles.button}>!</button>
          </div>
          <div className={styles.boxes}>
            <h1>Filters</h1>
            <button className={styles.button}>!</button>
          </div>
        </div>
      </div>

      <div className={styles.searchBar}>
        <button className={styles.buttonBox}>🔍</button>
        <input
          type="text"
          className={styles.inputBox}
          placeholder="Search for snacks!"
        />
      </div>

      <FoodMenu />
    </>
  );
}

export default Menu;
