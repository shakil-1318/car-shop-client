import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const DashboardHome = () => {
    const { admin } = useAuth();
    return (
        <div>
            <Typography variant='h3'>
                Welcome To {
                    admin ? 'Admin Dashboard' : 'User Dashboard'
                }
            </Typography>

        </div>
    );
};

export default DashboardHome;