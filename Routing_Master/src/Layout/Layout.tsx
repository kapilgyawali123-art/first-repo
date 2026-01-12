// import { Link , Outlet} from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import ContactPageIcon from "@mui/icons-material/ContactPage";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import SettingsIcon from "@mui/icons-material/Settings";
// function Layout() {
//   return (
//     <>
//       <nav>
//         <Link to="/home">
//           <HomeIcon />
//         </Link>{" "}
//         |{" "}
//         <Link to="/about">
//           <InfoIcon />
//         </Link>{" "}
//         |{" "}
//         <Link to="/contact">
//           <ContactPageIcon />
//         </Link>{" "}
//         |{" "}
//         <Link to="/profile">
//           <AccountCircleIcon />
//         </Link>
//         |{" "}
//         <Link to="/Setting">
//           <SettingsIcon />
//         </Link>
//       </nav>

//       <main>
//         <div>
//           <Outlet />
//         </div>
//       </main>
//     </>
//   );
// }
// export default Layout;

import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";

function Layout() {
  return (
    <>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/home" style={{ margin: "0 10px" }}>
          <HomeIcon />
        </Link>
        <Link to="/about" style={{ margin: "0 10px" }}>
          <InfoIcon />
        </Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>
          <ContactPageIcon />
        </Link>
        <Link to="/user" style={{ margin: "0 10px" }}>
          <PeopleIcon />
        </Link>
        <Link to="/user/${id}" style={{ margin: "0 10px" }}>
          <AccountCircleIcon />
        </Link>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet /> {/* This renders the nested pages */}
      </main>
    </>
  );
}

export default Layout;
