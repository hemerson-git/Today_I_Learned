import * as Dialog from "@radix-ui/react-dialog";
import { object, string, InferType } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// COMPONENTS
import { CustomButton } from "../CustomButton";
import { CustomInput } from "../CustomInput";
import { CustomInputMask } from "../CustomInputMask";
import { Modal } from "../Modal";
import { useState } from "react";

// VALIDATION

const schema = object({
  name: string()
    .required("Digite o seu Nome")
    .min(2, "O nome deve ter pelo menos 2 caracteres!"),

  email: string()
    .email("Digite um email valido")
    .required("Digite o seu e-mail"),

  password: string()
    .min(8, "A senha deve conter pelo menos 8 dígitos")
    .required("Digite a sua senha"),

  passConfirmation: string().test(
    "pass-match",
    "As senhas devem ser iguais",
    function (value) {
      return this.parent.password === value;
    }
  ),

  mobile: string()
    .required("Digite o seu número")
    .matches(
      /^\+[0-9]{2}\s\([0-9]{2}\)[0-9]{4,5}\-[0-9]{4}/i,
      "Digite um número válido"
    ),

  phone: string().matches(/^\+[0-9]{2}\s\([0-9]{2}\)[0-9]{4,5}\-[0-9]{4}/i, {
    excludeEmptyString: true,
    message: "Digite um número válido",
  }),
});

interface SignUpProps extends InferType<typeof schema> {}

export function Form() {
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    register,
    getValues,
  } = useForm<SignUpProps>({
    resolver: yupResolver(schema),
  });

  const [fields, setFields] = useState({});

  function handleUserSubmit() {
    const { email, mobile, name, phone } = getValues();
    setFields((prevState) => ({
      ...prevState,
      email: email,
      mobile: mobile,
      name: name,
      phone: phone,
    }));

    console.log(fields);
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit(() => handleUserSubmit())}
      className="items-center flex flex-col"
    >
      <CustomInput
        title="Name"
        id="name"
        placeholder="Ex: Hemerson Oliveira"
        {...register("name")}
        aria-invalid={errors.name ? "true" : "false"}
        errorMessage={errors.name?.message?.toString()}
      />

      <CustomInput
        title="E-mail"
        id="email"
        placeholder="examples@example.com"
        {...register("email")}
        aria-invalid={errors.email ? "true" : "false"}
        errorMessage={errors.email?.message?.toString()}
      />

      <CustomInput
        title="Password"
        id="pass"
        placeholder="********"
        type="password"
        {...register("password")}
        aria-invalid={errors.password ? "true" : "false"}
        errorMessage={errors.password?.message?.toString()}
      />

      <CustomInput
        title="Password Confirmation"
        id="pass-confirmation"
        placeholder="********"
        type="password"
        {...register("passConfirmation")}
        aria-invalid={errors.passConfirmation ? "true" : "false"}
        errorMessage={errors.passConfirmation?.message?.toString()}
      />

      <div className="flex gap-4">
        <CustomInputMask
          title="Mobile"
          id="mobile"
          placeholder="+99 (99)99999-9999"
          {...register("mobile")}
          aria-invalid={errors.mobile ? "true" : "false"}
          errorMessage={errors.mobile?.message?.toString()}
          mask="+99 (99)99999-9999"
        />

        <CustomInputMask
          title="Phone"
          id="phone"
          type="tel"
          placeholder="+99 (99)9999-9999"
          {...register("phone", {
            pattern: /^\+[0-9]{2}\s[0-9}]{4}-[0-9]{4}/i,
          })}
          aria-invalid={errors.phone ? "true" : "false"}
          errorMessage={errors.phone?.message?.toString()}
          mask="+99 (99)9999-9999"
        />
      </div>

      <Dialog.Root>
        <Dialog.Trigger>
          <CustomButton title="SignUp" type="submit" />
        </Dialog.Trigger>

        {isSubmitSuccessful && (
          <Modal
            title="Success!!"
            description="Now you have access to everything on the platform"
          >
            <div className="flex flex-col text-center flex-1">
              {getValues().name && (
                <div className="flex mt-2 text-primary-500 gap-4">
                  <strong>Name:</strong>
                  <span>{getValues().name}</span>
                </div>
              )}

              {getValues().email && (
                <div className="flex mt-2 text-primary-500 gap-4">
                  <strong>E-mail:</strong>
                  <span>{getValues().email}</span>
                </div>
              )}

              {getValues().mobile && (
                <div className="flex mt-2 text-primary-500 gap-4">
                  <strong>Phone 1:</strong>
                  <span>{getValues().mobile}</span>
                </div>
              )}
            </div>
          </Modal>
        )}
      </Dialog.Root>
      <a href="#" className="underline underline-offset-2">
        Already have an account?
      </a>
    </form>
  );
}
