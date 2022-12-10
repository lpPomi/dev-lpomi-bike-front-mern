import Header from '../components/Header';
import Footer from '../components/Footer';
import TracTable from '../components/TracTable';
import DatePicker1 from '../components/DatePicker1';
import DatePicker2 from '../components/DatePicker2';

import FormCreateTrac from './FormCreateTrac';

import FormTmp from './FormTmp';


function Home() {
  return (
    <div className='container mx-auto mt-4'>

      {/*  <FormTmp /> */}
      {/*       <Header /> */}
      {/*  <TracTable /> */}
      {/*  <FormCreateTrac /> */}
      {/*       <TracTable />
      <DatePicker1 /> */}
      {/*   <DatePicker2 /> */}
      {/*      <Footer /> */}


      {/* flex */}
      <div className="flex justify-center items-start h-32 bg-gray-300">
        <div className="bg-blue-300 w-64 p-4 m-2">Col1</div>
        <div className="bg-blue-300 w-64 p-4 m-2">Col2</div>
        <div className="bg-blue-300 w-64 p-4 m-2">Col3</div>
      </div>

    </div>
  );
}

export default Home;;