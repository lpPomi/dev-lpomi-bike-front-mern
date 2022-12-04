import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FormCreateTrac from '../pages/FormCreateTrac';
import NotFound from '../pages/NotFound';


function Router() {
  return (
    <div className="bg-neutral-600 min-h-screen flex ">
      <div className="px-10 container mx-20 my-5 mr-20 py-4 bg-blue-300">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='create' element={<FormCreateTrac />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </div>
    </div>
  );
}

export default Router;