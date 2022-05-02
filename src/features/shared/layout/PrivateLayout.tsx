
import { Component, createMemo, createResource, createSignal, JSX, lazy, Show } from 'solid-js';
import Footer from '../../footer/organisms/Footer';
import NavBar from '../../navBar/organisms/NavBar';
import ExpandButton from '../../sideBar/organisms/ExpandButton';
import SideBar from '../../sideBar/organisms/SideBar';
import DashItems from './DashItems';

import { dashRoutes } from '../../../config/dashRoutes';
import IconHome from '../../../atoms/Icons/Stroke/IconHome';
import { BlogApi, BlogListResponse } from '../../blog/interfaces';
import BlogRepository from '../../blog/repositories/BlogRepository';
import { INIT_STATE } from '../constants';
import usePaginatedState from '../hooks/usePaginatedState';
import useQuery from '../hooks/useQuery';
interface privateTemplateProps {
    children: JSX.Element | JSX.Element[];
}

const PrivateLayout: Component<privateTemplateProps> = ( props ) =>
{
    const [ showSidebar, setShowSideBar ] = createSignal( false );
    const [ getExpanded, setExpanded ] = createSignal( true );

    const toggleShowSideBar = () =>
    {
        setShowSideBar( !showSidebar() );
    };


    const blogRepository = new BlogRepository();

    const { page, goToPage, uriParams, goFirstPage } = useQuery( INIT_STATE.nextQueryParamsPagination );

    const [ categories, { refetch } ] = createResource( uriParams, blogRepository.getCategoryList() );
    const { resourceList: roleList, setViewMore, paginationData } = usePaginatedState<BlogApi, BlogListResponse>( categories );

    const mappedCategories = createMemo( () =>
    {
        return categories()?.data.map( category => ( {
            path: '/blog',
            component: lazy( () => import( '../../../pages/blog' ) ),
            name: category.attributes.name,
            icon: IconHome,
            showItem: true,
            permission: 'Dashboard',
        }
        ) );
    } );

    return (
        <div class="grid grid-areas-mobile-layout md:grid-areas-tablet-layout lg:grid-areas-desktop-layout grid-cols-desktop-layout
        h-full dg-main-bg">
            <header class="grid-in-header dg-element-bg">
                <NavBar sideBarIsShown={showSidebar()} onClick={toggleShowSideBar} email={'example@mail.com'} />
            </header>
            <Show when={!categories.loading}>
                {/* desktop */}
                <div class="grid-in-sidebar hidden md:block mt-6 ml-4 z-10 w-max">
                    <SideBar class="dg-rounded ml-1 h-89 py-5" getExpanded={getExpanded()}>
                        <ExpandButton  getExpanded={getExpanded()} setExpanded={setExpanded} />
                        <div class="flex flex-col h-full justify-between pb-5">
                            <div classList={{ 'mt-8': !getExpanded() }}>
                                <DashItems expanded={getExpanded()} dashRoutes={mappedCategories() as any}/>

                            </div>
                        </div>
                    </SideBar>
                </div>
                {/* mobile */}
                <div class="grid-in-sidebar absolute md:hidden mt-20 md:m-4 z-50 ">
                    <Show when={showSidebar()} >
                        <SideBar class="relative ml-5 dg-rounded min-h-80vh py-5 w-48" getExpanded={true}>
                            <DashItems expanded={true} dashRoutes={mappedCategories() as any} />
                        </SideBar>
                    </Show>
                </div>

            </Show>
            <main class="grid-in-main w-full">
                {props.children}
            </main>
            <Footer class="flex grid-in-footer border m-4 w-auto p-4 text-sm text-gray-200 items-end justify-center">
                {new Date().getFullYear()} © DigiChanges
            </Footer>

        </div>
    );
};

export default PrivateLayout;
