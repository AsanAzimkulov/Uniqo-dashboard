import { AppContext } from './contexts/AppContext';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router';
import { Account } from './pages/account';


function App() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(true);
  return (
    <AppContext.Provider value={{
      isSidebarOpened,
      setIsSidebarOpened
    }}>
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/account'} element={<Account />} />
      </Routes>
    </AppContext.Provider >
  );
}

export default App;
