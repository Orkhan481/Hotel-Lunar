import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route, } from 'react-router-dom'; 
import NavbarFooter from './components/Navbar';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';




const RoomsSuites = React.lazy(()=>import("./components/RoomsSuites"))
const Facilities = React.lazy(()=>import("./components/Facilities"))
const Contact = React.lazy(()=>import("./components/Contact"))


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Suspense fallback={<div className='loader'></div>}>
    <NavbarFooter />
    <Routes>
       
       
       <Route path="/Hotel-Lunar/" element={<Home/>} />
      <Route path="/roomssuites/" element={<RoomsSuites/>}/>
      <Route path="/facilities/" element={<Facilities/>}/>
      <Route path="/contact/" element={<Contact/>}/>
      <Route path="/*" element={<ErrorPage/>}/>
      

      
    </Routes>
    <Footer/>
    </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
