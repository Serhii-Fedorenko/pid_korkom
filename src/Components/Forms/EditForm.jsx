import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editArticle } from "../../redux/articles/operations";
import { selectArticles } from "../../redux/articles/selectors";

const EditForm = ({ id, collapseForm }) => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();
    formData.append("title", form.elements.title.value);
    formData.append("text", form.elements.text.value);
    formData.append("category", form.elements.category.value);
    if (image) {
      formData.append("image", image);
    }

    dispatch(editArticle({ id, formData }));
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
      <select name="category">
        <option value="whisky">whisky</option>
        <option value="rum">rum</option>
        <option value="tequila">tequila</option>
        <option value="gin">gin</option>
        <option value="wine">wine</option>
        <option value="other">other</option>
      </select>
      <textarea name="text" defaultValue={editedArticle.text} />
      <input
        type="file"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">Змінити</button>
      <button onClick={() => collapseForm()} type="button">
        Скасувати
      </button>
    </form>
  );
};

export default EditForm;
