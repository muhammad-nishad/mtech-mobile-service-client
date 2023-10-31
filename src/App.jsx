
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Sidebar />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
