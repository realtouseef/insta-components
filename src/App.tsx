// import { Button } from './components';

import { Toast } from './components';

export default function App() {
  return (
    <main className="m-10 flex items-center justify-center">
      {/* <Button>open modal</Button> */}
      <Toast title="hi mom!" type="success" />
    </main>
  );
}
