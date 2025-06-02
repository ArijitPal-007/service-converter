
import CvDetails from './component/cv-details/cvone/CvDetails.jsx'
import ServiceOne from './component/service/ServiceOne.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShowCard from './component/handing-page/ShowCard.jsx'
import ServiceTwo from './component/service/ServiceTwo.jsx'
import ServiceThree from './component/service/ServiceThree.jsx'
import './App.css'

const routes=[
  {
    path:"/",
    element:<ShowCard/>
  },
  {
    path:"/cv-details",
    element:<CvDetails/>
  },
  {
    path:"/api/service",
    element:<ServiceOne/>
  },
  {
    path:"/api/service2",
    element:<ServiceTwo/>
  },
  {
    path:"/api/service3",
    element:<ServiceThree/>
  }
]

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
