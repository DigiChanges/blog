import { Component, createResource } from 'solid-js';
// import { ArticlesApi, CategoriesApi, CategoriesListResponse } from '../../features/blog/interfaces';
// import BlogRepository from '../../features/blog/repositories/BlogRepository';
// import { INIT_STATE } from '../../features/shared/constants';
// import createAlert from '../../features/shared/hooks/createAlert';
// // import usePaginatedState from '../../features/shared/hooks/usePaginatedState';
// import useQuery from '../../features/shared/hooks/useQuery';
// import PrivateLayout from '../../features/shared/layout/PrivateLayout';
// import AlertErrors from '../../features/shared/molecules/AlertErrors/AlertErrors';
// import List from '../../templates/articles/List';
// import usePaginatedState from '../../features/shared/hooks/usePaginatedState';
// import { ArticlesListResponse } from '../../features/blog/interfaces';

const IndexPage: Component = () =>
{
    // const errorAlert = createAlert();
    // const blogRepository = new BlogRepository();

    // const { page, goToPage, uriParams, goFirstPage } = useQuery( INIT_STATE.nextQueryParamsPagination );

    // const [ categories ] = createResource( uriParams, blogRepository.getCategoryList() );
    // const { resourceList: cList, setViewMore: cSetViewMore, paginationData: cPaginationData } = usePaginatedState<CategoriesApi, CategoriesListResponse>( categories );

    // const [ articles ] = createResource( uriParams, blogRepository.getArticlesList() );
    // const { resourceList: aList, setViewMore: aSetViewMore, paginationData: aPaginationData } = usePaginatedState<ArticlesApi, ArticlesListResponse>( articles );

    // const viewMoreAction = () => () =>
    // {
    //     goToPage( articles()?.pagination?.nextUrl );
    //     setViewMore();
    // };

    return (
        <h1> Show Article </h1>
        // <PrivateLayout>
        //     { categories.error && <h1> Error: { categories?.error?.message } </h1> }
        //     <AlertErrors errorData={ errorAlert.errorData() } title="err_save" description="err_process_role"/>
        //     <h1>this is a blog</h1>
        //     <List
        //         data={ aList() }
        //         loading={ categories.loading }
        //         viewMoreAction={ viewMoreAction }
        //     />
        // </PrivateLayout>
    );
};

export default IndexPage;
