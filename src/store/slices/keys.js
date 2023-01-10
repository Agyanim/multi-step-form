import { createSlice } from "@reduxjs/toolkit";

const keySlice = createSlice({
  name: "keys",
  initialState:{
    value: {
      addOnId: "",
      selectPlanId: "",
    },
  },
  reducers: {
    setAddOnId: (state, action) => {
      state.value.addOnId = action.payload;
    },
    setSelectPlanId: (state, action) => {
      state.value.selectPlanId = action.payload;
    },
  },
});

export const { setSelectPlanId, setAddOnId } = keySlice.actions;
export default keySlice.reducer;
