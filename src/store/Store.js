import { configureStore } from "@reduxjs/toolkit";
import personalInfoSlice from "./slices/personalIfoSlice";
import serviceSlice from "./slices/service";
import addOnSlice from "./slices/service";
import keySlice from "./slices/service";
const Store = configureStore({
  reducer: {
    personalInfo: personalInfoSlice,
    service: serviceSlice,
    addOns: addOnSlice,
    keys: keySlice
  },
});


export default Store