"use client";

import { useEffect, useState } from "react";

import { AuthContext } from "./context";
import { ISignIn, ISignUp, IUser } from "@/types/interface";
import { instance } from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

interface PROPS {
  children: React.ReactNode;
}

const AuthProvider: React.FC<PROPS> = ({ children }) => {
  const router = useRouter();
  const cookieStore = useCookies();

  const [user, setUser] = useState<IUser>({
    userName: "",
    accountNo: "",
    email: "",
    phoneNo: "",
    password: "",
    orders: [],
  });

  const getUser = () => {
    try {
      const res = cookieStore.get("auth-token");
      console.log(JSON.parse(res!));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const registerUser = async (user: ISignUp) => {
    try {
      const res = await instance.post("/auth/signup", user);

      if (res?.data) {
        setUser(res?.data);
        router.push("/signin");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const loginUser = async (cred: ISignIn) => {
    try {
      const res = await instance.post("/auth/login", cred);

      if (res?.data) {
        setUser(res?.data);
        console.log("res?.data", res?.data);
        cookieStore.set("auth-token", JSON.stringify(res?.data));
        router.push("/home");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const contextValue = {
    user,
    setUser,
    registerUser,
    loginUser,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
