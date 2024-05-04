import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const OrganDonorForm = () => {

  const [drop, setdrop] = useState(false)
  const [drops, setdrops] = useState(false)
  const [datas, setDatas] = useState([''])
  const [data, setData] = useState('')

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
    if (data.Conformpassword != data.password) {
      toast.error('password doesnt match')
    }
    else {

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
      // formData.append('name', data.name);
      // formData.append('age', data.age);
      // formData.append('address', data.address);
      // formData.append('email', data.email);
      // formData.append('adhaarnumber', data.adhaarnumber);
      // formData.append('bloodgroup', data.bloodgroup);
      // formData.append('weight', data.weight);
      // formData.append('height', data.height);
      // formData.append('contact', data.contact);
      // formData.append('signature',data.signature);
      // formData.append('reasonofdeath',data.reasonofdeath);
      // formData.append('dateofdeath',data.dateofdeath);
      // formData.append('dateofbirth',data.dateofbirth);
      // formData.append('hospitalId',data.hospitalId);
      // formData.append('nominie',data.nominie);
      // formData.append('nominiecontact',data.nominiecontct);
      // formData.append('nominierelation',data.nominierelation);
      // formData.append('nominiepassword',data.nominiepassword);
      // formData.append('password', data.password);
      // formData.append('conformationcertificate', data.conformationcertificate);
      // formData.append('heathcertificate', data.heathcertificate);
      formData.append('userType', 'organ');

      // Send form data to the server
      let response = await axios.post('http://localhost:5000/organdonor/registers', formData);
      console.log(response);
    }
    const requiredFields = ['name', 'age', 'address', 'email', 'contact', 'dateofbirth', 'adhaarnumber', 'hospitalId', 'signature', 'healthcertificate', 'bloodgroup', 'height', 'weight', 'password', 'nominie', 'nominiecontact', 'nominierelation', 'nominiepassword', 'conformationcertificate'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return toast.error(`${field} is required`);
      }
    }
    setData(data)
    toast.success("successfully registered")
    console.log(data);
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


  }, [])

  let [categories, setcategories] = useState([])
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`http://localhost:5000/organdonor/viewcategory`)
      console.log(response.data)
      const filteredCategories = response.data.filter(category => category.beforedeathorgans || category.afterdeathorgans);
      setcategories(filteredCategories);
    }
    fetchdata()

  }, [])


  const [catid, setcatid] = useState()
  const [hosdetail, sethosdetail] = useState([''])
  let handleDistrict = async (event) => {
    console.log(event.target.value, 'asdsdas');
    setcatid(event.target.value)
    let response = datas.filter(hos => hos.district == event.target.value)
    // let response=await axios.get(`http://localhost:5000/organdonor/hosdistrict/${event.target.value}`)
    console.log(response);
    sethosdetail(response)
  }


  let handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
    console.log(data);
  }

  // let handleSubmit=async (event)=>{
  //     event.preventDefault()
  //     console.log(data);
  //    let response=await axios.post('http://localhost:5000/organdonor/registers',{...data,userId:id})
  //    console.log(response);

  // }
  console.log(hosdetail, 'sasasas');


  return (
    <form onSubmit={handleSubmit} className="images2 p-4 mx-auto  flex w-[100%] justify-normal gap-80">
      <div className='w-[100%] flex justify-center gap-14'>
        <div className='flex gap-10'>

          <div className=''>

            <div class="mb-5">
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name :</label>
              <input onChange={handleChange} name="name" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" type="text" id="name" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
            </div>
            <div class="mb-5">
              <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age :</label>
              <input onChange={handleChange} name="age" pattern="[0-9]{2}" maxLength={2} title="Please enter a valid 6-digit PIN code" type="text" id="age" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div class="mb-5">
              <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
              <input onChange={handleChange} name="email" type="email" id="place" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact:</label>
              <input onChange={handleChange} name="contact" type="text" pattern="[0-9]{10}" title="Please enter a valid phone number" maxLength={10}  id="place" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address :</label>
              <input onChange={handleChange} name="address" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" type="text" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth :</label>
              <input onChange={handleChange} name="dateofbirth" type="date" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
          </div>


          <div>

            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adhar Number :</label>
              <input onChange={handleChange} name="adhaarnumber" pattern="[0-9]{4}" title="Please enter a valid adhaar number" maxLength={12} type="text" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Gender</label>
              <div>
                <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Male</label>
                <input onChange={handleChange} name="gender" value="male" type="radio" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Female</label>
                <input onChange={handleChange} name="gender" value="female"type="radio" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Other</label>
                <input onChange={handleChange} name="gender"  value="other" type="radio" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />

              </div>
            </div>

            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Signature :</label>
              <input onChange={handlefile} name="signature" type="file" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Healthcertificate :</label>
              <input onChange={handlefile} name="healthcertificate" type="file" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conformationcertificate :</label>
              <input onChange={handlefile} name="conformationcertificate" type="file" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
          </div>

          <div>


            <div className='w-[70%]'>
              <div class="mb-5">
                <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bloodgroup :</label>
                <input onChange={handleChange} name="bloodgroup" pattern="[a-zA-Z\s\-\+]*" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
              </div>
              <div class="mb-5">
                <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height in cm:</label>
                <input onChange={handleChange} name="height" type="text" pattern="[0-9]{3}" maxLength={3} title="Please enter a height" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
              </div>
              <div class="mb-5">
                <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">weight in kg :</label>
                <input onChange={handleChange} name="weight" type="text" pattern="[0-9]{3}" maxLength={3} title="Please enter a weight" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
              </div>
              <div class="mb-5">
                <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Districrt :</label>
                <select onChange={handleDistrict} name="district" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                  <option value="">select</option>
                  {datas.map((item) => (
                    <option value={item?.district}>{item?.district}</option>
                  ))}
                </select>
              </div>
              <div class="mb-5">
                <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital :</label>
                <select onChange={handleChange} name="hospitalId" class="shadow-sm bg-red-200 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                  <option value="">select</option>
                  {hosdetail.map((item) => (
                    <option value={item?._id}>{item?.name}</option>
                  ))}
                </select>
              </div>
              <div class="mb-5">
                <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nominie :</label>
                <input onChange={handleChange} name="nominie" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
              </div>
            </div>

            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nominie contact :</label>
              <input onChange={handleChange} name="nominiecontact" pattern="[0-9]{10}" title="Please enter a valid phone number" maxLength={10}  type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nominie relation :</label>
              <input onChange={handleChange} name="nominierelation" pattern="^[a-zA-Z ]*$" title="Only alphabets are allowed" type="text" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nominie Password :</label>
              <input onChange={handleChange} name="nominiepassword" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' type="password" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password :</label>
              <input onChange={handleChange} name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' type="password" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
            </div>
            <div class="mb-5">
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conformpassword :</label>
              <input onChange={handleChange} name="Conformpassword" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' type="password" id="contact" class="shadow-sm bg-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
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
        {drop && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Organs to Donate Before Death</h3>
            {categories.map((category) => (
              <div key={category._id}>
                {category.beforedeathorgans.split(',').map((organ) => (
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
            ))}
          </div>
        )}


        {drops && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Organs to Donate After Death</h3>
            {categories.map((category) => (
              <div key={category._id}>
                {category.afterdeathorgans.split(',').map((organ) => (
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
              </div>
            ))}
          </div>
        )}


        <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Submit
        </button>

      </div>
    </form>
  );
};

export default OrganDonorForm;
