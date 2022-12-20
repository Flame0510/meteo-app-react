import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City } from "../models/city";

const initialState: City[] = [];

export const citiesReducer = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCities: (_, action: PayloadAction<City[]>) => {
      return action.payload;
    },
    addCity: (state, action: PayloadAction<City>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCities, addCity } = citiesReducer.actions;

export default citiesReducer.reducer;
