"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import type { ISignIn } from "@/types/interface";
import useAuthContext from "@/provider/AuthProvider/useAuth";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { loginUser } = useAuthContext();

  const submitHandler = (data: ISignIn) => {
    loginUser(data);
    console.log("ds", data);
  };

  return (
    <main className="w-full flex">
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white  sm:px-0">
          <div className="">
            <div className="mt-5 space-y-2 text-center">
              <h3 className=" text-2xl font-bold sm:text-3xl">Login</h3>
              <div className="flex gap-2 justify-center">
                <p className="text-[#7450eb] text-2xl font-bold sm:text-3xl">
                  PayHabib
                </p>
                <p className="text-2xl font-bold sm:text-3xl">Account</p>
              </div>
            </div>
          </div>

          <form className="space-y-5">
            <Controller
              control={control}
              name="email"
              rules={{
                required: "*Email address is required.",
              }}
              render={({ field: { onChange, value, name } }) => (
                <div>
                  <label className="font-medium">Email Address</label>
                  <input
                    type="email"
                    name={name}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                    onChange={(_value) => onChange(_value)}
                    value={value}
                    placeholder="abc@gmail.com"
                  />
                </div>
              )}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{
                required: "*Password is required.",
                pattern: {
                  value: /^.{8,}$/,
                  message: "*Password must be at least 8 characters long",
                },
              }}
              render={({ field: { onChange, value, name } }) => (
                <div>
                  <label className="font-medium">User name</label>
                  <input
                    type="password"
                    name={name}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#7450eb] shadow-sm rounded-lg relative"
                    onChange={(_value) => onChange(_value)}
                    value={value}
                    placeholder="Enter at lesat 8+ characters"
                  />
                </div>
              )}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
            />
            <button
              onClick={handleSubmit(submitHandler)}
              className="w-full px-4 py-2 text-white font-medium bg-[#7450eb] hover:opacity-80 active:bg-blue-600 rounded-lg duration-150"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>

      <div className="relative flex-1 hidden items-center justify-center h-screen bg-[#7450eb] lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <div className="mt-10 space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Visual Payment Statistics
            </h3>
            <p className="text-gray-300">
              Create an account and get access to all features for 30-days, No
              credit card required.
            </p>
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="demo"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="demo"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="demo"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="demo"
              />
              <img
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="demo"
              />
              <p className="text-sm text-gray-400 font-medium translate-x-5">
                Join 5.000+ users
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(103, 147, 252, 0.2) 4.54%, rgba(121, 185, 249, 0.26) 34.2%, rgba(103, 147, 252, 0.1) 77.55%)",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
    </main>
  );
};

export default Login;
