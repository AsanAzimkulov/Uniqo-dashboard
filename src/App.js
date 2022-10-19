import { AppContext } from './contexts/AppContext';
import { useState } from 'react';
import { HomePage as Home } from './pages/Home';
import { Routes, Route } from 'react-router';
import { AccountPage as Account } from './pages/Account';
import { MainLayout } from './layouts/MainLayout';


import { install } from "resize-observer";

install();



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
