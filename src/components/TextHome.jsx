
import { FcOk } from "react-icons/fc";

import { FcTodoList } from "react-icons/fc";



function TextHome() {



  return (
    <div className="w-full h-full text-white mx-6 mt-[70px] flex flex-col items-start">
      <div className="font-extrabold text-[80px] leading-[112px] w-[810px] h-[226px]">
        Bike Ride<span className="text-[#3480F1]"> Tracking</span> for you ...
      </div>

      <div className="w-[438px] h-[182px] text-[18px] leading-[150%] mt-8 text-white ">

        <p className="font-bold text-[#3480F1] ml-2 mb-5">Bike Ride Tracking is a platform that helps you to track your biking tours ... </p>

        <div className="flex justify-start">
          <span className="mt-1 ml-1" ><FcOk /></span>
          <span className="ml-2">The tours are displayed in a react table</span>
        </div>

        <div className="flex justify-start">
          <span className="mt-1 ml-1" ><FcOk /></span>
          <span className="ml-2">Frontend created with react</span>
        </div>

        <div className="flex justify-start">
          <span className="mt-1 ml-1" ><FcOk /></span>
          <span className="ml-2">Backend created with nodejs & express</span>
        </div>

        <div className="flex justify-start">
          <span className="mt-1 ml-1" ><FcOk /></span>
          <span className="ml-2">No-SQL: MongoDB</span>
        </div>

      </div>
    </div>

    /*     ### old
        <div className='w-full h-full text-white mx-6 mt-[60px] flex '>
          <div className='font-extrabold text-[80px] leading-[112px] w-[667px] h-[336px]'>
            Bike Ride<span className='text-[#3480F1]'>Tracking Database</span> for you
          </div>
        </div>  
    */
  );
}

export default TextHome;