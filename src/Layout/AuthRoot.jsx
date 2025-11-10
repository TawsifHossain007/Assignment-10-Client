import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';

const AuthRoot = () => {
    return (
        <div className=' bg-base-100'>
            <div className='w-11/12 mx-auto min-h-screen'>
            <header className='py-4'>
                 <Navbar></Navbar>
            </header>
            <main className='flex items-center justify-center py-30'>
                <Outlet></Outlet>
            </main>
        </div>
        </div>
        
    );
};

export default AuthRoot;