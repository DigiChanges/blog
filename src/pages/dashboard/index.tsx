import Dashboard from '../../features/dashboard/templates/dashboard';
import { Component } from 'solid-js';
import Layout from '../../features/shared/layout/Layout';
const DashboardPage: Component = () =>
{
    return (
        <Layout>
            <Dashboard />
        </Layout>
    );
};

export default DashboardPage;
