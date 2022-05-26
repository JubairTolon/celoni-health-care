import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import ServiceDeails from './Pages/ServiceDeails/ServiceDeails';
import NotFound from './Shared/404/NotFound';
import Contact from './Pages/Blogs/Contact';
import Blogs from './Pages/Blogs/Blogs';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services:serviceId' element={<ServiceDeails></ServiceDeails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
