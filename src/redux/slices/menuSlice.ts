import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  selectedKey: string[];
}

const initialState: MenuState = {
  selectedKey: ["0"],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSelectedKey: (state, action: PayloadAction<string[]>) => {
      state.selectedKey = action.payload;
    },
  },
});

export const { setSelectedKey } = menuSlice.actions;
export default menuSlice.reducer;
