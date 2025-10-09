import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Getbook from './components/Getbook';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addbook from './components/Addbook';
import Mpesapayment from './components/Mpesapayment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <Navbar />
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Getbook />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addbook" element={<Addbook />} />
        <Route path="/mpesapayment" element={<Mpesapayment />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App