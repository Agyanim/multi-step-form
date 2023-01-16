import { createSlice } from "@reduxjs/toolkit";
import addOnsDetails from "../../utils/addOnsDetail";

const addOnServices = addOnsDetails;
const addOnSlice = createSlice({
  name: "addOns",
  initialState: {
    value: {
      addOnServices,
      searchResult: [],
      isYearly: false,
    },
  },
  reducers: {
    getIsYealy: (state) => {
      state.value.isYearly = !state.value.isYearly;
      let { addOnServices, searchResult,isYearly,  } = state.value;
      let newUpdate = "";
      if (isYearly) {
        newUpdate = addOnServices.map(
          (service) =>
            (service = {
              id: service.id,
              service: service.service,
              package: service.package,
              cost: service.cost * 10,
            })
        );
      } else {
        newUpdate = addOnServices.map(
          (service) =>
            (service = {
              id: service.id,
              service: service.service,
              package: service.package,
              cost: service.cost / 10,
            })
        );
      }
      state.value.addOnServices =newUpdate;
    },

    selectedAddOns:(state, action)=>{
      state.value.searchResult=''
      state.value.searchResult=(action.payload)
    }
    },
});
export const { getIsYealy,selectedAddOns } = addOnSlice.actions;
export default addOnSlice.reducer;
