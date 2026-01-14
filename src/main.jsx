
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import RouterComp from './route';








createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
   <RouterComp/>
    
  </BrowserRouter>

)
