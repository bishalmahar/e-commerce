import {HomePage} from './pages/HomePage.jsx'
import {CheckoutPage} from './pages/CheckoutPage.jsx'
import {Routes,Route} from 'react-router'
import {OrdersPage} from './pages/OrdersPage.jsx'
import {TrackingPage} from './pages/TrakingPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/Tracking" element={<TrackingPage />} />
    </Routes>  
  )
}

export default App
