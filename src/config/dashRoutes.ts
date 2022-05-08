import { lazy } from 'solid-js';
import IconDashboard from '../atoms/Icons/Stroke/IconDashboard';
import IconHome from '../atoms/Icons/Stroke/IconHome';

export const dashRoutes = [
    {
        path: '/',
        component: lazy( () => import( '../pages/articles/list' ) ),
        name: 'a_home',
        icon: IconHome,
        showItem: true,
        permission: 'Dashboard',
    },
    {
        path: '/articles',
        component: lazy( () => import( '../pages/articles/list' ) ),
        name: 'HTML',
        icon: IconDashboard,
        showItem: true,
        permission: 'Dashboard',
    },
    {
        path: '/articles/:slug/p/:id',
        component: lazy( () => import( '../pages/articles/show' ) ),
        name: 'HTML',
        icon: IconDashboard,
        showItem: true,
        permission: 'Dashboard',
    },
    // {
    //     path: '/articles/:slug',
    //     component: lazy( () => import( '../pages/articles/show' ) ),
    //     name: 'HTML',
    //     icon: IconDashboard,
    //     showItem: true,
    //     permission: 'Dashboard',
    // },
    {
        path: '/*all',
        component: lazy( () => import( '../pages/error/Custom404' ) ),
    },
];

export const defaultRoute = '/users/list';
