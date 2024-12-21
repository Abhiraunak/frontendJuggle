import { useForm } from "react-hook-form";

function Forms({ handleFormSubmitData }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="mt-10 flex justify-center gap-10">
      <form className="flex gap-10" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          {...register("email")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Email"
        />
        <input
          {...register("image")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Image URL"
        />
        <input
          className="rounded-md px-5 py-2 bg-blue-500 text-white font-semibold"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Forms;
