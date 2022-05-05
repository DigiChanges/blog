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

export interface Icon
{
    id: number;
    attributes: {
        name: string;
        alternativeText: string;
        caption: string;
        width: number;
        height: 278;
        formats: {
            thumbnail: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: string | null;
                size: number;
                width: number;
                height: number;
            };
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: string | null;
        createdAt: string;
        updatedAt: string;
    };
}

export interface CategoryWithIcon extends Category {
    attributes: {
        name: string;
        slug: string;
        icon: {
            data: Icon;
        };
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
export type CategoriesWithApi = CategoryWithIcon;
export type ArticlesApi = Article;

export type CategoriesListResponse = IPaginatedBodyApi & {
    data: CategoriesApi[];
};

export type CategoriesWithIconListResponse = IPaginatedBodyApi & {
    data: CategoriesWithApi[];
};

export type ArticlesListResponse = IPaginatedBodyApi & {
    data: ArticlesApi[];
};
