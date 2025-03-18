import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="ім'я"></input>
        <br />
        <input type="text" name="email" placeholder="пошта"></input>
        <br />
        <input type="password" name="password" placeholder="пароль"></input>
        <br />
        <button type="submit">Увійти</button>
      </form>
      <button type="button">Ще не зареєстрований ?</button>
    </>
  );
};

export default Register;
