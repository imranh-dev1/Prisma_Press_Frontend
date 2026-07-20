import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='container mx-auto bg-emerald-200 min-h-screen p-4'>
            {children}
        </div>
    );
};

export default DashboardLayout;