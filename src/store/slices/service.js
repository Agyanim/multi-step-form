import { createSlice } from "@reduxjs/toolkit";
import cardDetail from "../../utils/cardDetails";

const onlineService = cardDetail;

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    value: {
      onlineService,
      isYearly: false,
      selectedService: {},
    },
  },
  reducers: {
    toggleMonthly: (state) => {
      state.value.isYearly = !state.value.isYearly;// toggle handler for the yearly and monthly subscription

// getting payload from slectPlan page (Id) to update or modify the selected plan
      let newUpdate = "";
      if (state.value.isYearly) {
        newUpdate = state.value.onlineService.map(

          (service) =>
            (service = {
              id: service.id,
              plan: service.plan,
              image: service.image,
              price: (service.price * 12),
            })
        );
      } else
        newUpdate = state.value.onlineService.map(
          (service) =>
            (service = {
              id: service.id,
              plan: service.plan,
              image: service.image,
              price: (service.price / 12),
            })
        );
      state.value.onlineService = newUpdate;
    },
// getting selected service from the addOns page
    getSelectedService: (state, action) => {
      const id = action.payload;
      let onlineService = state.value.onlineService;

      const findService = onlineService.find((service) => service.id == id);
      state.value.selectedService = findService;
    },

  },
});
export const { toggleMonthly, getSelectedService } = serviceSlice.actions;
export default serviceSlice.reducer;
