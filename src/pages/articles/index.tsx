import { Component, createMemo, createResource } from 'solid-js';
import { ArticlesApi, CategoriesApi, CategoriesListResponse } from '../../features/blog/interfaces';
import BlogRepository from '../../features/blog/repositories/BlogRepository';
import { INIT_STATE } from '../../features/shared/constants';
import createAlert from '../../features/shared/hooks/createAlert';
// import usePaginatedState from '../../features/shared/hooks/usePaginatedState';
import useQuery from '../../features/shared/hooks/useQuery';
import Layout from '../../features/shared/layout/Layout';
import AlertErrors from '../../features/shared/molecules/AlertErrors/AlertErrors';
import List from '../../templates/articles/List';
import usePaginatedState from '../../features/shared/hooks/usePaginatedState';
import { ArticlesListResponse } from '../../features/blog/interfaces';
import { useSearchParams } from 'solid-app-router';

const IndexPage: Component = () =>
{
    const errorAlert = createAlert();
    const blogRepository = new BlogRepository();

    const [ searchParams ] = useSearchParams();
    const queryParams = createMemo( () =>
    {
        if ( !searchParams.category )
        {
            return '';
        }
        const query = `filters[category][slug][$eq]=${searchParams.category}`;
        return query.toString();
    } );

    const [ articles ] = createResource( queryParams,  blogRepository.getArticlesListByCategorySlug() );

    return (
        <Layout>
            { articles.error && <h1> Error: { articles?.error?.message } </h1> }
            {/* { categories.error && <h1> Error: { categories?.error?.message } </h1> } */}
            <AlertErrors errorData={ errorAlert.errorData() } title="err_save" description="err_process_role"/>
            <List
                data={ articles()?.data }
                loading={ articles.loading }
            />
        </Layout>
    );
};

export default IndexPage;
