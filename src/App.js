import { AppContext } from './contexts/AppContext';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router';
import { Account } from './pages/Account';
import { MainLayout } from './layouts/MainLayout';


function App() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const pageNames = {
    '/': 'Dashboard',
    '/account': 'Account'
  }
  return (
    <AppContext.Provider value={{
      isSidebarOpened,
      setIsSidebarOpened,
      pageNames
    }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route exact path={''} element={<Home />} />
          <Route exact path={'account'} element={<Account />} />
        </Route>
      </Routes>
    </AppContext.Provider >
  );
}

export default App;
