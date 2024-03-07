import { cn } from "@/lib/utils";
import { ErrorMessage } from "@hookform/error-message";

interface IInput extends React.ComponentPropsWithoutRef<"input"> {
  error?: { [x: string]: any } | undefined;
  label: string;
  contauinerClassName?: string;
}

export const Input: React.FC<IInput> = ({
  error,
  label,
  className = "",
  contauinerClassName = "",
  name,
  value,
  ...rest
}) => (
  <div className={cn(contauinerClassName)}>
    <label className="font-semibold">{label}</label>
    <input
      name={name}
      className={cn(
        "w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg",
        className
      )}
      {...rest}
    />
    <ErrorMessage
      errors={error}
      name={name!}
      render={({ message }) => <p className="text-red-500 mt-2">{message}</p>}
    />
  </div>
);
