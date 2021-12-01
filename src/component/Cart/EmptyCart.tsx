import { NavLink } from "react-router-dom";
import styles from "./EmptyCart.module.scss";

const EmptyCart = () => {
  return (
    <main className={styles.main}>
      <p>Cart is empty</p>
      <div>
        <p>Probably you not order pizza yet</p>
        <p>To order pizza, yot can return to the main page</p>
      </div>
      <img src="empty-cart.png" alt="empty cart" />
      <NavLink className={styles.link} to="/">
        Back
      </NavLink>
    </main>
  );
};

export default EmptyCart;
