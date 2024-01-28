import { Route, Routes } from 'react-router-dom';
import { Home, Login, Page404, Registration, Storage } from './pages';
import RootLayout from './components/layouts/RootLayout';
import { AnimatePresence } from 'framer-motion';
import { StorageLink } from './pages/Storage/StorageLink';
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth';
import { useEffect } from 'react';
import axios from './axios';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <AnimatePresence
      initial={true}
      mode="wait"
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <RootLayout>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/storage/:id" element={<StorageLink />} />
        </Routes>
      </RootLayout>
    </AnimatePresence>
  );
};

export default App;
