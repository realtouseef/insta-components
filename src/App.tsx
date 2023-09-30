import { useState } from 'react';
import { Button, Dialog } from './components';
import { DialogButtons, DialogHeader } from './components/dialog';

export default function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  return (
    <main className="m-10">
      <Button onClick={() => setOpen(true)}>open modal</Button>
      <Dialog open={open} close={handleClose}>
        <DialogHeader />
        <DialogButtons />
      </Dialog>
    </main>
  );
}
