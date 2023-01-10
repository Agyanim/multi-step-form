import { configureStore } from "@reduxjs/toolkit";
import personalInfoSlice from "./slices/personalIfoSlice";
import serviceSlice from "./slices/service";
import addOnSlice from "./slices/addOns";
import keySlice from "./slices/keys";
const Store = configureStore({
  reducer: {
    personalInfo: personalInfoSlice,
    service: serviceSlice,
    addOns: addOnSlice,
    keys: keySlice
  },
});


export default Store