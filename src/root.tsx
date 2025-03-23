import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";

function RootLayout() {
  return (
    <>
      <NavbarComponent />
      <AnimatePresence mode="wait">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default RootLayout;
