
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from '../components/Header';
import Footer from '../components/Footer';

// to use shema validation from yup. Use { .. } because is an export
import { createTracSchema } from '../validations/CreateTracValidation';


// to implement the datepicker 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import moment from 'moment';



function FormCreateTrac() {

  // include the shema with the resolve function in the form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(createTracSchema),
  });

  // save all inputs from the form in the data object
  const onSubmit = (data) => {
    console.log(data);
  };

  /* return data to another component .. open */

  // to use the datepicker
  const [startDate, setStartDate] = useState(new Date());

  // show the selected date
  const showDate = (date) => {
    //console.log(date);
    console.log('Date: ', moment(date).format("DD-MM-yyyy"));

  };




  return (


    <div>
      <Header />
      <div className='mb-5 text-2xl flex justify-start '>
        Create Ride Tracking
      </div >

      <div className='mt-8 text-base '>
        <p className='mb-1'>track date</p>
        <br />
        <DatePicker className='bg-green-300'
          selected={startDate}
          onChange={showDate}
          //onChange={...register("tracDate")}
          dateFormat="dd-MM-yyyy"

        />

      </div>


      <div className='text-base flex justify-evenly '>
        <span className="mr-16 ml-4">KM</span><span className="mr-3 ml-3">Max vel</span><span className="ml-6">Average vel</span>
      </div >

      <form onSubmit={handleSubmit(onSubmit)}>


        <div className="flex justify-evenly py-4 bg-green-300  hover:shadow-red-500/40 md:shadow-xl md:shadow-red-300">
          {/* ************** KM TOTAL ************** */}
          {/*    <label htmlFor="kmTotal">Total km</label> */}
          <input className="px-3 py-2  w-16 mr-4 focus:outline-none rounded bg-gray-600 text-white" type="number" placeholder="km" {...register("kmTotal")} />


          {/* ************** MAX SPEED ************** */}
          {/*  <label htmlFor="maxSpeed">Max speed</label> */}
          <input className="px-3 py-2  w-16 mr-5 focus:outline-none rounded bg-gray-600 text-white" type="number" placeholder="max" {...register("maxSpeed")} />

          {/* ************** AVE SPEED ************** */}
          {/*  <label htmlFor="averSpeed">Average speed</label> */}
          <input className="px-3 py-2 w-16  ocus:outline-none rounded bg-gray-600 text-white" type="number" placeholder="ave" {...register("averSpeed")} />

        </div>
        <p className="text-sm text-red-500">{errors.kmTotal?.message}</p>
        <p className="text-sm text-red-500">{errors.maxSpeed?.message}</p>
        <p className="text-sm text-red-500">{errors.averSpeed?.message}</p>


        <div className='text-base flex mt-6 justify-evenly'>
          <span >Ride time (HH:MM)</span>
          <span >Weather</span>
          <span >Tour</span>
          <span >Problems</span>
        </div >

        <div className="flex py-4 bg-green-300  hover:shadow-red-500/40 md:shadow-xl md:shadow-red-300 justify-evenly">

          <div className="p-1 bg-gray-600 rounded ml-14">
            <input className="px-2 w-14 focus:outline-none rounded bg-gray-600 text-white" type="number" placeholder="h" {...register("rideHours")} />
            <span className="text-xl mr-2 text-white">:</span>
            <input className="px-2 w-14 focus:outline-none rounded bg-gray-600 text-white" type="number" placeholder="m" {...register("rideMin")} />
          </div>

          <select className="px-2 focus:outline-none rounded bg-gray-600 text-white" {...register("weather")}>
            <option value="sunny">sunny</option>
            <option value="foggy">foggy</option>
            <option value="cloudy">cloudy</option>
            <option value="clear">clear</option>
            <option value="windy">windy</option>
            <option value="rain">rain</option>
          </select>

          <select className="px-2 focus:outline-none rounded bg-gray-600 text-white" {...register("tourMode")}>
            <option value="city">city</option>
            <option value="region">region</option>
            <option value="hils">hils</option>
            <option value="mixed">mixed</option>
          </select>

          <select className="px-2 focus:outline-none rounded bg-gray-600 text-white" {...register("tourTrouble")}>
            <option value="no">no</option>
            <option value="flat">flat</option>
            <option value="accident">accident</option>
            <option value="nolights">nolights</option>
            <option value="cold">cold</option>

          </select>

        </div>
        <p className="text-sm text-red-500">{errors.rideHours?.message}</p>
        <p className="text-sm text-red-500">{errors.rideMin?.message}</p>



        {/* ************** SUBMIT  ************** */}
        <div className='text-base flex mt-6 justify-evenly'>
          <input className=" w-20 mt-7 mb-8 bg-indigo-600 hover:bg-indigo-500 px-3 py-2 rounded text-white focus:outline-none " type="submit" value="Save" />

        </div>
      </form >
      <Footer />
    </div >


  );
}

export default FormCreateTrac;;