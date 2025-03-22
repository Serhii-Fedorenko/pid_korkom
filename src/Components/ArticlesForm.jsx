const ArticlesForm = ({ collapseForm }) => {
  return (
    <form
      style={{ display: "flex", flexDirection: "column", marginLeft: "100px" }}
    >
      <input type="text" />
      <textarea />
      <input type="file" />
      <button onClick={() => collapseForm()}>Додати</button>
    </form>
  );
};

export default ArticlesForm;
