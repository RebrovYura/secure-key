import { Route, Routes } from 'react-router-dom';

import { Home, Login, Registration, Storage } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/storage" element={<Storage />} />
      </Routes>
    </>
  );
};

export default App;
