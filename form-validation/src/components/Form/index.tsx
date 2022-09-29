import { FormEvent } from "react";
import { object, string, InferType } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomButton } from "../CustomButton";
import { CustomInput } from "../CustomInput";

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
    formState: { errors },
    register,
    getValues,
  } = useForm<SignUpProps>({
    resolver: yupResolver(schema),
  });

  function handleUserSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(getValues());
  }

  console.log(errors);

  return (
    <form
      action=""
      onSubmit={handleSubmit(() => handleUserSubmit)}
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
        <CustomInput
          title="Mobile"
          id="mobile"
          placeholder="+99 (99)99999-9999"
          {...register("mobile")}
          aria-invalid={errors.mobile ? "true" : "false"}
          errorMessage={errors.mobile?.message?.toString()}
        />

        <CustomInput
          title="Phone"
          id="phone"
          type="tel"
          placeholder="+99 (99)9999-9999"
          {...register("phone", {
            pattern: /^\+[0-9]{2}\s[0-9}]{4}-[0-9]{4}/i,
          })}
          aria-invalid={errors.phone ? "true" : "false"}
          errorMessage={errors.phone?.message?.toString()}
        />
      </div>

      <CustomButton title="SignUp" />
      <a href="#" className="underline underline-offset-2">
        Already have an account?
      </a>
    </form>
  );
}
