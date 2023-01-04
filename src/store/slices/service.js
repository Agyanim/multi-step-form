import { createSlice } from "@reduxjs/toolkit";
import cardDetail from "../../utils/cardDetails";

const onlineService = cardDetail;

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    value: {
      onlineService,
      isMonthly: true,
    },
  },
  reducers: {
    toggleMonthly: (state) => {
      state.value.isMonthly = !state.value.isMonthly;
    },
    updateService: (state, action) => {
      const { id } = action.payload;
      if (state.value.isMonthly == false) {
        const onlineService = state.value.onlineService;
        const updateService = onlineService.map((value) => value.id === +id)
          ? (value = {
              id: value.id,
              plan: value.plan,
              price: value.price + 12,
              image: value.image,
            })
          : {
              id: value.id,
              plan: value.plan,
              price: value.price,
              image: value.image,
            };
            onlineService = updateService;
      }
    },
  },
});
export const { toggleMonthly, updateService } = serviceSlice.actions;
export default serviceSlice.reducer;
