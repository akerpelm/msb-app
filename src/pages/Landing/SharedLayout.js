import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import '../../assets/css/SharedLayout.scss';
import { Footer, Modal } from '../../components';

const SharedLayout = () => {
  return (
    <main className="dashboard">
      {/* <SmallSidebar />
      <LargeSidebar /> */}
      <Modal />
      <Navbar />
      <div className="dashboard-page">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default SharedLayout;
