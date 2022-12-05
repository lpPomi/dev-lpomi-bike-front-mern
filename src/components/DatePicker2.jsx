

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// to use shema validation from yup. Use { .. } because is an export
import { createTracSchema } from '../validations/CreateTracValidation';

// to implement the datepicker 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import moment from 'moment';


function Datepicker2() {

  /* for the trac object */
  const [trac, setTrac] = useState([]);

  /* for the datepicker date */
  const [tracDate, setTracDate] = useState('');



  // include the shema with the resolve function in the form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(createTracSchema),
  });


  // set the startdate for the datepicker
  const [startDate, setStartDate] = useState(new Date());


  // save all inputs from the form in the tracObj object
  const onSubmit = (tracObj) => {
    //alert(JSON.stringify(tracObj));
    setTrac(tracObj);
    console.log('trac object from the form submit ', tracObj);

    // call the function saveTrac to add the datepicker value with the form append method
    // later save the tracObj with all fields in mongo DB 
    saveTrac(tracObj);
  };


  // show the selected date
  const convertStoreTracDate = (date) => {
    var dateConverted = '';
    //console.log(date);
    /* console.log('Date: ', moment(date).format("DD-MM-yyyy")); */
    console.log('Date: ', moment(date).format("DD-mm-yyyy"));
    dateConverted = moment(date).format("DD-mm-yyyy");
    setTracDate(dateConverted);
  };




  function saveTrac(trac) {
    console.log('Post Object ', trac);

    // to append the datepicker in the form fields
    const form = new FormData();

    // read all fields from the form (except datepicker)
    for (let key in trac) {
      form.append(key, trac[key]);
      //console.log('show the content of keys ', key, trac[key]);
    }
    // read the datepicker tracDate value and append it to the form
    form.append('datePicker', tracDate);

    // show all the form fields .. also with the datePicker field
    for (var key of form.entries()) {
      console.log('Form entries ', key[0] + " --> " + key[1]);
    }

    // now we can save the form into MongoDB!

  }




  return (

    <div>

      <div className='mb-5 text-2xl flex justify-start '>
        Create Ride Tracking
      </div >


      {/*  create datepicker to get the date in format dd:mm.yyyy
           the date will be append to the form later
      */}
      <div className='flex justify-center '>

        <div>
          <p className='mb-2'>Select the track date:</p>
          {/* datepicker */}
          <DatePicker className='bg-green-300 mb-9  hover:shadow-red-500/40 md:shadow-xl md:shadow-red-300'
            selected={startDate}
            dateFormat="dd-MM-yyyy"
            onChange={(date) => {
              setStartDate(date);
              setTracDate(moment(date).format("DD-MM-yyyy"));
            }}
          //onChange={convertStoreTracDate}
          />
        </div>
      </div>



      {/*       create the form to get the other fields */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className='text-base flex justify-evenly '>
          <span className="mr-16 ml-4">KM</span><span className="mr-3 ml-3">Max vel</span><span className="ml-6">Average vel</span>
        </div >

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

    </div >

  );
}

export default Datepicker2;