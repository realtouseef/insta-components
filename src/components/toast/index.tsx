import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Options {
  mount: boolean;
  expand: boolean;
}

type Types = 'success' | 'error' | 'warning';

const STATES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning'
};

export const Toast = ({ title, type }: { title: string; type: Types }) => {
  const [options, setOptions] = useState<Options>({
    mount: false,
    expand: false
  });

  useEffect(() => {
    const mountId = setInterval(() => {
      setOptions((prev) => ({
        ...prev,
        mount: true
      }));
    }, 3000);
    const expandId = setInterval(() => {
      setOptions((prev) => ({
        ...prev,
        expand: true
      }));
    }, 4000);

    const removeIntervalId = setInterval(() => {
      setOptions({
        mount: false,
        expand: false
      });
    }, 7000);

    return () => {
      clearInterval(mountId);
      clearInterval(expandId);
      clearInterval(removeIntervalId);
    };
  }, []);

  const changeBg =
    type === STATES.SUCCESS
      ? 'bg-emerald-200'
      : type === STATES.ERROR
      ? 'bg-red-200'
      : type === STATES.WARNING
      ? 'bg-yellow-200'
      : 'bg-white';

  const changeText =
    type === STATES.SUCCESS
      ? 'text-emerald-700'
      : type === STATES.ERROR
      ? 'text-red-700'
      : type === STATES.WARNING
      ? 'text-yellow-700'
      : 'text-black';

  return createPortal(
    <>
      <div
        className={`
        ${changeBg}
        ${
          options.expand ? 'w-96' : 'w-20'
        } fixed top-5 right-0 h-20 rounded-full transition-all transform-gpu duration-500 ease-in-out ${
          options.mount ? '-translate-y-0' : '-translate-y-[200px]'
        }`}
      >
        {options.expand && (
          <div
            className={`flex items-center justify-center h-full font-bold text-xl ${changeText}`}
          >
            {title}
          </div>
        )}
      </div>
    </>,
    document.body
  );
};
