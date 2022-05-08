import List from 'postcss/lib/list';
import { useParams, useSearchParams } from 'solid-app-router';
import { Component, createMemo, createResource, Show } from 'solid-js';
import ShowTemplate from '../../../features/articles/templates/articles/Show';
import { ArticlesApi } from '../../../features/blog/interfaces';
import BlogRepository from '../../../features/blog/repositories/BlogRepository';
import createAlert from '../../../features/shared/hooks/createAlert';
import Layout from '../../../features/shared/layout/Layout';
import AlertErrors from '../../../features/shared/molecules/AlertErrors/AlertErrors';


const IndexPage: Component = () =>
{
    const { id } = useParams<{ id: string }>();
    const errorAlert = createAlert();
    const blogRepository = new BlogRepository();

    const [ articles ] = createResource( blogRepository.getArticlesById( id ) );

    return (
        <Layout>
            { articles.error && <h1> Error: { articles?.error?.message } </h1> }
            <AlertErrors errorData={ errorAlert.errorData() } title="err_save" description="err_process_role"/>

            <ShowTemplate
                article={ articles()?.data }
                loading={ articles.loading }
            />
        </Layout>
    );
};

export default IndexPage;
