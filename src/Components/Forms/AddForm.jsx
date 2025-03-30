import { useState } from "react";
import { useDispatch } from "react-redux";
import { addArticle } from "../../redux/articles/operations";

const AddForm = ({ collapseForm }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData();
    formData.append("title", form.elements.title.value);
    formData.append("text", form.elements.text.value);
    if (image) {
      formData.append("image", image);
    }

    dispatch(addArticle(formData)); 

    form.reset();
    setImage(null);
    collapseForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", marginLeft: "100px" }}
    >
      <input type="text" name="title" />
      <textarea name="text" />
      <input
        type="file"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">Додати</button>
      <button onClick={() => collapseForm()} type="button">
        Закрити
      </button>
    </form>
  );
};

export default AddForm;
