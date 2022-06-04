import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IValuesPassword, ISetDataPassword } from "../../types/typePassword";
import { CardActionType } from "../../types/cards";

const dataPassword: ISetDataPassword = {
  data: [],
};

export const passwordSlice = createSlice({
  name: CardActionType.ADD_DATA_PASSWORD,
  initialState: dataPassword,
  reducers: {
    addDataPassword: (
      state: ISetDataPassword,
      action: PayloadAction<IValuesPassword>
    ) => {
      state.data.push(action.payload);
    },
    deleteDataPassword: (
      state: ISetDataPassword,
      action: PayloadAction<number>
    ) => {
      if (state.data.length) {
        const index = state.data.findIndex(
          (data) => data.id === action.payload
        );
        state.data.splice(index, 1);
      }
    },
  },
});

export const { addDataPassword, deleteDataPassword } = passwordSlice.actions;
export default passwordSlice.reducer;
