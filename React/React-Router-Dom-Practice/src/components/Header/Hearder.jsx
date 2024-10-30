import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul style={{ listStyleType: "none", display: "flex", gap: "10px", backgroundColor:"gray",padding:"8px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


// import React from "react";

// function Hearder() {
//   return (
//     <div>
//       <ul>
//         <li>
//             Home</li>
//         <li>About</li>
//         <li>Contact</li>
//         <li>GitHub</li>
//       </ul>
//     </div>
//   );
// }

// export default Hearder;
