import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Modal } from './components';
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
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Landing />} />
          {/* <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
