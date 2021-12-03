import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import {
  clearCart,
  removePizzaFromCart,
} from "../../../redux/reducers/HandleCart";
import styles from "./CartItem.module.scss";

const CartItem = () => {
  const cart = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.cart}  `}>
      <div className={`${styles.cart__clear} `}>
        <div>Cart</div>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>
      </div>
      <div className={styles.cart__main}>
        {cart.pizzas?.map((pizza, index) => {
          return (
            <div className={`${styles.cart__wrapper}`}>
              <div className={styles.cart__infoAboutPizza}>
                <div>
                  <img src={pizza.imgUrl} alt="Pizza" />
                </div>
                <div>
                  <p>{pizza.name}</p>
                  <p>
                    {pizza.type}, {pizza.size} cm.
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    removePizzaFromCart({
                      index: index,
                      name: pizza.name,
                      type: pizza.type,
                      size: pizza.size,
                      imgUrl: pizza.imgUrl,
                      price: pizza.price,
                    })
                  )
                }
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className={`${styles.cart__info} `}>
        <div>
          TOTAL COUNT: <span> {cart.totalCount} pieces</span>
        </div>
        <div>
          TOTAL PRICE: <span>{cart.totalPrice} $</span>
        </div>
      </div>
      <button className={styles.pizza__button}>Buy</button>
    </div>
  );
};

export default CartItem;
