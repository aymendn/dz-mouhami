import React from 'react';
import Navbar from './NavbarNoAction';
import Footer from './Footer';
import validation from './Assets/person_check.png';

const UserForm = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-8 text-center">
        <h1 className="text-[#0F3146] text-5xl font-semibold">Create Your Account</h1>
        <p className="p-4 text-[#496C80] text-md text-center">
          Welcome to DZ-Mouhami! By creating an account, you'll gain access to a network of trusted lawyers in Algeria. Please fill out the form below to get started.
        </p>
      </div>

      <form className="mx-4 md:mx-16 lg:mx-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-8">

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-[#103F5BE5]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-full md:w-96"
              placeholder="John"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="surname" className="block text-sm font-medium text-[#103F5BE5]">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              className="mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-full md:w-96"
              placeholder="Doe"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#103F5BE5]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 rounded-2xl bg-slate-50 border border-gray-300 w-full md:w-96"
              placeholder="Johndoe@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-[#103F5BE5]">
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-full md:w-96"
              placeholder="555-222-111"
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-end m-4">
          <button className="transition-transform transform hover:scale-105 duration-500 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2">
            <img src={validation} alt="Validation" />
            Create account
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default UserForm;
