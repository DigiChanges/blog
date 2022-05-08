import remarkGfm from 'remark-gfm';
import { Link } from 'solid-app-router';
import { Text } from 'solid-i18n';
import { Component, createSignal, For, Show } from 'solid-js';
import Markdown from 'solid-markdown';
import Title from '../../../../atoms/Title';
import MediaObject from '../../../../molecules/MediaObject';
import { ArticlesApi } from '../../../blog/interfaces';

interface articlesListTemplateProps
{
    data: ArticlesApi[] | undefined;
    category: string | undefined;
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
        <section class="px-8">
            <section class="flex flex-row items-center my-6">
                <div class="flex flex-row justify-between mb-2">
                    <Title class="dg-section-title" titleType="h4">
                        <Show when={props.category}
                            fallback={<Text message="articles_list_title" />} >
                            <Text message="articles_list_title_by"
                                category={props.category as string}
                            />
                        </Show>
                    </Title>
                </div>
            </section>

            {/* <FilterSort placeholder="Search articles..." filterBy={filterBy} orderBy={orderBy}/> */}

            <Show when={!props.loading} fallback={() => <div>Loading articles...</div>}>
                <div class="grid gap-10">

                    <For each={props.data} fallback={<div>No articles...</div>}>
                        {( article ) =>
                            <MediaObject class="dg-media-object min-w-full" >
                                <div class="flex-col gap-10">
                                    <Link href={`/articles/${article.attributes.slug}/p/${article.id}#${props.category ? `category_${props.category}` : 'main'}`}>
                                        <Title titleType="h1" class="hover:transform hover:scale-125 text-2xl">
                                            <span class="underline">{article.attributes.title}</span>
                                        </Title>
                                        <Title titleType="h2" class="hover:transform hover:scale-125 text-2xl">
                                            <span>{article.attributes.description}</span>
                                        </Title>
                                    </Link>

                                    <div class="max-h-40 overflow-hidden overflow-ellipsis max-w-full mt-3">
                                        <Markdown children={article.attributes.content} remarkPlugins={[ remarkGfm ]} />
                                    </div>

                                    <div class="mt-6">
                                        <Link href={`/articles?category=${article.attributes.category.data.attributes.slug}`}>
                                        tag: {article.attributes.category.data.attributes.name}
                                        </Link>
                                    </div>
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
