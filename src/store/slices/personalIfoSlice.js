import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,

  reducers: {
    addPersonalInfo: (state, actions) => {
      state.push(actions.payload);
    },
  },
});
export const { addPersonalInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
