import { createMemo } from 'solid-js';
import { QueryParams } from '../interfaces';
import FilterFactory from '../utils/FilterFactory';
import useFilter from './useFilter';
import usePagination from './usePagination';

function useQuery ( initialPagination?: string )
{
    const { filter } = useFilter();
    const { page, goToPage, goFirstPage } = usePagination( initialPagination );

    const uriParams = createMemo<QueryParams>( ( prev ) =>
    {
        const newFilter = FilterFactory.getUriParam( filter );
        if ( newFilter !== prev?.filter )
        {
            goFirstPage();
        }

        return ( {
            filter: newFilter,
            pagination: page(),
        } );
    } );

    return { page, goToPage, goFirstPage, uriParams };
}

export default useQuery;
