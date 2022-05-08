
import { Component, createMemo, createResource, createSignal, JSX, lazy, Show } from 'solid-js';
import BlogRepository from '../../blog/repositories/BlogRepository';
import Footer from '../../footer/organisms/Footer';
import NavBar from '../../navBar/organisms/NavBar';
import ExpandButton from '../../sideBar/organisms/ExpandButton';
import SideBar from '../../sideBar/organisms/SideBar';
import GeneralLoader from '../templates/GeneralLoader';
import DashItems from './DashItems';

interface privateTemplateProps {
    children: JSX.Element | JSX.Element[];
}

const Layout: Component<privateTemplateProps> = ( props ) =>
{
    const [ showSidebar, setShowSideBar ] = createSignal( false );
    const [ getExpanded, setExpanded ] = createSignal( true );

    const toggleShowSideBar = () =>
    {
        setShowSideBar( !showSidebar() );
    };


    const blogRepository = new BlogRepository();

    const [ categories ] = createResource( blogRepository.getCategoryWithIconsList() );

    const mappedCategories = createMemo( () =>
        categories()?.data.map( category =>
        {
            const paramsString = `category=${category.attributes.slug}`;
            const searchParams = new URLSearchParams( paramsString );
            return (
                {
                    path: `/articles?${searchParams.toString()}`,
                    component: lazy( () => import( '../../../pages/articles/list' ) ),
                    name: category.attributes.name,
                    icon: () => <img src={category.attributes.icon.data.attributes.url} />,
                    showItem: true,
                }
            );
        } )
    );

    return (
        <div class="grid grid-flow-row">
            <header class="dg-element-bg">
                <div class="lg:max-w-screen-xxl lg:w-full lg:mx-auto">
                    <NavBar sideBarIsShown={showSidebar()} onClick={toggleShowSideBar} />
                </div>
            </header>

            <div class="grid grid-areas-mobile-layout md:grid-areas-tablet-layout lg:grid-areas-desktop-layout grid-cols-desktop-layout
        h-full dg-main-bg lg:max-w-screen-xl lg:w-full lg:mx-auto">
                <Show when={!categories.loading}
                    fallback={(
                        <GeneralLoader />
                    )}
                >
                    {/* desktop */}
                    <div class="grid-in-sidebar hidden md:block mt-6 ml-4 z-10 w-max">
                        <SideBar class="dg-rounded ml-1 h-89 py-5" getExpanded={getExpanded()}>
                            <ExpandButton getExpanded={getExpanded()} setExpanded={setExpanded} />
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

        </div>
    );
};

export default Layout;
