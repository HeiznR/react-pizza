import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IData } from "../../types/IData";
import { fetchDataSucces } from "../reducers/Reducer";

export const fetchData = createAsyncThunk(
  "weatherReducer/fetchData",
  async function (url: string, { dispatch }) {
    try {
      const response = await axios.get<IData[]>(url);
      dispatch(fetchDataSucces(response.data));
      console.log(typeof response + "1");
      return;
    } catch (error) {
      //dispatch(fetchDataError("city not found"));
      return;
    }
  }
);

export default fetchData;
