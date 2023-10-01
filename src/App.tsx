import { useState } from 'react';
import { Button, Dialog } from './components';

export default function App() {
  const [open, setOpen] = useState(false);
  const fields = [
    {
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
  const handleClose = () => setOpen(false);
  return (
    <main className="m-10">
      <Button onClick={() => setOpen(true)}>open modal</Button>
      <Dialog open={open} close={handleClose}>
        <Dialog.Header>
          <div className="w-20 h-20 bg-blue-300 mx-auto rounded-full" />
        </Dialog.Header>
        <Dialog.Body>
          <div>hello</div>
        </Dialog.Body>
        <Dialog.Buttons fields={fields} />
        <Dialog.Footer>
          <Button variant="link">Restrict Account</Button>
        </Dialog.Footer>
      </Dialog>
    </main>
  );
}
