import React, { useState } from 'react';
import Red from '../assets/red.svg'
import Yellow from '../assets/yellow.svg'
import Green from '../assets/green.svg'
import Option from '../assets/options.svg'

function Contactme() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    // Add your logic to handle sending the form data
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      
      <div className='flex flex-col items-center max-md:mx-7  mx-auto my-10 bg-white rounded-2xl shadow-md max-w-2xl'>
      <div className='flex justify-between items-center bg-[#427D9D] py-3 px-3 w-full rounded-t-2xl '>
        <div className='flex justify-evenly '>
        <img className='w-2 mx-px cursor-pointer' src={Red} alt="" />
        <img className='w-2 mx-px cursor-pointer' src={Yellow} alt="" />
        <img className='w-2 mx-px cursor-pointer' src={Green} alt="" />
        </div>

        <div className=''>
          <img src={Option} className='w-4 cursor-pointer' alt="" />
        </div>
      </div>
      <div className='mb-8 text-center p-4'>
        <h1 className='text-3xl my-3 font-serif font-bold'>Contact Me</h1>
        <p className='text-gray-600 font-serif'>Want to collaborate? Just shoot me an email at</p>
        <a href='mailto:usmanalfaki@gmail.com' className='text-blue-300 font-semibold text-lg'>
          usmanalfaki@gmail.com
        </a>
      </div>

      <form onSubmit={handleSend} className='w-full max-w-md p-4  max-md:px-12'>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-semibold text-gray-600'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-2 border-b-2 rounded focus:outline-none focus:border-blue-500'
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-semibold text-gray-600'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-2 border-b-2 rounded focus:outline-none focus:border-blue-500'
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='subject' className='block text-sm font-semibold text-gray-600'>
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            className='w-full px-4 py-2 border-b-2 rounded focus:outline-none focus:border-blue-500'
            required
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='message' className='block text-sm font-semibold text-gray-600'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows='4'
            className='w-full px-4 py-2 border-b-2 rounded focus:outline-none focus:border-blue-500'
            required
          ></textarea>
        </div>

        <div className='flex justify-between'>
          <button
            type='button'
            onClick={handleClear}
            className='px-4 py-2 text-sm text-white bg-[#2f404a] rounded-xl hover:bg-gray-600 focus:outline-none'
          >
            Clear
          </button>
          <button
            type='submit'
            className='px-4 py-2 text-sm text-white bg-[#427D9D] rounded-xl hover:bg-blue-600 focus:outline-none'
          >
            Send
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Contactme;
