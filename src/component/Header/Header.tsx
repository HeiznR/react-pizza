import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="logo.png" alt="" />
        <div>
          <p>REACT PIZZA</p>
          <p>The best pizza in universe</p>
        </div>
      </div>
      <nav>
        <NavLink className={styles.header__link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.header__link} to="/about">
          About
        </NavLink>
        <NavLink className={styles.header__link} to="/cart">
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
