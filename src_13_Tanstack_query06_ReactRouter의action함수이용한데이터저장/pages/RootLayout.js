import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <hr/>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}