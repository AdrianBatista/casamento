import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: {
    open: false,
    content: "",
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModalWitContent: (state, action) => {
      state.modal.open = true;
      state.modal.content = action.payload;
    },
    closeModal: (state) => {
      state.modal.open = false;
      state.modal.content = "";
    },
  },
});

export const { openModalWitContent, closeModal } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
