import auth from "@brito/auth";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    auth.login();
    history.push("/protected");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/protected");
    }
  }, [history]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
