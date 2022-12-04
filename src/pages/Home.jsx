import Header from '../components/Header';
import Footer from '../components/Footer';
import TracTable from '../components/TracTable';
import FormCreateTrac from './FormCreateTrac';

import FormTmp from './FormTmp';


function Home() {
  return (
    <div>


      {/*  <FormTmp /> */}

      {/*     <FormCreateTrac /> */}
      <Header />

      <TracTable />

      <Footer />
    </div>
  );
}

export default Home;