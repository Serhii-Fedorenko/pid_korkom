import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Article from "../Components/Article";
import ArticlesList from "../Components/ArticlesList";
import { fetchByCategory } from "../redux/articles/operations";
import { selectArticles } from "../redux/articles/selectors";

const WhiskyPage = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);

  useEffect(() => {
    dispatch(fetchByCategory("whisky"));
  }, [dispatch]);

  const reversedArticles = articles.toReversed();

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-6">Whisky page</h1>
      <ArticlesList>
        {articles &&
          reversedArticles.map((item) => (
            <Article key={item._id} article={item} />
          ))}
      </ArticlesList>
    </>
  );
};

export default WhiskyPage;
