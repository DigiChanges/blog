import { Component, createResource } from 'solid-js';
import { BlogApi, BlogListResponse } from '../../features/blog/interfaces';
import BlogRepository from '../../features/blog/repositories/BlogRepository';
import { INIT_STATE } from '../../features/shared/constants';
import createAlert from '../../features/shared/hooks/createAlert';
import usePaginatedState from '../../features/shared/hooks/usePaginatedState';
import useQuery from '../../features/shared/hooks/useQuery';
import PrivateLayout from '../../features/shared/layout/PrivateLayout';
import AlertErrors from '../../features/shared/molecules/AlertErrors/AlertErrors';

const IndexPage: Component = () =>
{
    const errorAlert = createAlert();
    const blogRepository = new BlogRepository();

    const { page, goToPage, uriParams, goFirstPage } = useQuery( INIT_STATE.nextQueryParamsPagination );

    const [ categories, { refetch } ] = createResource( uriParams, blogRepository.getCategoryList() );
    const { resourceList: roleList, setViewMore, paginationData } = usePaginatedState<BlogApi, BlogListResponse>( categories );

    const viewMoreAction = () => () =>
    {
        goToPage( categories()?.pagination?.nextUrl );
        setViewMore();
    };


    return (
        <PrivateLayout>
            {categories.error && <h1>Error: {categories?.error?.message}</h1>}
            <AlertErrors errorData={errorAlert.errorData()} title="err_save" description="err_process_role"/>
            <h1>this is a blog</h1>
            {/* <RoleList
                roleList={roleList()}
                removeAction={removeRoleAction( { roleRepository, errorAlert, refetch } )}
                loading={categories.loading}
                viewMoreAction={viewMoreAction}
                nextPage={paginationData()?.nextUrl}
            /> */}
        </PrivateLayout>
    );
};

export default IndexPage;
