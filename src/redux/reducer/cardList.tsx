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
    addCardItem: (state: ICardState, action: PayloadAction<ICard>) => {
      state.cards.push(action.payload);
    },
    selectedItem: (state: ICardState, action: PayloadAction<string>) => {
      state.titleCard = action.payload;
    },

    deleteItem: (state: ICardState, action: PayloadAction<number>): any => {
      const index = state.cards.findIndex((todo) => todo.id === action.payload);
      state.cards.splice(index, 1);
    }
  },
});

export const {addCardItem, selectedItem, deleteItem} = cardSlice.actions;
export default cardSlice.reducer;
