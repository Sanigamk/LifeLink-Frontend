import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AddCategory = () => {
    // let id=localStorage.getItem('id')
    const [data,setData]=useState([''])
  const [category, setCategory] = useState({
    beforedeathorgans: '',
    afterdeathorgans: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/addcategory', category);
      console.log('Category added:', response.data);
      // Clear form after successful submission if needed
      setCategory({
        beforedeathorgans: '',
        afterdeathorgans: ''
      });
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  useEffect(()=>{
    let fetchdata = async ()=>{
        let response = await axios.get(`http://localhost:5000/user/viewcategory`)
        console.log(response.data)
        setData(response.data)
    }
    fetchdata()

},[])

  return (
    <div className='images2 w-[100%] h-[42rem]'>
        <div>
      <form onSubmit={handleSubmit} className='pt-20 ps-24 '>
        <input className='px-4 py-5 rounded-md me-14'
          type="text"
          placeholder="Organs before death"
          name="beforedeathorgans"
          value={category.beforedeathorgans}
          onChange={handleChange}
        />
        <input className='px-4 py-5 rounded-md me-14'
          type="text"
          placeholder="Organs after death"
          name="afterdeathorgans"
          value={category.afterdeathorgans}
          onChange={handleChange}
        />
        <button className='bg-red-800 text-white rounded-md w-28 h-10' type="submit">Add Category</button>
      </form>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-14 ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 text-white bg-red-800 rounded">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                After Death organs
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Before Death organs
                            </th>
                        </tr>
                    </thead>
                        <tbody>
                        {data.map((item)=>(
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.afterdeathorgans}
                                </th>
                                <td class="px-6 py-4">
                                    {item.beforedeathorgans}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                </table>
            </div>
    </div>
  );
};
