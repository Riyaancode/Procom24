export interface IModalProps {
  isOpen: boolean | undefined;
  closeModal: () => void;
  title?: string;
}

export interface ISignUp {
  username: string;
  accountNumber: number;
  email: string;
  phoneNumber: number;
  password: string;
}

export interface ISignIn {
  username: string;
  password: string;
}
