
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
        {/*       <div className='flex justify-between text-white bg-zinc-900 px-1 py-1'>
          <img src={imgReact} className="ml-2 mt-2" alt="Logotipo" />
          <span className='mr-3 mt-1' >
            <strong>Bike Ride Tracking</strong>
          </span>
        </div> */}

        {/*  Menue  */}
        <nav >
          <div className='flex justify-between bg-zinc-900 ' >


            {/* part begin react icon */}
            <div className='text-white bg-zinc-900 px-1 py-1 '>
              <img src={imgReact} className="ml-2 mt-2" alt="Logotipo" />
            </div>


            {/* part end header buttons */}
            <div className="flex justify-end gap-5 items-start  pt-[12.6667px]  bg-zinc-900 h-14 ">
              <div className=" bg-green-500 text-sm px-2 py-1 rounded-sm  ">
                <NavLink to="/" end>Home</NavLink>
              </div>

              <div className="bg-green-500 text-sm px-2 py-1 rounded-sm  ">
                <NavLink to="/create">Create</NavLink>
              </div>

              <div className="bg-green-500 text-sm px-2 py-1 rounded-sm  ">
                <NavLink to="/list">List</NavLink>
              </div>

              <div>
                <button className="bg-green-500 text-sm px-2 py-1 mr-3 rounded-sm " onClick={refreshPage}>F5</button>
              </div>
            </div>


          </div>
        </nav>

      </div >
    </header >
  );
}

export default Header;;