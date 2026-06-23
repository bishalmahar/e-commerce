import {HomePage} from './pages/HomePage.jsx'
import {Routes,Route} from 'react-router'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="check" element={<div>Bishal</div>} />
    </Routes>  
  )
}

export default App
