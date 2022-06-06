import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coverage: [
    { id: 1, refund: 'TP', insurance: 'Assura', debtor: 'LAMal', reason: 'Disease' },
    { id: 2, refund: 'TG', insurance: 'Random', debtor: 'LAMal', reason: 'Disease' },
    { id: 3, refund: 'TG', insurance: 'Any', debtor: 'LAMal', reason: 'Disease' },
    { id: 4, refund: 'TP', insurance: 'Some', debtor: 'LAMal', reason: 'Disease' },
  ],
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    addCoverage(state, action) {
      state.coverage.push(action.payload);
    },
    removeCoverage(state, action) {
      state.coverage = state.coverage.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addCoverage, removeCoverage } = generalSlice.actions;
export default generalSlice.reducer;
