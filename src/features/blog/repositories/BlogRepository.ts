import { AxiosRequestConfig } from 'axios';
import { HttpAxiosRequestWithoutToken } from '../../../services/HttpAxiosRequest';
import { config } from '../../shared/repositories/config';
import { ArticlesListResponse, CategoriesListResponse } from '../interfaces';

const { protocol, hostname, port } = config.apiGateway.server;
const { getCategories, getArticles } = config.apiGateway.routes.blog;


class BlogRepository
{
    public getCategoryList ()
    {
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${getCategories}`,

        };

        return HttpAxiosRequestWithoutToken<CategoriesListResponse>( config );
    }

    public getArticlesList ()
    {
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${getArticles}`,

        };

        return HttpAxiosRequestWithoutToken<ArticlesListResponse>( config );
    }
}

export default BlogRepository;
