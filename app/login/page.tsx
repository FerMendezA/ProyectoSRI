"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

type Form = { username: string; password: string };

export default function LoginPage() {
  const { register, handleSubmit } = useForm<Form>();
  const onSubmit = (data: Form) => {
    signIn("credentials", { ...data, redirect: true, callbackUrl: "/" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input {...register("username", { required: true })} placeholder="Usuario" className="w-full p-2 border bg-gray-900 text-gray-100" />
      <input {...register("password", { required: true })} type="password" placeholder="Contraseña" className="w-full p-2 border bg-gray-900 text-gray-100" />
      <button type="submit" className="w-full p-2 bg-blue-600 text-white">Entrar</button>
    </form>
  );
}