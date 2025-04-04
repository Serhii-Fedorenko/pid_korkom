import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <Link to={`/articles/${article._id}`}>
      <li>
        <h3>{article.title}</h3>
        <p>{article.text}</p>
        {article.image && <img src={article.image} alt={article.title} />}
      </li>
    </Link>
  );
};

export default Article;
