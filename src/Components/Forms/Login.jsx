import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { toggleForm } from "../../redux/auth/slice";

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
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="пошта"></input>
        <br />
        <input type="password" name="password" placeholder="пароль"></input>
        <br />
        <button type="submit">Увійти</button>
      </form>
      <button type="button" onClick={() => dispatch(toggleForm())}>
        Ще не зареєструвалися ?
      </button>
    </>
  );
};

export default Login;
