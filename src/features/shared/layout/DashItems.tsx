import { useLocation } from 'solid-app-router';
import { Component, createSignal, For, Show } from 'solid-js';
import SideBarItem from '../../../molecules/SideBarItem';
import SideBarSubItem from '../../../molecules/SideBarSubItem';

const isEqualPath = ( { locationPath, itemPath }: {locationPath: string; itemPath: string} ) =>
{
    return locationPath.replace( /\//g, '' ) === itemPath.replace( /\//g, '' );
};

type DashItemsProps = {
    expanded: boolean;
    dashRoutes: any[];
};

const DashItems: Component<DashItemsProps> = ( props ) =>
{
    const [ getShowSubitems, setShowSubitems ] = createSignal( false );
    const [ sectionSelected, setSectionSelected ] = createSignal( '' );
    const location = useLocation();

    const onToggled = ( path: string ) =>
    {
        setShowSubitems( true );
        setSectionSelected( path );
    };

    return (
        <For each={props.dashRoutes}>
            {( dashRoute: any ) =>
                <SideBarItem
                    name={dashRoute.name as string}
                    icon={dashRoute.icon}
                    isLoading={true}
                    onClick={() => ( onToggled( dashRoute.path ) )}
                    getShowSubitems={getShowSubitems()}
                    routes={dashRoute}
                    showItem={dashRoute.showItem as boolean}
                    isLink={!dashRoute.children}
                    path={ dashRoute.path }
                    getExpanded={props.expanded}
                    sectionSelected={sectionSelected()}
                >
                    <Show when={getShowSubitems() && sectionSelected() === dashRoute.path}>
                        <div class="flex flex-row">
                            <div class="w-full">
                                <For each={dashRoute.children}>
                                    {( childrenDashRoute: any ) =>
                                        <SideBarSubItem
                                            name={childrenDashRoute.name}
                                            path={sectionSelected().concat( childrenDashRoute.path )}
                                            icon={childrenDashRoute.icon}
                                            isToggled={true}
                                            showItem={childrenDashRoute.showItem}
                                            expanded={props.expanded}
                                            equalPath={isEqualPath( {
                                                locationPath: location.pathname,
                                                itemPath: sectionSelected().concat( childrenDashRoute.path ),
                                            } )}
                                        />
                                    }
                                </For>
                            </div>
                        </div>
                    </Show>
                </SideBarItem>
            }
        </For>
    );
};

export default DashItems;
