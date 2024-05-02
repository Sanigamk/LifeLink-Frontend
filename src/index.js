import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navi} from './Navigation';
import { Adnav } from './Adnav';
import { Landing } from './Landing';
import { Loginn } from './Loginn';
import {BrowserRouter,Routes,Route, HashRouter} from 'react-router-dom'
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
import { Vwhosreqst } from './Hospital.jsx/Vwhosreqst';
import { Searchorgandnr } from './Hospital.jsx/Searchorgandnr';
import { Assignorgan } from './Hospital.jsx/Assignorgan';
import { Bloodrqsthos } from './Hospital.jsx/BloodRequestToHosp';
import { Assignrqst } from './Hospital.jsx/Assignrqst';
import { Managebloodrqsthos } from './Hospital.jsx/Managebloodrqsthos';
import { Myorgan } from './Hospital.jsx/Myorgan';
import { Mybloodrqst } from './Hospital.jsx/Mybloodrqst';
import { Mybloodrqstcollg } from './Hospital.jsx/Mybloodrqstcollg';
import Collegerqst from './Hospital.jsx/Collegrqst';
import { Blooddonorhist } from './Hospital.jsx/Blooddonorhist';
import { Vwblooddnrhist } from './Hospital.jsx/Vwblooddnrhist';
import { Hospitalbloodhist } from './Hospital.jsx/Hospitalbloodhist';
import { Vwreivdbloodhist } from './Hospital.jsx/Vwreivdbloodhist';
import { Sendcollgbloodhist } from './Hospital.jsx/Sendcollgbloodhist';
import { Recvdcollegehist } from './Hospital.jsx/Recvdcollegehist';
import { Recvdorganhist } from './Hospital.jsx/Recvdorganhist';
import { Vworganhist } from './Hospital.jsx/Vworganhist';
import { Sendorganhist } from './Hospital.jsx/Sendorganhist';
import { Sendorganrqsthist } from './Hospital.jsx/Sendorganrqsthist';
import { Updatepro } from './Hospital.jsx/Updateprofile';
import { Collgnav } from './College/Collnav';
import { Collegehomel } from './College/Collhome';
import { Footer } from './Footer';
import { Collgnav1 } from './College/Collnav1';
import { Reqstblood } from './College/Reqstblood';
import { Donorregister } from './Bdonor.jsx/Donorregister';
import { Collgregister } from './College/Collgregister';
import { Hosregister } from './Hospital.jsx/Hosregister';
import { Userregister } from './User/Userregister';
import { Vwbloodrqst } from './Bdonor.jsx/Vwbloodrqst';
import { Vwuserbloodrqst } from './Hospital.jsx/Vwuserbloodrqst';
import { Editcollg } from './College/Editcollg';
import { Vwcollgreq } from './College/Vwcollgreq';
import { Vworgandonation } from './Admin/Vworgandonation';
import { Viewrqsts} from './College/Vwhospitalrqst';
import OrganDonorForm from './Organdonor/Organdonorregister';
import { Organdonorhome } from './Organdonor/Organdonorhome';
import { Organnav } from './Organdonor/Organnav';
import { Vwhosptlrqstorgan } from './Organdonor/Vwhosptlrqstorgan';
import { Vwpagehosrqstorgn } from './Organdonor/Vwpagehosrqstorgn';
import { Vwupdateprofile } from './Organdonor/Vwupdateprofile';
import { Loginorgandonor } from './Loginorgandonor';
import { Loginnominie } from './Loginnominie';
import { Vieworgandonor } from './Admin/Vieworgandonor';
import { Manageorgandonr } from './Admin/Manageorgandonr';
import { Sendrequestorgandonors } from './Hospital.jsx/Sendrequestorgandonors';
import { Acceptedreq } from './Bdonor.jsx/Acceptedreqhist';
import { Detailpageaccpt } from './User/Detailpageaccpt';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddCategory } from './Admin/Addcategory';
import { Myorganstatus } from './Hospital.jsx/Myorganstatus';
import { Myorganstatusviewpage } from './Hospital.jsx/Myorganstatusviewpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Navi/>}>
          <Route index element={<Landing/>}></Route>
          <Route path='/donorregistration' element={<Donorregister/>}/> 
          <Route path='/collgregistration' element={<Collgregister/>}/>
          <Route path='/hospitalregistration' element={<Hosregister/>}/>
          <Route path='/userregistration' element={<Userregister/>}/>
          <Route path='/organdonorregistration' element={<OrganDonorForm/>}/>
          <Route path='/login' element={<Loginn/>}/>
          <Route path='/loginorgandonor' element={<Loginorgandonor/>}/>
          <Route path='/loginnominee' element={<Loginnominie/>}/>
        </Route>
       
         <Route path='/admin' element={<Adnav/>}>
          <Route index element={<Adhome/>}/>
          <Route path='adhospital' element={<Hospital/>}/>
          <Route path='managehosptl/:id' element={<Managehospital/>}/>
          <Route path='user' element={<User/>}/>
          <Route path='viewuser/:id' element={<Vwuser/>}/>
          <Route path='bloodonor' element={<Blooddonor/>}/>
          <Route path='viewblood/:id' element={<Vwblooddonor/>}/>
          <Route path='donations' element={<Donations/>}/>
          <Route path='hospitaldonation' element={<Hospitaldonation/>}/>
          <Route path='hospitalorgandonation' element={<Vworgandonation/>}/>
          <Route path='collegedonation' element={<Collegedonation/>}/>
          <Route path='college' element={<College/>}/>
          <Route path='managecollege/:id' element={<Vwcollege/>}/>
          <Route path='vieworgandonor' element={<Vieworgandonor/>}/>
          <Route path='Manageorgandonor/:id' element={<Manageorgandonr/>}/>
          <Route path='addcategory' element={<AddCategory/>}/>
          
        </Route>

        <Route path='/user' element={<UserNav/>}>
          <Route index element={<Userhome/>}/>
          <Route path='bloodreq' element={<Bloodreq/>}/>
          <Route path='viewhistory' element={<Vwhist/>}/>
          <Route path='viewprofile' element={<Vwprofile/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='detail/:id' element={<Detailpageaccpt/>}/>
        </Route>

        <Route path='/blooddonor' element={<Donav/>}>
          <Route index element={<Donorhome/>}/>
          <Route path='donorreq' element={<Donatereq/>}/>
          <Route path='donatehist' element={<Reqhist/>}/>
          <Route path='viewbloodrqst' element={<Vwbloodrqst/>}/>
          <Route path='acceptedreqhist' element={<Acceptedreq/>}/>
          <Route path='editpro' element={<Editpro/>}/>
        </Route>














        <Route path='/hospital' element={<Hosnav/>}>
        <Route index element={<Hospitalhome/>}/>
        <Route path='blddonorreq' element={<Blddonorreq/>}/>
        <Route path='managedonorrqst/:id' element={<Mngdonorreq/>}/>

        <Route path='organdonor' element={<Addorgandnr/>}/>
        <Route path='vworgandonor/:id' element={<Vworgandonor/>}/>
        {/* <Route path='addorgandonor' element={<Addorgandonor/>}/> */}
        <Route path='sendrequestorgandonors/:id' element={<Sendrequestorgandonors/>}/>

        <Route path='vieworganrqst' element={<Vwhosreqst/>}/>
        <Route path='vieworganpage/:id' element={<Assignrqst/>}/>
        <Route path='Searchorgan/:id' element={<Searchorgandnr/>}/>
        <Route path='assignorgan/:id' element={<Assignorgan/>}/>

        <Route path='bloodrequesthos' element={<Bloodrqsthos/>}/>
        <Route path='viewbloodrqsthos/:id' element={<Managebloodrqsthos/>}/>

        <Route path='myorganrqst' element={<Myorgan/>}/>
        <Route path='myorganreqststatus' element={<Myorganstatus/>}/>
        <Route path='myorganreqststatusviewpage/:id' element={<Myorganstatusviewpage/>}/>

        <Route path='mybloodrqst' element={<Mybloodrqst/>}/>
        <Route path='mycollegerqst' element={<Mybloodrqstcollg/>}/>
        <Route path='viewcollegerqst' element={<Collegerqst/>}/>
        <Route path='blooddonorhist' element={<Blooddonorhist/>}/>
        <Route path='viewblooddonorhist' element={<Vwblooddnrhist/>}/>
        <Route path='hospitalbloodhist' element={<Hospitalbloodhist/>}/>
        <Route path='receivedhosbloodrqst' element={<Vwreivdbloodhist/>}/>
        <Route path='sendcollegehist' element={<Sendcollgbloodhist/>}/>
        <Route path='recvdcollegehist' element={<Recvdcollegehist/>}/>
        <Route path='recvdorganrqst' element={<Recvdorganhist/>}/>
        <Route path='recvdorganhistpage/:id' element={<Vworganhist/>}/>
        <Route path='sendorganrqst' element={<Sendorganhist/>}/>
        <Route path='sendorganhistpage/:id' element={<Sendorganrqsthist/>}/>
        <Route path='editprofile' element={<Updatepro/>}/>
        <Route path='viewuserbloodrqst' element={<Vwuserbloodrqst/>}/>


        </Route>









        <Route path='/college1' element={<Collgnav1/>}/>

        <Route path='/college' element={<Collgnav/>}>
        <Route index element={<Collegehomel/>}/>
        <Route path='collegerqst' element={<Reqstblood/>}/>
        <Route path='viewcollgrqst' element={<Vwcollgreq/>}/>
        <Route path='viewhospitalrqst' element={<Viewrqsts/>}/>
        <Route path='editprofile' element={<Editcollg/>}/>
















        </Route>
        <Route path='/organdonor' element={<Organnav/>}>
          <Route index element={<Organdonorhome/>}/>
          <Route path='viewhospitalrequest' element={<Vwhosptlrqstorgan/>}/>
          <Route path='viewpagehospitalrequestorgan/:id' element={<Vwpagehosrqstorgn/>}/>
          <Route path='updateorganprofile' element={<Vwupdateprofile/>}/>
          </Route>

     </Routes>
     <ToastContainer />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
