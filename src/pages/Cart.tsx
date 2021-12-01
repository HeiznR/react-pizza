import EmptyCart from "../component/Cart/EmptyCart";
import { useTypedSelector } from "../hooks/useTypedSelector";
import MainLayout from "../layouts/MainLayout";
import styles from "./Cart.module.scss";

const Cart = () => {
  const cart = useTypedSelector((state) => state.cart);
  return (
    <MainLayout>
      {cart.isEmpty ? (
        <EmptyCart />
      ) : (
        cart.pizzas?.map((pizza) => {
          return (
            <div className={styles.pizzaInCart}>
              <div>
                <img src={pizza.imgUrl} alt="Pizza" />
              </div>
              <div>
                <p>{pizza.name}</p>
                <p>
                  {pizza.type},{pizza.size}
                </p>
              </div>
            </div>
          );
        })
      )}
    </MainLayout>
  );
};

export default Cart;
