import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from "../../types/IPizza";

interface ICart {
  pizzas?: IPizza[];
  totalCount: number;
  totalPrice: number;
}
const initialState: ICart = {
  pizzas: [{ index: 0, name: "", size: 0, type: "", imgUrl: "", price: 0 }],
  totalCount: 0,
  totalPrice: 0,
};

const AddToCart = createSlice({
  name: "AddToCart",
  initialState,
  reducers: {
    addPizzaToCart(state, action: PayloadAction<IPizza>) {
      if (state.totalCount === 0) {
        state.pizzas?.splice(0, 1, action.payload);
        state.totalCount++;
        state.totalPrice += action.payload.price;
      } else {
        state.totalCount++;
        state.pizzas?.push(action.payload);
        state.totalPrice += action.payload.price;
      }
    },
    removePizzaFromCart(state, action: PayloadAction<IPizza>) {
      state.totalCount--;
      state.totalPrice -= action.payload.price;
      state.pizzas?.splice(action.payload.index!, 1);
    },
    clearCart(state) {
      state.totalCount = 0;
      state.totalPrice = 0;
      state.pizzas = initialState.pizzas;
    },
  },
});

export default AddToCart.reducer;
export const { addPizzaToCart, removePizzaFromCart, clearCart } =
  AddToCart.actions;
