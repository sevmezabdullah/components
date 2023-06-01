import { useState } from 'react';
import PaginationComp from './components/PaginationComp';
import 'semantic-ui-css/semantic.min.css';

function App() {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <PaginationComp
        activePage={activePage}
        setActivePage={setActivePage}
        totalPage={20}
      />
    </>
  );
}

export default App;
