const Article = ({ article }) => {
  return (
    <li>
      <h3>{article.title}</h3>
      <p>{article.text}</p>
      {article.image && <img src={article.image} alt={article.title} />}
    </li>
  );
};

export default Article;
