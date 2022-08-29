import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Landing, Error, Register, ProtectedRoute } from './pages';
// import {
//   CreateJob,
//   ListJobs,
//   Profile,
//   SharedLayout,
//   Stats
// } from './pages/Dashboard';

import {
  Landing,
  Solutions,
  SharedLayout,
  About,
  Documentation,
  Contact,
  Register
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
