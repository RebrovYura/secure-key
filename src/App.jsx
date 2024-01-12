// import { Route, Routes } from 'react-router-dom';

// import { Home, Login, Registration, Storage } from './pages';
import RootLayout from './layouts/RootLayout';
import StyledButton from './ui/Button/Button';

const App = () => {
  return (
    <RootLayout>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/storage" element={<Storage />} />
      </Routes> */}
      <StyledButton text="Sign In" styles="btn-outline" />
      <StyledButton text="Sign Up" styles="btn-solid" />
    </RootLayout>
  );
};

export default App;
