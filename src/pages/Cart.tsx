import CartItem from "../component/Cart/CartItem/CartItem";
import EmptyCart from "../component/Cart/EmptyCart/EmptyCart";
import { useTypedSelector } from "../hooks/useTypedSelector";
import MainLayout from "../layouts/MainLayout";

const Cart = () => {
  const cart = useTypedSelector((state) => state.cart);
  return (
    <MainLayout>{cart.totalCount === 0 ? <EmptyCart /> : <CartItem />}</MainLayout>
  );
};

export default Cart;
