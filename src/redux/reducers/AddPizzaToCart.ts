import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizza } from "../../types/IPizza";

interface ICart {
  pizzas?: IPizza[];
  count: number;
  price: number;
  isEmpty: boolean;
}
const initialState: ICart = {
  pizzas: [{ name: "", size: 0, type: "", imgUrl: "", price: 0 }],
  count: 0,
  price: 0,
  isEmpty: true,
};

const AddToCart = createSlice({
  name: "AddToCart",
  initialState,
  reducers: {
    AddPizzaToCart(state, action: PayloadAction<IPizza>) {
      state.count++;
      state.isEmpty = false;
      state.pizzas?.push(action.payload);
      state.price += action.payload.price;
    },
  },
});

export default AddToCart.reducer;
export const { AddPizzaToCart } = AddToCart.actions;
