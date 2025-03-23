import { useDispatch, useSelector } from "react-redux";
import { editArticle } from "../../redux/articles/operations";

const EditForm = ({ id, collapseForm }) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      editArticle({
        id: id,
        credentials: {
          title: form.elements.title.value,
          text: form.elements.text.value,
        },
      })
    );
    form.reset();
    collapseForm();
  };

  const editedArticle = articles.find((item) => id === item._id);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", marginLeft: "100px" }}
    >
      <input type="text" name="title" defaultValue={editedArticle.title} />
      <textarea name="text" defaultValue={editedArticle.text} />
      <input type="file" />
      <button type="submit">Змінити</button>
      <button onClick={() => collapseForm()} type="button">
        Скасувати
      </button>
    </form>
  );
};

export default EditForm;
