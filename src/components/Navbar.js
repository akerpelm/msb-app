// import { useState } from 'react';
// import { Dropdown } from '.';
// // import { useAppContext } from '../context/appContext';
// // import Wrapper from '../assets/wrappers/Navbar';
// import '../assets/css/Navbar.css';
// // import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
// import Logo from './Logo';
// const Navbar = () => {
//   // const { toggleSidebar, logoutCurrentUser, user } = useAppContext();

//   const [showDropdown, setShowDropdown] = useState(false);
//   console.log(showDropdown);
//   const dropdownOptions = [
//     {
//       id: 1,
//       label: 'Dropdown 1',
//       links: [
//         {
//           id: 1,
//           label: 'Nav 1'
//         },
//         { id: 2, label: 'Nav 2' }
//       ]
//     },
//     { id: 2, label: 'Dropdown 2', links: [{ label: 'Nav 2' }] }
//   ];
//   return (
//     <nav>
//       <div className="nav-center">
//         {/* <button className="toggle-btn"></button> */}
//         {/* <div> */}
//         <Logo />
//         {/* </div> */}
//         <div className="btn-container">
//           {/* <Dropdown
//             options={dropdownOptions}
//             showDropdown={showDropdown}
//             setShowDropdown={setShowDropdown}
//           /> */}
//           {/* <button className="btn">Dropdown 1</button>
//           <button className="btn">Dropdown 1</button>
//           <button className="btn">Dropdown 1</button>
//           <button className="btn">Dropdown 1</button> */}
//         </div>
//         <div className="link-container">
//           <button className="btn">Solutions</button>
//           <button className="btn">About Us</button>
//           <button className="btn">Documentation</button>
//           <button className="btn">Contact Us</button>
//           <button className="btn">Blog</button>
//         </div>
//       </div>
//       {/* <div className="nav-center">
//         <button>Test</button>
//         <button className="toggle-btn" onClick={toggleSidebar}>
//           <FaAlignLeft />
//         </button>
//         <div>
//           <Logo />
//         </div>
//         <div className="btn-container">
//           <button className="btn" onClick={() => setShowLogout(!showLogout)}>
//             Test 1
//             <FaUserCircle />
//             {user?.name}
//             <FaCaretDown />
//           </button>
//           <button className="btn" onClick={() => setShowLogout(!showLogout)}>
//             Test 1
//             <FaUserCircle />
//             {user?.name}
//             <FaCaretDown />
//           </button>
//           <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
//             <button
//               type="button"
//               className="dropdown-btn"
//               onClick={logoutCurrentUser}
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div> */}
//     </nav>
//   );
// };
// export default Navbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;
