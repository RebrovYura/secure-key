import { Route, Routes } from 'react-router-dom';

import { Home, Login, Page404, Registration, Storage } from './pages';
import RootLayout from './components/layouts/RootLayout';

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/storage" element={<Storage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
