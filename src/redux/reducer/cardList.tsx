import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardActionType, ICard, ICardState } from "../../types/cards";

const initialState: ICardState = {
  cards: [],
  titleCard: "",
};

export const cardSlice = createSlice({
  name: CardActionType.ADD_CARD,
  initialState: initialState,
  reducers: {
    addCardItem: (state, action: PayloadAction<ICard>) => {
      state.cards.push(action.payload);
    },
    selectedItem: (state, action: PayloadAction<string>) => {
      state.titleCard = action.payload;
    },
  },
});

export const { addCardItem, selectedItem } = cardSlice.actions;
export default cardSlice.reducer;
