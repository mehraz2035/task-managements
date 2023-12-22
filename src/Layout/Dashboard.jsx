import {  NavLink, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
const Dashboard = () => {
  return (
    <div>
      {/* <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div> */}


<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-10 w-96 min-h-full bg-[#FFE5E5]  text-black" >
      {/* Sidebar content here */}
      <li>
      <div  className="avatar">
  <div className ="w-20 rounded ">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
  </div>
  <h1 className="ml-3 font-bold text-xl">User Name</h1>
</div>
      </li>
      <li className=""><NavLink to="/task">Manage</NavLink></li>
      <li className=""><NavLink to="/"><IoMdHome /> Go To Home </NavLink></li>
      
    </ul>
  
  </div>
</div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      
    </div>
  );
};

export default Dashboard;
