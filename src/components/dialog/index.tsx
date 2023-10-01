import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../button';
import { useOutsideClick } from '../../hooks';

interface Fields {
  text: string;
  icon: ReactNode;
}

export const Dialog = ({
  open,
  children,
  close
}: {
  open: boolean;
  children: ReactNode;
  close: () => void;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, () => close());
  return (
    open &&
    createPortal(
      <div>
        <main className="absolute inset-0 bg-black/50" />
        <div className="fixed inset-0 transition-all duration-300">
          <div className="flex items-center justify-center h-screen">
            <div ref={ref} className="w-[400px] bg-white rounded-xl shadow-lg">
              {children}
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

const DialogHeader = ({
  children,
  close = true
}: {
  children: ReactNode;
  close?: boolean;
}) => {
  return (
    <>
      {close && (
        <div className="flex items-start justify-end m-4">
          <Button variant="link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
      )}
      <div className="my-4">{children}</div>
      <hr />
    </>
  );
};

const DialogBody = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="p-4">{children}</div>
    </>
  );
};

const DialogFooter = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="">
        <div className="[&>*]:py-4 [&>*]:border-t-[1px] [&>*]:w-full font-semibold">
          {children}
        </div>
        <Button
          variant="link"
          className="py-4 border-t-[1px] w-full font-semibold"
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

const DialogButtons = ({ fields }: { fields: Fields[] }) => {
  return (
    <>
      {fields.map((field) => (
        <div
          key={field.text}
          className="flex items-center justify-between p-4 hover:bg-secondary_hover cursor-pointer first:hover:rounded-t-xl last:hover:rounded-b-xl"
        >
          <p className="text-sm">{field.text}</p>
          <span className="text-icon text-sm">{field.icon}</span>
        </div>
      ))}
    </>
  );
};

Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;
Dialog.Body = DialogBody;
Dialog.Buttons = DialogButtons;
