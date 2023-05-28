import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import { Outlet } from "react-router-dom";

const UserProfilLayout = () => {
  return (
    <div>
      <AppHeader />
      <main>
        Layout Profile
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default UserProfilLayout;
