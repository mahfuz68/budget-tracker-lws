import Form from "../components/Form";
import Layout from "../components/Layout";
import AllTransections from "../components/Transactions/AllTransections";

function viewAll() {
  return (
    <Layout>
      <Form />
      <AllTransections />
    </Layout>
  );
}

export default viewAll;
