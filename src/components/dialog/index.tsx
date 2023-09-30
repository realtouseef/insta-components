import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../button';
import { useOutsideClick } from '../../hooks';

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
            <div ref={ref} className="w-[400px] bg-white rounded-xl">
              {children}
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

export const DialogHeader = () => {
  return (
    <div>
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
      <div className="w-full h-px bg-black/20" />
    </div>
  );
};

export const DialogButtons = () => {
  type Fields = {
    id: number;
    text: string;
    icon: ReactNode;
  };
  const fields: Fields[] = [
    {
      id: 1,
      text: 'Mute',
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </>
      )
    },
    {
      id: 2,
      text: 'Restrict',
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </>
      )
    },
    {
      id: 3,
      text: 'Unfollow',
      icon: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </>
      )
    }
  ];
  return (
    <>
      {fields.map((field) => (
        <div
          key={field.id}
          className="flex items-center justify-between p-4 hover:bg-secondary_hover cursor-pointer first:hover:rounded-t-xl last:hover:rounded-b-xl"
        >
          <p className="text-sm">{field.text}</p>
          <span className="text-icon text-sm">{field.icon}</span>
        </div>
      ))}
    </>
  );
};
