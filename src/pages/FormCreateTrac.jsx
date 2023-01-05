
import Header from '../components/Header';
import Footer from '../components/Footer';


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// to use shema validation from yup. Use { .. } because is an export
import { createTracSchema } from '../validations/FormCreateValidation';

// to implement the datepicker 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';


import { useNavigate } from 'react-router';



function FormCreateTrac() {


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
    //console.log('trac object from the form submit ', tracObj);

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

  const navigate = useNavigate();


  function saveTrac(trac) {


    //console.log('Trac Object ', trac);

    // to append the datepicker in the form fields
    const form = new FormData();
    //form;
    // read all fields from the form (except datepicker)
    for (let key in trac) {
      form.append(key, trac[key]);
      // console.log('show the content of keys ', key, trac[key]);
    }

    if (tracDate.length === 0) {
      //alert('Select Date');
      //console.log('no date selected');

      Swal.fire({
        icon: 'error',
        title: 'You don have select a date',
        confirmButtonText: 'go back',

      }).then((result) => {
        /* Read more about isConfirmed */

        if (result.isConfirmed) {
          Swal.fire('going back...', '', 'success');
          window.location.reload();
          navigate('/home');
        }

      });


    } else {
      /* 
      read the datepicker tracDate value and append it to the form
      the field for the date is tracDate */
      form.append('tracDate', tracDate);

      // show all the form fields .. also with the datePicker field
      for (var key of form.entries()) {
        console.log('Form entries ', key[0] + " --> " + key[1]);
      }

    }


    // now we can save the form into MongoDB!

  }


  return (


    /*  className="bg-img container bg-gray-400 mx-auto mt-4" */

    <div className="bg-img">

      <div className='flex flex-col items-start'>
        <div className=' mx-6 mt-2 font-extrabold text-[50px] ml-10 mb-8 text-white'>
          Create Ride Tracking
        </div >
      </div>

      {/*  create datepicker to get the date in format dd:mm.yyyy
       the date will be append to the form later
container mx-auto
bg-blue-400 
      */}

      <div className='flex justify-center'>

        <div className='flex justify-center w-[360px] h-[180px]' >

          <div >
            <p className='mb-2 text-center text-white '>Select the track date:</p>
            <DatePicker className='bg-transparent mb-9 hover:shadow-red-500/40 md:shadow-xl md:shadow-red-300 text-center'
              selected={startDate}
              dateFormat="dd-MM-yyyy"
              onChange={(date) => {
                setStartDate(date);
                setTracDate(moment(date).format("DD-MM-yyyy"));
              }}
            //onChange={convertStoreTracDate}
            />
          </div>
        </div >
      </div >


      {/*       create the form to get the other fields */}

      <div className='flex justify-center' >
        <div className='flex justify-center'  >

          <form onSubmit={handleSubmit(onSubmit)}>



            <div className='flex justify-between text-white w-[820px] font-medium text-[18px] '>
              <div>KM</div>
              <div>Max vel</div>
              <div>Ave vel</div>

            </div>



            <div className="flex justify-between py-4 mb-16">

              {/* ************** KM TOTAL ************** */}
              <input className="bg-transparent hover:shadow-red-500/40 md:shadow-xl md:shadow-red-300 px-3 py-2 w-16 focus:outline-none rounded text-white" type="number" placeholder="km" {...register("kmTotal")} />

              {/* ************** MAX SPEED ************** */}
              <input className="bg-transparent hover:shadow-red-500/40 md:shadow-xl md:shadow-red-300  px-3 py-2 w-16 focus:outline-none rounded b text-white" type="number" placeholder="mx" {...register("maxSpeed")} />

              {/* ************** AVE SPEED ************** */}
              <input className="bg-transparent  hover:shadow-red-500/40 md:shadow-xl md:shadow-red-300  px-3 py-2 w-16 focus:outline-none rounded  text-white" type="number" placeholder="ave" {...register("averSpeed")} />

            </div>


            <p className="text-sm text-red-500">{errors.kmTotal?.message}</p>
            <p className="text-sm text-red-500">{errors.maxSpeed?.message}</p>
            <p className="text-sm text-red-500">{errors.averSpeed?.message}</p>

            <div className='flex justify-between mt-6 text-white font-medium text-[18px] '>
              <div>Ride time</div>
              <div>Weather</div>
              <div>Tour</div>
              <div>Problems</div>
            </div >

            <div className="flex justify-between py-5  ">
              <div className="p-1 rounded">
                <input className="bg-transparent hover:shadow-red-500/40 md:shadow-xl md:shadow-red-300 px-2 w-14 focus:outline-none rounded  text-white" type="number" placeholder="h" {...register("rideHours")} />
                <span className="text-xl mr-2 text-white">:</span>
                <input className="bg-transparent hover:shadow-red-500/40 md:shadow-xl md:shadow-red-300 px-2 w-14 focus:outline-none rounded  text-white" type="number" placeholder="m" {...register("rideMin")} />
              </div>

              {/* ************** Weather ************** */}
              <select className="bg-transparent px-2 focus:outline-none rounded text-white  hover:bg-[#645858]   " {...register("weather")}>
                <option value="sunny">sunny</option>
                <option value="foggy">foggy</option>
                <option value="cloudy">cloudy</option>
                <option value="clear">clear</option>
                <option value="windy">windy</option>
                <option value="rain">rain</option>
              </select>

              {/* ************** Tour Mode ************** */}
              <select className="bg-transparent  px-2 focus:outline-none rounded  text-white hover:bg-[#645858]" {...register("tourMode")}>
                <option value="city">city</option>
                <option value="region">region</option>
                <option value="hils">hils</option>
                <option value="mixed">mixed</option>
              </select>

              {/* ************** Tour Trouble ************** */}
              <select className="bg-transparent px-2 focus:outline-none rounded  text-white hover:bg-[#645858]" {...register("tourTrouble")}>
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
            <div className='flex mt-6 justify-center'>
              <input className="border-[#3480F1] border-[1px] rounded-[9px]  w-20 mt-7 mb-8 bg-transparent  hover:bg-[#d9d9d944]   px-3 py-2  text-white focus:outline-none " type="submit" value="Save" />
            </div>

          </form >
        </div >
      </div >
    </div >
  );
}

export default FormCreateTrac;