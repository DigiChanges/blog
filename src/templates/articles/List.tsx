import { Link } from 'solid-app-router';
import { Component, createSignal, For, Show } from 'solid-js';
import Button from '../../atoms/Button';
import IconArrowCircleLeft from '../../atoms/Icons/Stroke/IconArrowCircleLeft';
import IconLockOpen from '../../atoms/Icons/Stroke/IconLockOpen';
import IconPencilAlt from '../../atoms/Icons/Stroke/IconPencilAlt';
import IconPlus from '../../atoms/Icons/Stroke/IconPlus';
import Title from '../../atoms/Title';
import MediaObject from '../../molecules/MediaObject';
import TitleWithButton from '../../molecules/TitleWithButton';
import { ArticlesApi } from '../../features/blog/interfaces';

interface articlesListTemplateProps
{
    data: ArticlesApi[] | undefined;
    loading: boolean;
    viewMoreAction?: any;
}

const List: Component<articlesListTemplateProps> = ( props ) =>
{
    const [ showModal, setShowModal ] = createSignal( false );
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
            <TitleWithButton
                class="dg-section-title"
                title="Articles"
                labelButtonName=""
                icon={IconPlus}
                // buttonAction={actionCreateButton()}
                path="/articles/create"
            />

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

                <div class="dg-full-center-flex mt-8">
                    <Show when={!!props?.nextPage}>
                        <Button onClick={props.viewMoreAction()} class="dg-secondary-button">
                            View More
                        </Button>
                    </Show>
                </div>
            </Show>
        </section>
    );
};

export default List;
