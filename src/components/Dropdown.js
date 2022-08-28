// import '../assets/css/Dropdown.css';
// const Dropdown = ({ showDropdown, setShowDropdown, options }) => {
//   console.log(showDropdown);
//   return (
//     <div className="dropdown-container">
//       {options.map((option) => {
//         const { links } = option;
//         return (
//           <div key={option.id}>
//             <button
//               className="btn"
//               onClick={() => setShowDropdown(!showDropdown)}
//             >
//               {option.label}
//             </button>
//             <div
//               key={option.id}
//               className={
//                 showDropdown
//                   ? `dropdown-${option.id} show-dropdown`
//                   : 'dropdown'
//               }
//             >
//               {links?.map((link) => {
//                 return (
//                   <div key={link.id}>
//                     <button className="btn">{link.label}hi</button>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Dropdown;

//Boostrap
// import Dropdown from 'react-bootstrap/Dropdown';

// function BasicExample() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default BasicExample;
