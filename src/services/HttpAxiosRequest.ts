import axios, { AxiosRequestConfig } from 'axios';

const HTTP_SUCCESS_STATUS = [ 200, 201, 204, 300, 302, 304 ];
const HTTP_ERROR_STATUS = [ 400, 401, 403, 404, 412, 500, 501 ];

export const HttpAxiosRequest = <T>( config: AxiosRequestConfig ) => async ( queryParams?: any ) =>
{
    const requestDefaultOptions: AxiosRequestConfig =
    {
        ...config,
        headers: {
            'Content-Type': 'application/json',
            ...config.headers,
        },
    };

    return await HttpAxiosRequestWithoutToken<T>( requestDefaultOptions )( queryParams );
};

export const HttpAxiosRequestWithoutToken = <T>( config: AxiosRequestConfig ) => async ( queryParams?: any ) =>
{
    const requestDefaultOptions: AxiosRequestConfig =
    {
        method: 'GET',
        ...config,
        headers: {
            'Content-Type': 'application/json',
            ...config.headers,
        },
    };

    if ( ! ( config.data instanceof FormData ) )
    {
        if ( typeof config.data === 'object' && Object.keys( config.data ).length !== 0 )
        {
            config.data = JSON.stringify( config.data );
        }
        else
        {
            config.data = {};
        }
    }

    if ( queryParams )
    {
        if ( config.url?.match( /\?./ ) )
        {
            config.url = `${config.url}&${queryParams}`;
        }
        else
        {
            config.url = `${config.url}?${queryParams}`;
        }
    }

    const http = axios.create();

    const response = await http.request<T>( { ...requestDefaultOptions, ...config } );

    if ( HTTP_SUCCESS_STATUS.includes( response.status ) )
    {
        return response.data;
    }
    else if ( HTTP_ERROR_STATUS.includes( response.status ) )
    {
        // @ts-ignore
        const error = response?.data?.message || 'Internal Server Error';
        throw new Error( error );
    }
    else
    {
        throw new Error( 'Network response was not ok' );
    }
};
