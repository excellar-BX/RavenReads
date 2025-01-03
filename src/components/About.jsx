import React from 'react';
import pic from "../assets/raven1.png";

const About = () => {
  return (
    <div id='about' className=' mx-auto max-w-[1024px] bg-indigo-900 bg-opacity-40 max-sm:p-2 p-20 my-10 '>
      <h3 className='text-4xl text-indigo-500 font-semibold my-3 '>About <span className='text-indigo-700'>RAVEN :</span> </h3>
    <div className='flex max-sm:block  mx-auto max-w-[1024px]'>
    <div className="p-10 max-sm:w-[100%] w-[50%] h-[600px] ">
      <img
        src={pic}
        className=" rounded-lg border-indigo-700 w-[100%] h-[100%] "
        alt="me 2"
      />
    </div>
      <div className='max-sm:w-[100%] py-10 w-[50%] text-left text-xl my-auto block '>
        <span className='text-[60px] font-semibold text-indigo-500'>L</span> orem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis dignissimos facilis, dicta unde deserunt vero corrupti possimus placeat optio, id voluptates commodi quam harum beatae libero non vitae voluptate?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nostrum, natus ea illo quibusdam tempora fugiat debitis id quisquam, corrupti, optio consectetur deleniti quas qui laboriosam eveniet. Error, sapiente odio.
      </div>
    </div>
    </div>
  );
}

export default About;
