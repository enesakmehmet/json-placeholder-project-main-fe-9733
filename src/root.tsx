import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";

function RootLayout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}

export default RootLayout;
