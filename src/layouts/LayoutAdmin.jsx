import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const LayoutAdmin = () => {
  return (
    <div
      className='min-h-screen grid grid-cols-1 xl:grid-cols-6 bg-local bg-no-repeat bg-center'
      style={{ backgroundImage: "url('../../public/back.jpg')" }}
    >
      <Sidebar />
      <div className='xl:col-span-5'>
        <Header />
        <div className='h-[100vh] overflow-y-scroll p-8'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default LayoutAdmin