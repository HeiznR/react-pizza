import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../../types/IData";

export interface IInitial {
  pizzas: IData[];
}
const initialState: IInitial = {
  pizzas: [
    {
      id: 5,
      imageUrl:
        "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
      name: "Крэйзи пепперони",
      types: [0],
      sizes: [30, 40],
      price: 580,
      category: 2,
      rating: 2,
    },
  ],
};

const dataFetch = createSlice({
  name: "weatherReducer",
  initialState,
  reducers: {
    fetchDataSucces(state, action: PayloadAction<IData[]>) {
      state.pizzas = action.payload;
    },
  },
});

export default dataFetch.reducer;
export const { fetchDataSucces } = dataFetch.actions;
