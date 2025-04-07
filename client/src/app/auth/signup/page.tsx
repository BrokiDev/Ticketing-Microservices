"use client"
import useRequest from '@/app/hooks/useRequest'
import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'


interface ISignUp {
    fName:string
    lName:string
    email:string
    password: string
}

const SignUpPage = () => {

    const [dataSignUp,setDataSignUp] = useState<ISignUp>({
        fName: '',
        lName: '',
        email: '',
        password: ""
    });
    const {errors,makeRequest} = useRequest({method:"post",URL:"/api/auth/signup",body:dataSignUp})
      // const [errors, setErrors] = useState([]);

    const handleChanges = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target

        setDataSignUp({...dataSignUp, [name]:value});
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        makeRequest();
    }
    


  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-700">
      <h1 className="text-3xl font-bold mb-4">Sign Up Page</h1>
      <form onSubmit={onSubmit} className="bg-black/45 p-6 rounded shadow-md w-96">

      <div className="mb-4">
          <label htmlFor="fName" className="block text-sm font-medium text-white">First Name</label>
          <input value={dataSignUp.fName} onChange={handleChanges} type="text" name="fName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>

        <div className="mb-4">
          <label htmlFor="lName" className="block text-sm font-medium text-white">Last Name</label>
          <input value={dataSignUp.lName} onChange={handleChanges} type="text" name="lName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
          <input value={dataSignUp.email} onChange={handleChanges} type="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
          <input value={dataSignUp.password} onChange={handleChanges} type="password" name="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Sign Up</button>

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
          already have a account, please {" "}
          <Link
            href="signin"
            className="hover:text-amber-50/15 text-blue-500/50"
          >
            signin here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage