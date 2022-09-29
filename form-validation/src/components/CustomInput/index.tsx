import { InputHTMLAttributes, forwardRef } from "react";
import { X, Check } from "phosphor-react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  id: string;
  errorMessage?: string;
}

export const CustomInput = forwardRef(
  (
    {
      title,
      id,
      errorMessage,
      "aria-invalid": ariaInvalid,
      ...rest
    }: CustomInputProps,
    ref: any
  ) => {
    return (
      <>
        <div className="flex flex-col mb-3 w-full">
          <label htmlFor={id} className="mb-2">
            {title}
          </label>

          <div className="relative">
            <input
              id={id}
              type="text"
              {...rest}
              autoComplete="none"
              aria-invalid={ariaInvalid}
              ref={ref}
              className="
                  h-10 px-3 rounded-md w-full bg-white/70 text-primary-500 placeholder:text-primary-500/40
                  focus:outline outline-2 outline-white/80 focus:border-2 border-solid border-primary-500 
                "
            />

            {errorMessage && (
              <span className="bg-primary-500 rounded-md px-3 py-0.5 absolute top-[110%] right-0 text-xs">
                {errorMessage}
              </span>
            )}

            {ariaInvalid === "true" && (
              <X
                weight="bold"
                className="text-primary-500 text-lg absolute top-1/2 right-3 -translate-y-1/2"
              />
            )}
            {/* 
            {ariaInvalid === "false" && (
              <Check
                weight="bold"
                className="text-success-500 text-lg absolute top-1/2 right-3 -translate-y-1/2"
              />
            )} */}
          </div>
        </div>
      </>
    );
  }
);
