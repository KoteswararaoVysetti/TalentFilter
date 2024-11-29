import { createSlice } from "@reduxjs/toolkit";
export const resultsSlice = createSlice({
  name: "results",
  initialState: {
    value: {
      matching_score: 0,
      matched_skills: [],
      missed_skills: [],
      additional_skills: [],
    },
  },
  reducers: {
    updateResults: (state: any, action: any) => {
      state.value = { ...action.payload };
    },
  },
});
export const { updateResults } = resultsSlice.actions;
export default resultsSlice.reducer;
