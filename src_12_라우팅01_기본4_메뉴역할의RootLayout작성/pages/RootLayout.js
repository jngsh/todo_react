import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div>
        <Link to="/">Home</Link><br/>
        <Link to="/products">Products</Link><br/>
      </div>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}