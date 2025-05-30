
import Aadhar from './component/aadhar/Aadhar.jsx'
import CvDetails from './component/first-cv/CvDetails.jsx'
import CvDetails2 from './component/second-cv/CvDetails2.jsx'
import Service from './component/service/Service'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ServiceOne from './component/services/ServiceOne.jsx'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ServiceOne/>}/>
          <Route path='/api/service/upload-cv' element={<Service/>}/>
          <Route path='/cv-details' element={<CvDetails/>}/>
          <Route path='/cv-details2' element={<CvDetails2/>}/>
          <Route path='/aadhar-details' element={<Aadhar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
