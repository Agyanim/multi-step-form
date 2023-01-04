import { createSlice } from "@reduxjs/toolkit";
import cardDetail from "../../utils/cardDetails";

const initialState = cardDetail;

const serviceSlice = createSlice({
  name: "services",
  
  initialState:{
    value:{
        isMonthly: true,
        initialState
    },
  },
  reducers: {
    toggle: (state) => {
      state.value.isMonthly=(!state.value.isMonthly)  
    },
 updateService:(state,actions)=>{
state.value.initialState.push(actions.payload)
 }
  },
});
export const {toggle}=serviceSlice.actions
export default serviceSlice.reducer;
