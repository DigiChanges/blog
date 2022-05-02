import { AxiosRequestConfig } from 'axios';
import { HttpAxiosRequestWithoutToken } from '../../../services/HttpAxiosRequest';
import { config } from '../../shared/repositories/config';
import { BlogListResponse } from '../interfaces';
// import { DocumentTypeListResponse } from '../interfaces';

const { protocol, hostname, port } = config.apiGateway.server;
const { getCategories } = config.apiGateway.routes.blog;


class BlogRepository
{
    public getCategoryList ()
    {
        const config: AxiosRequestConfig = {
            url: `${protocol}://${hostname}:${port}/${getCategories}`,

        };

        return HttpAxiosRequestWithoutToken<BlogListResponse>( config );
    }
}

export default BlogRepository;
