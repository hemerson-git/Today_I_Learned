import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { X } from "phosphor-react";

interface ModalProps {
  children?: ReactNode;
  title: string;
  description: string;
}

export function Modal({ children, title, description }: ModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 backdrop-blur-md bg-secondary-900/50" />

      <Dialog.Content
        className="
          fixed w-[560px] bg-secondary-900/70 backdrop-blur-md 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md px-8 pb-8 pt-4"
      >
        <div className="flex justify-between">
          <Dialog.Title>
            <h2 className="text-4xl text-success-300 font-bold mb-3">
              {title}
            </h2>
          </Dialog.Title>

          <Dialog.Close>
            <button>
              <X className="text-primary-500 text-2xl" weight="bold" />
            </button>
          </Dialog.Close>
        </div>

        <Dialog.Description>
          <p className="text-secondary-300">{description}</p>
        </Dialog.Description>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
