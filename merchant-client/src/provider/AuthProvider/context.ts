import { ISignIn, ISignUp, IUser } from "@/types/interface";
import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

export const AuthContext = createContext<{
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  registerUser: (user: ISignUp) => Promise<void>;
  loginUser: (cred: ISignIn) => Promise<void>;
}>({
  user: {
    accountNo: "",
    email: "",
    orders: [],
    password: "",
    phoneNo: "",
    userName: "",
  },
  setUser: () => {},
  registerUser: async () => {},
  loginUser: async () => {},
});
