import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route, } from 'react-router-dom'; 
import NavbarFooter from './components/NavbarFooter';
import Home from './components/Home';




const RoomsSuites = React.lazy(()=>import("./components/RoomsSuites"))
const Facilities = React.lazy(()=>import("./components/Facilities"))
const Contact = React.lazy(()=>import("./components/Contact"))


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Suspense fallback={<div className='loader'></div>}>

    <Routes>
       <Route path="/*" element={<NavbarFooter />} > 
       
       <Route path="/" element={<Home/>} />
      <Route path="roomssuites" element={<RoomsSuites/>}/>
      <Route path="facilities" element={<Facilities/>}/>
      <Route path="contact" element={<Contact/>}/>
      

       </Route>
    </Routes>

    </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
