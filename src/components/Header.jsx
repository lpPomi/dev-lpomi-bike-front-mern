
import imgReact from '../assets/images/react.svg';
import { NavLink } from "react-router-dom";

function Header() {


  function refreshPage() {
    window.location.reload(false);
  }


  return (

    <header>
      <div >
        {/* Logo  */}
        <div className='flex justify-between  bg-zinc-800 text-white rounded-md shadow-md shadow-black px-1 py-2'>
          <img src={imgReact} className="app-logo" alt="Logotipo" />
          <span >
            <strong>Bike Ride Tracking</strong>
          </span>
        </div>

        {/*  Menue  */}
        <nav >
          <div className="flex justify-end gap-5 mt-2 bg-sky-300">
            <div className=" bg-green-500 text-sm px-2 py-1 rounded-sm shadow-md shadow-black">
              <NavLink to="/" end>Home</NavLink>
            </div>

            <div className="bg-green-500 text-sm px-2 py-1 rounded-sm shadow-md shadow-black">
              <NavLink to="/create">Create</NavLink>
            </div>

            <div className="bg-green-500 text-sm px-2 py-1 rounded-sm shadow-md shadow-black">
              <NavLink to="/list">List</NavLink>
            </div>


            <div>
              <button className="bg-green-500 text-sm px-2 py-1 rounded-sm shadow-md shadow-black" onClick={refreshPage}>F5</button>
            </div>

          </div>
        </nav>

      </div>
    </header>
  );
}

export default Header;