import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'text',
  initialState: [],
  reducers: {
    addText(state, action) {
      state.push(action.payload);
    },
    removeText(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
    updateText(state, action) {
      const { id, updatedProperties } = action.payload;
      const textItem = state.find(item => item.id === id);
      if (textItem) {
        Object.assign(textItem, updatedProperties);
      }
    },
    updateTextColor(state, action) {
      const { id, color } = action.payload;
      const textItem = state.find(item => item.id === id);
      if (textItem) {
        textItem.fill = color;
      }
    },
    updateTextX(state, action) {
      const { id, X } = action.payload;
      const textItem = state.find(item => item.id === id);
      if (textItem) {
        textItem.x = X;
      }
    },
    updateTextY(state, action) {
      const { id, Y } = action.payload;
      const textItem = state.find(item => item.id === id);
      if (textItem) {
        textItem.y = Y;
      }
    },
    updateTexttext(state, action) {
      const { id, text } = action.payload;
      const textItem = state.find(item => item.id === id);
      if (textItem) {
        textItem.text = text;
      }
    },
    updateTextfontfontFamily(state, action) {
      const { id, fontFamily } = action.payload;
      const textItem = state.find(item => item.id === id);
      if (textItem) {
        textItem.fontFamily = fontFamily;
      }
    },
    updateTextfontSize(state, action) {
      const { id, fontSize } = action.payload;
      const textItem = state.find(item => item.id === id);
      if (textItem) {
        textItem.fontSize = fontSize;
      }
    },
    updateTextfontStyle(state, action) {
      const { id, fontStyle } = action.payload;
      const textItem = state.find(item => item.id === id);
      if (textItem) {
        textItem.fontStyle = fontStyle;
      }
    },
  },
});

export const { addText, removeText, updateText, updateTextColor,updateTextX,updateTextY,updateTextfontSize,updateTextfontStyle,updateTextfontfontFamily,updateTexttext } = textSlice.actions;
export default textSlice.reducer;
