// import React from 'react';
import MainLayout from '../../layout/MainLayout';



function Dashboard() {
    return (
        <div>
            Dasyyyy
        </div>
    );
}

export default function DashboardWithLayout() {
    return (
        <MainLayout component={Dashboard}>
            <Dashboard />
        </MainLayout>
    );
}