const API_PROTOCOL  = import.meta.env.VITE_API_PROTOCOL as string || 'http';
const API_HOSTNAME = import.meta.env.VITE_API_HOSTNAME as string || 'localhost';
const API_PORT = import.meta.env.VITE_API_PORT as string || 8089;

const BACKEND_BASE_PATH = import.meta.env.VITE_API_BASE as string || 'api';

export const config = {
    apiGateway: {
        server: {
            protocol: API_PROTOCOL,
            hostname: API_HOSTNAME,
            port: API_PORT,
        },
        routes: {
            // auth: {
            //     login: `${BACKEND_BASE_PATH}/auth/login`,
            //     refreshToken: `${BACKEND_BASE_PATH}/auth/refresh-token`,
            //     logout: `${BACKEND_BASE_PATH}/auth/logout`,
            //     permissionsGetAll: `${BACKEND_BASE_PATH}/auth/permissions`,
            //     keepAlive: `${BACKEND_BASE_PATH}/auth/keep-alive`,
            //     forgotPassword: `${BACKEND_BASE_PATH}/auth/forgot-password`,
            //     changeForgotPassword: `${BACKEND_BASE_PATH}/auth/change-forgot-password`,
            // },
            blog: {
                getCategories: `${BACKEND_BASE_PATH}/categories`,
                getArticles: `${BACKEND_BASE_PATH}/articles`,
            },
        },
    },
};
