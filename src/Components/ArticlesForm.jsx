import { useDispatch } from "react-redux";
import { addArticle } from "../redux/articles/operations";

const ArticlesForm = ({ collapseForm }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      addArticle({
        title: form.elements.title.value,
        text: form.elements.text.value,
      })
    );
    form.reset();
    collapseForm()
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", marginLeft: "100px" }}
    >
      <input type="text" name="title" />
      <textarea name="text" />
      <input type="file" />
      <button type="submit">Додати</button>
    </form>
  );
};

export default ArticlesForm;
