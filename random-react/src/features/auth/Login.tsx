import { useForm } from "react-hook-form";
import login from "../../services/login.js";

interface LoginFormInput {
  email: string;
  password: string;
}

function Login() {
  const { register, handleSubmit } = useForm<LoginFormInput>();

  function onSubmit(data: LoginFormInput) {
    console.log(data);
    login(data.email, data.password);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          className="border border-black"
          type="text"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col">
        <label>Password</label>
        <input
          className="border border-black"
          type="text"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-lg mt-4">
        Login
      </button>
    </form>
  );
}

export default Login;
