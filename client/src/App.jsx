 AdityaGupta20871
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Sidebar from '../src/components/Sidebar'
import Navbar from './components/Navbar';
import CreateCampaign from './pages/CreateCampaign';
import Profile from './pages/Profile'
const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
=======
import React from 'react';
import { Route, Routes} from 'react-router-dom';

import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
const App = () =>{
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        Sidebar
 main
      </div>

      
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
AdityaGupta20871
        <Navbar />
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/profile" element={<Profile />}/>
          <Route path = "/create-campaign" element={<CreateCampaign />}/>
=======
        Navbar
        <Routes>
          <Route path = "/" element={<Home />}/>
 main
        </Routes>
      </div>
    </div>
  )
}

 AdityaGupta20871
export default App
=======
export default App
 main
