import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchById } from "../redux/articles/operations";
import {
  selectCurrentArticle,
  selectError,
  selectIsLoading,
} from "../redux/articles/selectors";

const ArticlePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector(selectCurrentArticle);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchById(id));
  }, [id, dispatch]);

  if (isLoading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <div>
      <article>
        <h1>{article?.title}</h1>
        <p>{article?.text}</p>
        {article?.image && <img src={article.image} alt={article.title} />}
      </article>
    </div>
  );
};

export default ArticlePage;
