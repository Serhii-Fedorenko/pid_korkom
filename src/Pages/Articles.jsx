import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../redux/articles/operations";
import { selectArticles } from "../redux/articles/selectors";
import Article from "../Components/Article";

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const reversedArticles = articles.toReversed();

  return (
    <>
      <h1>Articles page</h1>
      <ul>
        {articles &&
          reversedArticles.map((item) => (
            <Article key={item._id} article={item} />
          ))}
      </ul>
    </>
  );
};

export default Articles;
