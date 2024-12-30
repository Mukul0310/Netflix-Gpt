import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showgptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showgptSearch = !state.showgptSearch;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
