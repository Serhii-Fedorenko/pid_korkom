const ArticlesList = ({ children }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </ul>
  );
};

export default ArticlesList;
