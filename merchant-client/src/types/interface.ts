export interface IModalProps {
  isOpen: boolean | undefined;
  closeModal: () => void;
  title?: string;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
}

export interface ISignIn {
  username: string;
  password: string;
}
