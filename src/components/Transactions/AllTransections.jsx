import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransectionThunk } from "../../features/AllTransection/getAllTransactionSlice";
// import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function AllTransections() {
  const dispatch = useDispatch();

  const { transactions, isLoading, isError } = useSelector(
    (state) => state.allTransection
  );

  const filter = "";
  const search = "";
  const pageNumber = 1;

  useEffect(() => {
    dispatch(getAllTransectionThunk({ filter, search, pageNumber }));
  }, [dispatch, filter, search, pageNumber]);

  const state = useSelector((state) => state);

  console.log(state);
  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError)
    content = <p className="error">There was an error occured</p>;

  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ));
  }

  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p>No transactions found!</p>;
  }

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
}
