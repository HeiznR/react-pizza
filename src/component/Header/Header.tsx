import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./Header.module.scss";

const Header = () => {
  const mass = useTypedSelector((state) => state.cart);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src="logo.png" alt="" />
        </NavLink>
        <div>
          <p>REACT PIZZA</p>
          <p>The best pizza in universe</p>
        </div>
      </div>

      <NavLink className={styles.header__link} to="/cart">
        <div>{mass.totalCount} p.</div>
        <div>{mass.totalPrice} $</div>
      </NavLink>
    </header>
  );
};

export default Header;
