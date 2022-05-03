import { lazy } from 'solid-js';
import IconDashboard from '../atoms/Icons/Stroke/IconDashboard';
import IconHome from '../atoms/Icons/Stroke/IconHome';
import IconPencilAlt from '../atoms/Icons/Stroke/IconPencilAlt';
import IconPlus from '../atoms/Icons/Stroke/IconPlus';
import IconUsers from '../atoms/Icons/Stroke/IconUsers';
import IconViewList from '../atoms/Icons/Stroke/IconViewList';
import { permissions } from './permissions';

export const dashRoutes = [
    {
        path: '/',
        component: lazy( () => import( '../pages/articles' ) ),
        name: 'a_home',
        icon: IconHome,
        showItem: true,
        permission: 'Dashboard',
    },
    // {
    //     path: '/articles',
    //     component: lazy( () => import( '../pages/articles' ) ),
    //     name: 'HTML',
    //     icon: IconDashboard,
    //     showItem: true,
    //     permission: 'Dashboard',
    // },
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
