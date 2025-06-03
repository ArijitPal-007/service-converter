
import CvDetails from './component/cv-details/cvone/CvDetails.jsx'
import ServiceOne from './component/service/CvGemini/ServiceOne.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ShowCard from './component/handing-page/ShowCard.jsx'
import ServiceTwo from './component/service/DocumentClassification/ServiceTwo.jsx'
import ServiceThree from './component/service/CvChatgpt/ServiceThree.jsx'
import './App.css'
import Extraction from './component/service/DocumentExtraction/Extraction.jsx'
import Analyser from './component/service/DocumentAnalyser/Analyser.jsx'

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
  },
  {
    path:"/api/service4",
    element:<Extraction/>
  },
  {
    path:"/api/service5",
    element:<Analyser/>
  },
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
