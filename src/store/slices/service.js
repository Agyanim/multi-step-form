import { createSlice } from "@reduxjs/toolkit";
import cardDetail from "../../utils/cardDetails";

const onlineService = cardDetail;

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    value: {
      onlineService,
      isYearly: false,
    },
  },
  reducers: {
    toggleMonthly: (state) => {
      state.value.isYearly = !state.value.isYearly;
      let newUpdate = "";
      if (state.value.isYearly) {
        newUpdate = state.value.onlineService.map(
          (service) =>
            (service = {
              id: service.id,
              plan: service.plan,
              image: service.image,
              price: service.price * 12,
            })
        );
      } else
        newUpdate = state.value.onlineService.map(
          (service) =>
            (service = {
              id: service.id,
              plan: service.plan,
              image: service.image,
              price: service.price / 12,
            })
        );
      state.value.onlineService = newUpdate;
    },

    updateService: (state, action) => {
      const id = action.payload;
      let onlineService = state.value.onlineService;

      const updateService = onlineService.map((service) =>
        service.id == id && state.value.isYearly == true
          ? (service = {
              id: service.id,
              plan: service.plan,
              price: service.price * 12,
              image: service.image,
            })
          : {
              id: service.id,
              plan: service.plan,
              price: service.price,
              image: service.image,
            }
      );
      state.value.onlineService = [...updateService];
    },
    updatePrice: (state) => {
      if (isYearly) {
        state.value.onlineService.forEach((service) =>
          console.log(service.price)
        );
      }
    },
  },
});
export const { toggleMonthly, updateService, updatePrice } =
  serviceSlice.actions;
export default serviceSlice.reducer;
