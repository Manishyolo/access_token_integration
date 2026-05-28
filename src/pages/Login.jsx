// Login.jsx

import React from "react";
import UseAuth from "../hooks/UseAuth";


const Login = () => {

    const {register,handleSubmit,errors,onLogin} = UseAuth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onLogin)}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;