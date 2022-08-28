// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Landing, Error, Register, ProtectedRoute } from './pages';
// import {
//   CreateJob,
//   ListJobs,
//   Profile,
//   SharedLayout,
//   Stats
// } from './pages/Dashboard';

import { Landing, Solutions } from './pages';

function App() {
  return (
    <div>
      <Landing />
      <Solutions />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<ProtectedRoute>{/* <SharedLayout /> */}</ProtectedRoute>}
    //     >
    //       {/* <Route index element={<Stats />} />
    //       <Route path="add-job" element={<CreateJob />} />
    //       <Route path="jobs" element={<ListJobs />} />
    //       <Route path="profile" element={<Profile />} /> */}
    //     </Route>
    //     {/* <Route path="/register" element={<Register />} /> */}
    //     <Route path="/landing" element={<Landing />} />
    //     {/* <Route path="*" element={<Error />} /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
