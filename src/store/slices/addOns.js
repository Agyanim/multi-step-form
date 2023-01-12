import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { boolean } from "yup";
import addOnsDetails from "../../utils/addOnsDetail";

const addOnServices = addOnsDetails;
// const isYearly  = useSelector((store) => store.value.isYearly);
const addOnSlice = createSlice({
  name: "addOns",
  initialState: {
    value: {
      addOnServices,
      searchResult: "",
      isYearly: "",
    },
  },
  reducers: {
    getIsYealy: (state, action) => {
      state.value.isYearly = action.payload;
    },
    updateAddOns: (state, action) => {
      let { addOnServices, isYearly, searchResult } = state.value;
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
      addOnServices = newUpdate;
    },
  },
});
export const { updateAddOns, getIsYealy } = addOnSlice.actions;
export default addOnSlice.reducer;
