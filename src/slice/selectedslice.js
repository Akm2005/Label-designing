import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
  name: 'selectedSlice',
  initialState: null,
  reducers: {
    setSelected(state, action) {
      return action.payload; // Return the new selected ID
    },
    removeSelected(state) {
      return null; // Reset selected ID
    }
  }
});

export const { setSelected, removeSelected } = selectedSlice.actions;
export default selectedSlice.reducer;
