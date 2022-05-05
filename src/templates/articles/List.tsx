import { Text } from 'solid-i18n';
import { Component, createSignal, For, Show } from 'solid-js';
import Title from '../../atoms/Title';
import { ArticlesApi } from '../../features/blog/interfaces';
import MediaObject from '../../molecules/MediaObject';

interface articlesListTemplateProps
{
    data: ArticlesApi[] | undefined;
    loading: boolean;
}

const List: Component<articlesListTemplateProps> = ( props ) =>
{
    const [ getShowScroll, setShowScroll ] = createSignal( false );

    const checkScrollTop = () =>
    {
        if ( !getShowScroll() && window.scrollY > 300 )
        {
            setShowScroll( true );
        }
        else if ( getShowScroll() && window.scrollY <= 300 )
        {
            setShowScroll( false );
        }
    };

    if ( typeof window !== 'undefined' )
    {
        window.addEventListener( 'scroll', checkScrollTop );
    }

    const scrollTop = () =>
    {
        if ( typeof window !== 'undefined' )
        {
            window.scrollTo( { top: 0, behavior: 'smooth' } );
        }
    };

    return (
        <section class="mx-8">
            <section class="flex flex-row items-center my-6">
                <div class="flex flex-row justify-between mb-2">
                    <Title class="dg-section-title" titleType="h4">
                        <Text message="Articles" />
                    </Title>
                </div>
            </section>

            {/* <FilterSort placeholder="Search articles..." filterBy={filterBy} orderBy={orderBy}/> */}

            <Show when={!props.loading} fallback={() => <div>Loading articles...</div>}>
                <div class="dg-grid-3x3">

                    <For each={props.data} fallback={<div>No articles...</div>}>
                        {( article ) =>
                            <MediaObject class="dg-media-object" >
                                <div class="flex-col w-10 h-10 bg-white text-black justify-center content-center rounded-full">{' '}</div>
                                <div class="flex-col justify-center content-center ml-3">
                                    <Title titleType="h6" class="hover:transform hover:scale-125">
                                        <a href={`/articles/view/${article.id}`}>
                                            {article.attributes.title}{' '}{article.attributes.description}
                                        </a>
                                    </Title>
                                    {article.attributes.content}
                                </div>
                            </MediaObject>
                        }
                    </For>
                </div>
            </Show>
        </section>
    );
};

export default List;
