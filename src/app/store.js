import { configureStore } from "@reduxjs/toolkit";
import getAllTransactionSlice from "../features/AllTransection/getAllTransactionSlice";
import transactionReducer from "../features/transaction/transactionSlice";

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    allTransection: getAllTransactionSlice,
  },
});
