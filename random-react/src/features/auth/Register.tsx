import { useForm } from "react-hook-form";

interface RegisterFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

function Register() {
  const { register, handleSubmit } = useForm<RegisterFormInput>();

  function onSubmit(data: RegisterFormInput) {
    console.log(data);
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
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <div className="flex flex-col">
        <label>Confirm Password</label>
        <input
          className="border border-black"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-lg mt-4">
        Register
      </button>
    </form>
  );
}

export default Register;
