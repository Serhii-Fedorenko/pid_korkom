import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <li>
      <Link to={`/articles/${article._id}`}>
        <article>
          <h3>{article.title}</h3>
          <p>{article.text}</p>
          {article.image && <img src={article.image} alt={article.title} />}
        </article>
      </Link>
    </li>
  );
};

export default Article;
