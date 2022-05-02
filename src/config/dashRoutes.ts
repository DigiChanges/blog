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
        component: lazy( () => import( '../pages/dashboard' ) ),
        name: 'a_home',
        icon: IconHome,
        showItem: true,
        permission: 'Dashboard',
    },
    {
        path: '/blog/:slug',
        component: lazy( () => import( '../pages/blog' ) ),
        name: 'HTML',
        icon: IconDashboard,
        showItem: true,
        permission: 'Dashboard',
    },
    {
        path: '/users',
        name: 'u_users',
        icon: IconUsers,
        showItem: true,
        permission: permissions.USERS.LIST,
        children:
        [
            {
                path: '/',
                component: lazy( () => import( '../pages/dashboard' ) ),
                name: 'a_list',
                icon: IconViewList,
                showItem: true,
                permission: permissions.USERS.LIST,
            },
            {
                path: '/create',
                component: lazy( () => import( '../pages/dashboard' ) ),
                name: 'a_create',
                icon: IconPlus,
                showItem: true,
                permission: permissions.USERS.SAVE,
            },
            {
                path: '/view',
                component: lazy( () => import( '../pages/dashboard' ) ),
                name: 'u_view',
                icon: IconViewList,
                showItem: false,
                permission: permissions.USERS.SHOW,
            },
            {
                path: '/:id/update',
                component: lazy( () => import( '../pages/dashboard' ) ),
                name: 'u_update',
                icon: IconPencilAlt,
                showItem: false,
                permission: permissions.USERS.UPDATE,
            },
            {
                path: '/editPassword/:id',
                component: lazy( () => import( '../pages/dashboard' ) ),
                name: 'a_change_password',
                icon: IconPencilAlt,
                showItem: false,
                permission: 'Dashboard',
            },
        ],
    },
    {
        path: '/*all',
        component: lazy( () => import( '../pages/error/Custom404' ) ),
    },
];

export const defaultRoute = '/users/list';
