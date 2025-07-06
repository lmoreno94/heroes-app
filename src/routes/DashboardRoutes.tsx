import React from 'react';
import Navbar from '../components/Ui/Navbar';
import { Outlet } from 'react-router-dom';

export const DashboardRoutes: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className='container ml-2'>
                <Outlet />
            </div>
        </div>
    );
};