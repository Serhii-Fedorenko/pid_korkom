import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { toggleForm } from "../../redux/auth/slice";
import { toggleModal } from "../../redux/modal/slice";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    dispatch(toggleModal());
  };
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center">Вхід</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="email"
          placeholder="пошта"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        ></input>
        <input
          type="password"
          name="password"
          placeholder="пароль"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        ></input>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Увійти
        </button>
      </form>
      <button
        type="button"
        onClick={() => dispatch(toggleForm())}
        className="w-full text-sm text-blue-600 hover:underline mt-2"
      >
        Ще не зареєструвалися ?
      </button>
    </div>
  );
};

export default Login;
