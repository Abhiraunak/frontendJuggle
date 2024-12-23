import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the Zod schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  image: z.string().url("Invalid URL"),
});

// Infer the TypeScript type for form data (optional)
type FormData = z.infer<typeof formSchema>;

function Forms({ handleFormSubmitData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="mt-10 flex justify-center gap-10">
      <form className="flex gap-10" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div>
          <input
            {...register("name")}
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
            type="text"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div>
          <input
            {...register("email")}
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
            type="text"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Image URL Input */}
        <div>
          <input
            {...register("image")}
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
            type="text"
            placeholder="Image URL"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>

        {/* Submit Button */}
        <input
          className="rounded-md px-5 py-2 bg-blue-500 text-white font-semibold"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Forms;
