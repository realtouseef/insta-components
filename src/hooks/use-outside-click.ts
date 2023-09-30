import { useEffect } from 'react';

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  cb: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, cb]);
};
