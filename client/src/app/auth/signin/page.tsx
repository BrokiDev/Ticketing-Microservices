"use client";
import useRequest from "@/app/hooks/useRequest";
// import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface ISignIn {
  email: string;
  password: string;
}

const SignInPage = () => {
  const [data, setData] = useState<ISignIn>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const {errors,makeRequest} = useRequest({method:"post",URL:"/api/auth/signin",body:data})

  // const [errors, setErrors] = useState([]);

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    makeRequest()
    router.push("/");
  };



  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-700">
      <h1 className="text-3xl font-bold mb-4">Sign In Page</h1>
      <form
        onSubmit={onSubmit}
        className="bg-black/45 p-6 rounded shadow-md w-96"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            value={data.email}
            onChange={handleChanges}
            type="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white"
          >
            Password
          </label>
          <input
            value={data.password}
            onChange={handleChanges}
            type="password"
            name="password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>

      <div className="pt-2">
        {errors &&
          errors.map((item: { field: string; message: string }, i:number) => {
            return <div key={`Ind-${i}-Item`} className="p-4 bg-white/95">
                <ul>
                    <li className="text-red-600/65"> <strong>{item.field}</strong>: {item.message}</li>
                </ul>
            </div>;
          })}
        <p className="text-lg mt-6 ">
          dont have a account yet, please{" "}
          <Link href="signup" className="hover:text-amber-50/15 text-blue-500">
            register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
