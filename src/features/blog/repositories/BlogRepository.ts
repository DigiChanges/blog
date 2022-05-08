import { AxiosRequestConfig } from 'axios';
import { HttpAxiosRequest, HttpAxiosRequestWithoutToken } from '../../../services/HttpAxiosRequest';
import { config } from '../../shared/repositories/config';
import { ArticleResponse, ArticlesListResponse, CategoriesListResponse, CategoriesWithIconListResponse } from '../interfaces';

const { protocol, hostname, port } = config.apiGateway.server;
const { getCategories, getCategoriesWithIcons, getArticles, getArticlesPopulated, getArticleById } = config.apiGateway.routes.blog;


class BlogRepository
{
    public getCategoryList ()
    {
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${getCategories}`,

        };

        return HttpAxiosRequestWithoutToken<CategoriesListResponse>( config );
    }

    public getCategoryWithIconsList ()
    {
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${getCategoriesWithIcons}`,

        };

        return HttpAxiosRequestWithoutToken<CategoriesWithIconListResponse>( config );
    }

    public getArticlesList ()
    {
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${getArticles}`,

        };

        return HttpAxiosRequestWithoutToken<ArticlesListResponse>( config );
    }

    public getArticlesListByCategorySlug ()
    {
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${getArticlesPopulated}`,
        };

        return HttpAxiosRequest<ArticlesListResponse>( config );
    }

    public getArticlesById ( id: string )
    {
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${getArticleById}`.replace( ':id', id ),
        };

        return HttpAxiosRequest<ArticleResponse>( config );
    }
}

export default BlogRepository;
