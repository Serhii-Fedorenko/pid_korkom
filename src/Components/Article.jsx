import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <li className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <Link to={`/articles/${article._id}`} className="block p-4">
        <article>
          <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
          <p className="text-gray-700 mb-4">{article.text}</p>
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded"
            />
          )}
        </article>
      </Link>
    </li>
  );
};

export default Article;
