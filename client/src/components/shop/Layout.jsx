import { Outlet } from "react-router-dom";
import ShopHeader from "./Header";

const ShopLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* HEADER */}
      <ShopHeader />

      {/* MAIN-CONTENT */}
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default ShopLayout;