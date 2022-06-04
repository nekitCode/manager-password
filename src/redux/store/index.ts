import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../reducer/cardList";
import passwordSlice from "../reducer/passwordSlice";

const store = configureStore({
  reducer: {
    addCard: cardSlice,
    addDataPassword: passwordSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
