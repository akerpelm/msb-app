import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './util/ScrollToTop';
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
  Features,
  SharedLayout,
  About,
  Documentation,
  Contact,
  Register
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path="/features" element={<Features />} />
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
