import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FormCreateTrac from '../pages/FormCreateTrac';
import TracTable from '../components/TracTable';


import TracTableModal from '../components/TracTableModal';
import TracTableNew from '../components/TracTableNew';

import FormUpdateTrac from '../pages/FormUpdateTrac';
//import ModalUpdate from '../components/ModalUpdate';

import NotFound from '../pages/NotFound';

{/* <div className="bg-neutral-600 min-h-screen flex "> */ }

/* min-h-0 , min-h-full , or min-h-screen  */

function Router() {
  return (
    <div >
      {/* <div className="px-10 mx-20 my-5 mr-20 py-4 bg-blue-300 min-h-screen"> */}
      <div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='create' element={<FormCreateTrac />} />
          <Route path='list' element={<TracTableModal />} />
          <Route path='update' element={<FormUpdateTrac />} />

          <Route path='*' element={<NotFound />} />
        </Routes>

      </div>
    </div>
  );
}

export default Router;