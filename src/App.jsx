
import CvDetails from './component/cv-details/CvDetails.jsx'
import Service from './component/service/Service'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Service/>}/>
          <Route path='/cv-details' element={<CvDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
