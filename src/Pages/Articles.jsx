import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../redux/articles/operations";

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  console.log(articles);
  return (
    <>
      <h1>Articles page</h1>
      <ul>
        {articles &&
          articles.map((item) => (
            <li key={item._id}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Articles;
