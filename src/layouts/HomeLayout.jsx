import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default HomeLayout;
