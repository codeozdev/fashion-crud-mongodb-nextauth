"use client";

import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please fill in all fields");
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        return toast.error("Account doesn't exist");
      } else {
        router.refresh();
        router.push("/");
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <div className="w-full h-[calc(100vh-452px)] flex flex-col items-center">
      <form
        className="flex flex-col items-center justify-center h-full gap-3"
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>
        <div className="relative w-full space-y-3 select-none">
          <input
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="flex items-center">
          <button
            className="bg-primary text-white font-bold cursor-pointer px-6 py-2"
            type="submit"
          >
            Login
          </button>
        </div>
        <Link href={"/register"} className="mt-3 text-lg">
          Don{"'"}t have an account?{" "}
          <span className="underline"> Create One</span>
        </Link>
      </form>
    </div>
  );
}
