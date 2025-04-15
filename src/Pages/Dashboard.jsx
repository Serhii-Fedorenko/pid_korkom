import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, fetchAll } from "../redux/articles/operations";
import AddForm from "../Components/Forms/AddForm";
import EditForm from "../Components/Forms/EditForm";
import { selectArticles } from "../redux/articles/selectors";

const Dashboard = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
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
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="md:w-1/3 w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <button
            onClick={() => setAddForm(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
          >
            Додати
          </button>
        </div>
        <ul className="space-y-4">
          {articles &&
            reversedArticles.map((item) => (
              <li
                key={item._id}
                className="border rounded-lg p-4 shadow-sm bg-white"
              >
                <h5 className="text-lg font-bold mb-2">{item.title}</h5>
                <div className="flex gap-6 mt-4">
                  <button
                    onClick={() => dispatch(deleteArticle(item._id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Видалити
                  </button>
                  <button
                    onClick={() => handleEditButton(item._id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Редагувати
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="md:w-1/2 w-full">
        {addForm && <AddForm collapseForm={setAddForm} />}
        {editForm && <EditForm id={itemId} collapseForm={setEditForm} />}
      </div>
    </div>
  );
};

export default Dashboard;
