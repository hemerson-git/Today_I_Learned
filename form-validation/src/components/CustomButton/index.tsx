import { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function CustomButton({ title, ...rest }: CustomButtonProps) {
  return (
    <button
      {...rest}
      className="
        bg-primary-700 flex items-center justify-center w-[320px] h-10 max-w-full mx-auto 
        rounded-md transition-colors hover:bg-primary-500 mt-8
      "
    >
      {title}
    </button>
  );
}
