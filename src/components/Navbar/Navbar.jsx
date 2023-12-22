import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><Link to='/deshboard'>Deshboard</Link></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className="w-10 h-10" src="https://www.svgrepo.com/show/458926/subttasks-alt.svg" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 text-xl">
    <li><NavLink to='/'>Home</NavLink></li>
      <li><Link to='/deshboard'>Deshboard</Link></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            User Name
          </a>
        </li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
      </ul>
    </div>

  </div>
</div>
        </div>
    );
};

export default Navbar;