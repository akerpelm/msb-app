import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '../../assets/css/SharedLayout.scss';
import { Footer } from '../../components';

const SharedLayout = () => {
  return (
    <main className="dashboard">
      {/* <SmallSidebar />
      <LargeSidebar /> */}
      <div>
        <Navbar />
        <div className="dashboard-page">
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default SharedLayout;
