import axios from "../../utils/axios";

export const getAllTransections = async (
  filter = "",
  search = "",
  pageNumber = 1
) => {
  console.log(pageNumber);
  console.log(search, "search");
  let qFilter;
  let qsearch;
  if (filter) {
    qFilter = `type=${filter}`;
  } else {
    qFilter = "";
  }
  if (search !== "") {
    qsearch = `&q=${search}`;
  } else {
    qsearch = "";
  }
  const req = `/transactions?${qFilter}${qsearch}&_page=${pageNumber}&_limit=5`;
  console.log(req);
  const response = await axios.get(`/transactions?&_page=1&_limit=5`);
  console.log(await response.data);

  // console.log(response.headers["x-total-count"]);

  return response.data;
  // return {
  //   allTransection: response.data,
  //   totalPage: response.headers["x-total-count"],
  // };
};
