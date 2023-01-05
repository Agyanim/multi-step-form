import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", email_address: "", phone_number: "" };
const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,

  reducers: {
    addPersonalInfo: (state, actions) => {
      state = { ...actions.payload };
    },
  },
});
export const { addPersonalInfo } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
