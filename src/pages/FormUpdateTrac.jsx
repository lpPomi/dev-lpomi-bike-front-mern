import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


// to use shema validation from yup. Use { .. } because is an export
import { reactFormSchema } from '../validations/FormUpdateValidation';


function FormUpdateTrac() {


  // include the shema with the resolve function in the form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(reactFormSchema),
  });


  const onSubmit = (data) => {
    console.log('Hi');
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>


      {/* input fields */}
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <p className="text-sm text-red-500">{errors.fullName?.message}</p>

      <input type="text" placeholder="Email..." {...register("email")} />
      <p className="text-sm text-red-500">{errors.email?.message}</p>

      <input type="number" placeholder="Age..." {...register("age")} />
      <p className="text-sm text-red-500">{errors.age?.message}</p>

      <input type="password" placeholder="Password..." {...register("password")} />
      <p className="text-sm text-red-500">{errors.password?.message}</p>

      <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
      <p className="text-sm text-red-500">{errors.confirmPassword?.message}</p>

      {/* submit field */}
      <input className="flex justify-start w-20 bg-indigo-600 hover:bg-indigo-500 px-3 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400" type="submit" value="Save" />

    </form>

  );
}

export default FormUpdateTrac;