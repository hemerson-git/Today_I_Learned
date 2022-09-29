import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  useImperativeHandle,
  useRef,
} from "react";
import { GoBack } from "../components/GoBack";

export function UseImperativeHandleExample() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit() {
    if (formRef.current) {
      formRef?.current.submit();
    }
  }

  return (
    <div>
      <GoBack />
      <Form ref={formRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

interface FormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

const Form = forwardRef((props: FormProps, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    if (inputRef.current) {
      alert(inputRef.current.value);
    }
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        submit: handleSubmit,
      };
    },
    []
  );

  return (
    <form action="" {...props}>
      <input type="text" ref={inputRef} />
    </form>
  );
});
