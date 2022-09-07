import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTransections } from "./AllTransectionApi";

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
  editing: {},
};

// async thunks

export const getAllTransectionThunk = createAsyncThunk(
  "allTranscetion/getAllTransection",
  async ({ filter, search, pageNumber }) => {
    const transaction = await getAllTransections(filter, search, pageNumber);
    return transaction;
  }
);

// create slice
const getAllTransectionSlice = createSlice({
  name: "allTransection",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllTransection.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.totalPage = 0;
      })
      .addCase(getAllTransection.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = action.payload;
        // state.totalPage = action.payload.totalPage;
      })
      .addCase(getAllTransection.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.transactions = [];
      });
  },
});

export default getAllTransectionSlice.reducer;
