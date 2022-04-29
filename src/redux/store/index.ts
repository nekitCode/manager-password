import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../reducer/cardList";

const store = configureStore({
  reducer: {
    addCard: cardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
