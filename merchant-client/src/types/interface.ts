export interface IModalProps {
  isOpen: boolean | undefined;
  closeModal: () => void;
  title?: string;
}

export interface ISignUp {
  userName: string;
  accountNo: string;
  email: string;
  phoneNo: string;
  password: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export enum PaymentStatus {
  PENDING = "pending",
  SUCCEEDED = "succeeded",
  REJECTED = "rejected",
}

export interface IPayment {
  userName: string;
  email: string;
  paymentAmount: number;
  customerAccountNumber: string;
  merchantAccountNumber: string;
  bankName: string;
  paymentPurpose: string;
  status: PaymentStatus;
}

export interface IUser {
  userName: string;
  accountNo: string;
  email: string;
  phoneNo: string;
  password: string;
  orders: [];
}
