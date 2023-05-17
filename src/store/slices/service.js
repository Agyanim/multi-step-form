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
      selector: 11,
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

    getSelectedService: (state, action) => {
      const id = action.payload;
      let onlineService = state.value.onlineService;

      const findService = onlineService.find((service) => service.id == id);
      state.value.selectedService = findService;
    },

    setSelector: (state, action) => {
      state.value.selector = action.payload;
    },
  },
});
export const { toggleMonthly, getSelectedService,setSelector } = serviceSlice.actions;
export default serviceSlice.reducer;
