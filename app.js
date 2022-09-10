import axios from "axios";
const getData = async (user_id) => {
  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );

  const { data: posts } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );
  const dataResult = [user, posts];
  return dataResult;
};
// console.log(getData(1));
export default getData;
