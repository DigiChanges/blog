// import Country from '../../country/interfaces';
// import Base from '../../shared/interfaces/Base';
// import IdPayload from '../../shared/interfaces/IdPayload';
// import { IBodyApi } from '../../shared/interfaces/response/IBodyApi';
// import { IPaginatedBodyApi } from '../../shared/interfaces/response/IPaginatedBodyApi';
// import { SelectValueOption } from '../../shared/types/Selects';

import { IPaginatedBodyApi } from '../../shared/interfaces/response/IPaginatedBodyApi';

export interface Category
{
    id: number;
    attributes: {
        name: string;
        slug: string;
    };
}

export interface Author
{
    id: number;
    attributes: {
        name: string;
        email: string;
        createdAt: string;
        updatedAt: string;
    };
}

export interface Article
{
    id: number;
    attributes: {
        title: string;
        description: string;
        content: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        category: { data: Category };
        image: {
            data: any;
        };
        author: {
            data: Author;
        };
    };
}

export type CategoriesApi = Category;
export type ArticlesApi = Article;

export type CategoriesListResponse = IPaginatedBodyApi & {
    data: CategoriesApi[];
};

export type ArticlesListResponse = IPaginatedBodyApi & {
    data: ArticlesApi[];
};
