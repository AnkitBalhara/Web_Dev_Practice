import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center sm:justify-between p-2 border-b-2 bg-gray-400 text-slate-800">
      <NavLink
        to="/"
        className="flex items-center h-12 px-6 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
      >
        Fitness Hunt
      </NavLink>

      {/* Menu for larger screens */}
      <nav className="hidden sm:flex justify-between items-center gap-6 font-bold font-serif mt-2 sm:mt-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline" // Active state
              : "hover:text-gray-500" // Default state
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/bmi"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline" // Active state
              : "hover:text-gray-500" // Default state
          }
        >
          BMI
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline" // Active state
              : "hover:text-gray-500" // Default state
          }
        >
          Health Report
        </NavLink>
      </nav>

      {/* Mobile menu */}
      <div className="sm:hidden mt-4 flex flex-col gap-2 w-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline" // Active state
              : "hover:text-gray-500" // Default state
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/bmi"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline" // Active state
              : "hover:text-gray-500" // Default state
          }
        >
          BMI
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold underline" // Active state
              : "hover:text-gray-500" // Default state
          }
        >
          Health Report
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;



// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div>
//       <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-400 text-slate-800 ">
//         <NavLink
//           to="/"
//           className="flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
//         >
//           Fitness Hunt
//         </NavLink>
//         <nav className="hidden sm:flex justify-between items-center gap-4 font-bold font-serif ">
//           <NavLink
//             to="/"
//             className={
//               ({ isActive }) =>
//                 isActive
//                   ? "text-blue-500 font-bold underline" // Active state
//                   : "hover:text-gray-500" // Default state
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/bmi"
//             className={
//               ({ isActive }) =>
//                 isActive
//                   ? "text-blue-500 font-bold underline" // Active state
//                   : "hover:text-gray-500" // Default state
//             }
//           >
//             BMI
//           </NavLink>
//           <NavLink
//             to="/visitors"
//             className={
//               ({ isActive }) =>
//                 isActive
//                   ? "text-blue-500 font-bold underline" // Active state
//                   : "hover:text-gray-500" // Default state
//             }
//           >
//             Visitors
//           </NavLink>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
