import AppRoutes from './routes/app-routes'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
 
function App() {
  return (
     <BrowserRouter basename="/portfolio">
     <AppRoutes/>
     </BrowserRouter>
  )
}

export default App
