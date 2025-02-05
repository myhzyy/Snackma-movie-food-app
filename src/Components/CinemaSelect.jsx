import styles from "./CinemaSelect.module.css";

function CinemaSelect() {
  return (
    <div>
      <div className={styles.dropdown}>
        <button className={styles.cinemaButton}>Cinema...</button>
        <div className={styles.content}>
          <a href="">Hull</a>
          <a href="">Manchester</a>
          <a href="">London</a>
          <a href="">Edinburgh</a>
          <a href="">Budepest</a>
        </div>
      </div>

      <div className={styles.middleSection}>
        <h3>First, please choose the cinema you will be visiting</h3>
      </div>
    </div>
  );
}

export default CinemaSelect;
