import AppRoutes from './routes/app-routes'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Loading from './pages/loading'

function App() {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  return (
     <BrowserRouter basename="/portfolio">
      {loading== true && <Loading/>}
      {loading== false && <AppRoutes/>}
     </BrowserRouter>
  )
}

export default App
