import AppRoutes from './routes/app-routes'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
 
function App() {
  return (
     <BrowserRouter>
     <AppRoutes/>
     </BrowserRouter>
  )
}

export default App
