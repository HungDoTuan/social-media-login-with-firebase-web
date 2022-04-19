import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataGoogle: {},
  dataFacebook: {},
};
export const dataSlice = createSlice({
  name: "login Facebook and Google",
  initialState,
  reducers: {
    addDataGoogle: (state, action) => {
      state.dataGoogle = action.payload;
      console.log(state.dataGoogle);
    },
    addDataFacebook: (state, action) => {
      state.dataFacebook = action.payload;
      console.log(state.dataFacebook);
    },
  },
});

// export const { addDataGoogle } = dataSlice.actions;

// export default dataSlice.reducer;
export const {
  actions: { addDataGoogle, addDataFacebook },
  reducer,
} = dataSlice;
