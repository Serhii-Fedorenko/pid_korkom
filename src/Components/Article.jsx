const Article = ({ article }) => {
  return (
    <li>
      <h3>{article.title}</h3>
      <p>{article.text}</p>
    </li>
  );
};

export default Article;
