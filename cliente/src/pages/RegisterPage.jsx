import { useForm } from "react-hook-form";
// import { soliRegistro } from "../api/auth.js";
import { useAuth } from "../context/AuthContext.jsx";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const { signUp, user } = useAuth();

  console.log(user);

  const onSubmit = handleSubmit(async (values) => {
    await signUp(values);
  });

  return (
    <main className="h-screen flex justify-center flex-col">
      <h1 className="text-center font-bold text-3xl">Register</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col mx-auto w-2/6 gap-3 justify-center mt-[5%]"
      >
        <input
          type="text"
          name="username"
          {...register("username", { required: true })}
          className="rounded p-1 border border-gray-300 focus:border-orange-500 focus:ring-blue-200 outline-none"
          placeholder="Usuario"
        />
        <input
          type="email"
          name="email"
          // id=""
          className="rounded p-1 border border-gray-300 focus:border-orange-500 focus:ring-blue-200 outline-none"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          // id=""
          className="rounded p-1 border border-gray-300 focus:border-orange-500 focus:ring-blue-200 outline-none"
          {...register("password", { required: true })}
          placeholder="Contraseña"
        />

        <button
          type="submit"
          className="bg-orange-400 p-2 rounded hover:bg-orange-600 font-bold"
        >
          Registrarse
        </button>
      </form>
    </main>
  );
};

export default RegisterPage;
