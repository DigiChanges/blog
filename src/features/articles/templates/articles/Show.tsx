import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { Component, createSignal, Show } from 'solid-js';
import Markdown from 'solid-markdown';
import Title from '../../../../atoms/Title';
import MediaObject from '../../../../molecules/MediaObject';
import { ArticlesApi } from '../../../blog/interfaces';

interface articlesShowTemplateProps
{
    article: ArticlesApi | undefined;
    loading: boolean;
}

const ShowTemplate: Component<articlesShowTemplateProps> = ( props ) =>
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
            <Show when={ !props.loading && props.article }>
                <div class="mb-2 my-6">
                    <Title class="dg-section-title underline" titleType="h1">
                        {`${props?.article?.attributes.title}`}
                    </Title>
                    <Title class="dg-section-title" titleType="h4">
                        {`${props?.article?.attributes.description}`}
                    </Title>
                </div>

                <MediaObject class="dg-media-object min-w-full" >
                    <Markdown children={props?.article?.attributes.content}
                        remarkPlugins={[
                            [ remarkGfm ],
                        ]}
                        rehypePlugins={[
                            [ rehypeHighlight ],
                        ]}
                    />
                </MediaObject>
            </Show>
        </section>
    );
};

export default ShowTemplate;
