import Header from '../components/Header';
import Footer from '../components/Footer';
import TracTable from '../components/TracTable';
import DatePicker1 from '../components/DatePicker1';
import DatePicker2 from '../components/DatePicker2';

import FormCreateTrac from './FormCreateTrac';

import FormTmp from './FormTmp';


function Home() {
  return (
    <div>


      {/*  <FormTmp /> */}

      {/*     <FormCreateTrac /> */}
      <Header />

      {/*       <TracTable />
      <DatePicker1 /> */}

      <DatePicker2 />
      <Footer />
    </div>
  );
}

export default Home;