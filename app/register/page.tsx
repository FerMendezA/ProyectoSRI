"use client";
import { useForm } from "react-hook-form";

type Form = { name: string; username: string; password: string };

export default function RegisterPage() {
  const { register, handleSubmit } = useForm<Form>();
  const onSubmit = (data: Form) => {
    // Llamar endpoint /api/users para crear
    console.log("Register", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Registro</h1>
      <input {...register("name", { required: true })} placeholder="Nombre" className="w-full p-2 border" />
      <input {...register("username", { required: true })} placeholder="Usuario" className="w-full p-2 border" />
      <input {...register("password", { required: true })} type="password" placeholder="Contraseña" className="w-full p-2 border" />
      <button type="submit" className="w-full p-2 bg-green-600 text-white">Registrar</button>
    </form>
  );
}