import axios  from 'axios';
import React, { useEffect, useState } from 'react';

const OrganDonorForm = () => {
  const [drop, setdrop] = useState(false)
  const [drops, setdrops] = useState(false)
  const [datas,setDatas]=useState([''])
  const [data , setData]=useState('')

  const dropdown = () => {
    setdrop(!drop)
    setdrops(false) 
  }
  const dropdown1 = () => {
    setdrops(!drops)
  }
  const [organsBeforeDeath, setOrgansBeforeDeath] = useState({
    heart: false,
    liver: false,
    kidney: false,
    lung: false,
    pancreas: false,
  });

  const [organsAfterDeath, setOrgansAfterDeath] = useState({
    heart: false,
    liver: false,
    kidney: false,
    lung: false,
    pancreas: false,
    cornea: false,
    skin: false,
    bone: false,
    tissue: false,
  });

  const handleBeforeDeathChange = (organ) => {
    setOrgansBeforeDeath((prevOrgans) => ({
      ...prevOrgans,
      [organ]: !prevOrgans[organ],
    }));
  };

  const handleAfterDeathChange = (organ) => {
    setOrgansAfterDeath((prevOrgans) => ({
      ...prevOrgans,
      [organ]: !prevOrgans[organ],
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Log organs before and after death
    console.log('Organs Before Death:', organsBeforeDeath);
    console.log('Organs After Death:', organsAfterDeath);
  
    // Prepare form data
    const formData = new FormData();
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }
    // Append organs before death
    Object.keys(organsBeforeDeath).forEach((organ) => {
      formData.append(`organsBeforeDeath[${organ}]`, organsBeforeDeath[organ]);
    });
  
    // Append organs after death
    Object.keys(organsAfterDeath).forEach((organ) => {
      formData.append(`organsAfterDeath[${organ}]`, organsAfterDeath[organ]);
    });
  
    // Set user type
    formData.append('userType', 'organ');

      // Send form data to the server
      let response = await axios.post('http://localhost:5000/organdonor/registers', formData);
      console.log(response);
  
  };
  
  let handlefile = (event) => {
    console.log(event.target.files);
    setData({ ...data, [event.target.name]: event.target.files[0] })
    console.log(data);
  }
  useEffect(() => {
    let fetchdata = async () => {
        let response = await axios.get(`http://localhost:5000/blooddonor/vwhosdetail`)
        console.log(response.data)
        setDatas(response.data)

    }
    fetchdata()

  
  },[])
  

  const [catid,setcatid]=useState()
  const [hosdetail,sethosdetail]=useState([''])
  let handleDistrict=async(event)=>
  {
    console.log(event.target.value,'asdsdas');
      setcatid(event.target.value)
      let response=datas.filter(hos=>hos.district==event.target.value)
      // let response=await axios.get(`http://localhost:5000/organdonor/hosdistrict/${event.target.value}`)
      console.log(response);
      sethosdetail(response)
    }


    let handleChange=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
  }
  // let handleSubmit=async (event)=>{
  //     event.preventDefault()
  //     console.log(data);
  //    let response=await axios.post('http://localhost:5000/organdonor/registers',{...data,userId:id})
  //    console.log(response);
      
  // }

  console.log(hosdetail,'sasasas');


  return (
    <form onSubmit={handleSubmit} className="images2 p-4 mx-auto  flex w-[100%] justify-normal gap-80">
      <div className='w-[30%] flex justify-center gap-14'>
        <div>

        <div className=''>

          <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name :</label>
            <input onChange={handleChange} name="name" type="text" id="name" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com"  />
          </div>
          <div class="mb-5">
            <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age :</label>
            <input onChange={handleChange} name="age" type="number" id="age" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
            <input onChange={handleChange} name="email" type="email" id="place" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact:</label>
            <input onChange={handleChange} name="contact" type="number" id="place" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address :</label>
            <input onChange={handleChange} name="address" type="text" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth :</label>
            <input onChange={handleChange} name="dateofbirth" type="date" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
        </div>

          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adhar Number :</label>
            <input onChange={handleChange} name="adhaarnumber" type="number" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Signature :</label>
            <input onChange={handlefile} name="signature" type="file" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Healthcertificate :</label>
            <input onChange={handlefile} name="healthcertificate" type="file" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conformationcertificate :</label>
            <input onChange={handlefile} name="conformationcertificate" type="file" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          
          
        <div className='w-[70%]'>
        <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bloodgroup :</label>
            <input onChange={handleChange} name="bloodgroup" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height:</label>
            <input onChange={handleChange} name="height" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">weight :</label>
            <input onChange={handleChange} name="weight" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Districrt :</label>
            <select onChange={handleDistrict} name="district" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <option disabled value="">select</option>
        {datas.map((item)=>(
        <option value={item?.district}>{item?.district}</option>
        ))}
    </select>
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital :</label>
            <select onChange={handleChange} name="hospitalId" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <option disabled value="">select</option>
        {hosdetail.map((item)=>(
        <option value={item?._id}>{item.name}</option>
        ))}
    </select>
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Witness :</label>
            <input onChange={handleChange} name="nominie" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Witness contact :</label>
            <input onChange={handleChange} name="nominiecontact" type="number" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Witness relation :</label>
            <input onChange={handleChange} name="nominierelation" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password :</label>
            <input onChange={handleChange} name="password" type="password" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
          <div class="mb-5">
            <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conformpassword :</label>
            <input onChange={handleChange} name="conformpassword" type="password" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
          </div>
        </div>
      </div>
      <div>
      <button type="button" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={dropdown}>Donate Before death</button>
  
      <button type="button" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={dropdown1}>Donate After death</button>

      </div>
      </div>
      <div>


      {/* <h2 className="text-xl font-bold mb-4">Select Organs to Donate</h2> */}
      {drop &&
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Organs to Donate Before Death</h3>
        {Object.keys(organsBeforeDeath).map((organ) => (
          <label key={organ} className="block mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={organsBeforeDeath[organ]}
              onChange={() => handleBeforeDeathChange(organ)}
            />
            {organ}
          </label>
        ))}
       
      </div>
}


{drops &&
      <div>
        <h3 className="text-lg font-semibold mb-2">Organs to Donate After Death</h3>
        {Object.keys(organsAfterDeath).map((organ) => (
          <label key={organ} className="block mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={organsAfterDeath[organ]}
              onChange={() => handleAfterDeathChange(organ)}
            />
            {organ}
          </label>
          
        ))}
        <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Submit
      </button>
      </div>
}
      

      <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Submit
      </button>
      
</div>
    </form>
  );
};

export default OrganDonorForm;
