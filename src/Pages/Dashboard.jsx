import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, fetchAll } from "../redux/articles/operations";
import ArticlesForm from "../Components/ArticlesForm";

const Dashboard = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  const [articleForm, setArticleForm] = useState(false);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const reversedArticles = articles.toReversed();

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h2>Dashboard</h2>
        <button onClick={() => setArticleForm(true)}>Додати</button>
        <ul>
          {articles &&
            reversedArticles.map((item) => (
              <li key={item._id}>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
                <button onClick={() => dispatch(deleteArticle(item._id))}>
                  Видалити
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div>{articleForm && <ArticlesForm collapseForm={setArticleForm} />}</div>
    </div>
  );
};

export default Dashboard;
