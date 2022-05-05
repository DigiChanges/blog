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
            blog: {
                getCategories: `${BACKEND_BASE_PATH}/categories`,
                getCategoriesWithIcons: `${BACKEND_BASE_PATH}/categories?populate=icon`,
                getArticles: `${BACKEND_BASE_PATH}/articles`,
                getArticlesPopulated: `${BACKEND_BASE_PATH}/articles?populate[author][populate][0]=picture&populate[category][populate][0]=icon`, // &filters[category][slug][$eq]=:categorySlug`,
            },
        },
    },
};
