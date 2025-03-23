import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, fetchAll } from "../redux/articles/operations";
import AddForm from "../Components/Forms/AddForm";
import EditForm from "../Components/Forms/EditForm";

const Dashboard = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  const [addForm, setAddForm] = useState(false);
  const [itemId, setitemId] = useState("");
  const [editForm, setEditForm] = useState(false);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const reversedArticles = articles.toReversed();

  const handleEditButton = (id) => {
    setEditForm(true);
    setitemId(id);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h2>Dashboard</h2>
        <button onClick={() => setAddForm(true)}>Додати</button>
        <ul>
          {articles &&
            reversedArticles.map((item) => (
              <li key={item._id}>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
                <button onClick={() => dispatch(deleteArticle(item._id))}>
                  Видалити
                </button>
                <button onClick={() => handleEditButton(item._id)}>
                  Редагувати
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div>
        {addForm && <AddForm collapseForm={setAddForm} />}
        {editForm && <EditForm id={itemId} collapseForm={setEditForm} />}
      </div>
    </div>
  );
};

export default Dashboard;
