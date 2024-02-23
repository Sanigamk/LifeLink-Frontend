import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navi} from './Navigation';
import { Adnav } from './Adnav';
import { Landing } from './Landing';
import { Loginn } from './Loginn';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Hospital } from './Admin/Hospital'; 
import './App.css'
import { Managehospital } from './Admin/Managehospital';
import { User } from './Admin/User';
import { Vwuser } from './Admin/Vwuser';
import { Blooddonor } from './Admin/Blooddonor';
import { Vwblooddonor } from './Admin/Vwblooddonor';
import { Donations } from './Admin/Donations';
import { Hospitaldonation } from './Admin/Hospitaldonation';
import { Collegedonation } from './Admin/Collegedonation';
import { College } from './Admin/College';
import { Vwcollege } from './Admin/Vwcollege';
import { Adhome } from './Admin/Adhome';
import { UserNav } from './User/Usernav';
import { Userhome } from './User/Userhome';
import { Bloodreq } from './User/Bloodreq';
import { Vwhist } from './User/Vwhist';
import { Vwprofile } from './User/Vwprofile';
import { Profile } from './User/Profile';
import { Donav } from './Bdonor.jsx/Donav';
import { Donorhome } from './Bdonor.jsx/Donorhome';
import { Donatereq } from './Bdonor.jsx/Donatereq';
import { Reqhist } from './Bdonor.jsx/Reqhist';
import { Editpro } from './Bdonor.jsx/Editpro';
import { Hosnav } from './Hospital.jsx/Hosnav';
import { Hospitalhome } from './Hospital.jsx/Hoshome';
import { Blddonorreq } from './Hospital.jsx/Blddonorreq';
import { Mngdonorreq } from './Hospital.jsx/Mngdonorreq';
import { Addorgandnr } from './Hospital.jsx/Addorgandnr';
import { Vworgandonor } from './Hospital.jsx/Vworgandonor';
import { Addorgandonor } from './Hospital.jsx/Addorgandonor';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Navi/>}>
          <Route index element={<Landing/>}></Route>
          <Route path='/login' element={<Loginn/>}/>
        </Route>
       
         <Route path='/admin' element={<Adnav/>}>
          <Route index element={<Adhome/>}/>
          <Route path='adhospital' element={<Hospital/>}/>
          <Route path='managehosptl' element={<Managehospital/>}/>
          <Route path='user' element={<User/>}/>
          <Route path='viewuser' element={<Vwuser/>}/>
          <Route path='bloodonor' element={<Blooddonor/>}/>
          <Route path='viewblood' element={<Vwblooddonor/>}/>
          <Route path='donations' element={<Donations/>}/>
          <Route path='hospitaldonation' element={<Hospitaldonation/>}/>
          <Route path='collegedonation' element={<Collegedonation/>}/>
          <Route path='college' element={<College/>}/>
          <Route path='managecollege' element={<Vwcollege/>}/>
        </Route>

        <Route path='/user' element={<UserNav/>}>
          <Route index element={<Userhome/>}/>
          <Route path='bloodreq' element={<Bloodreq/>}/>
          <Route path='viewhistory' element={<Vwhist/>}/>
          <Route path='viewprofile' element={<Vwprofile/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Route>

        <Route path='/blooddonor' element={<Donav/>}>
          <Route index element={<Donorhome/>}/>
          <Route path='donorreq' element={<Donatereq/>}/>
          <Route path='donatehist' element={<Reqhist/>}/>
          <Route path='editpro' element={<Editpro/>}/>
        </Route>

        <Route path='/hospital' element={<Hosnav/>}>
        <Route index element={<Hospitalhome/>}/>
        <Route path='blddonorreq' element={<Blddonorreq/>}/>
        <Route path='managedonorrqst' element={<Mngdonorreq/>}/>
        <Route path='organdonor' element={<Addorgandnr/>}/>
        <Route path='vworgandonor' element={<Vworgandonor/>}/>
        <Route path='addorgandonor' element={<Addorgandonor/>}/>


        </Route>

     </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
