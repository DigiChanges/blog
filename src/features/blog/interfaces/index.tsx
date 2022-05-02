// import Country from '../../country/interfaces';
// import Base from '../../shared/interfaces/Base';
// import IdPayload from '../../shared/interfaces/IdPayload';
// import { IBodyApi } from '../../shared/interfaces/response/IBodyApi';
// import { IPaginatedBodyApi } from '../../shared/interfaces/response/IPaginatedBodyApi';
// import { SelectValueOption } from '../../shared/types/Selects';

import { IPaginatedBodyApi } from '../../shared/interfaces/response/IPaginatedBodyApi';

export interface Blog {
    id: number;
    attributes: {
        name: string;
        slug: string;
    };
}
// export interface DocumentType extends IdPayload
// {
//     code: string;
//     description: string;
//     country: Country;
// }

// export interface DocumentTypePayload
// {
//     code: string;
//     description: string;
//     country: {
//         code: string;
//     };
// }

export type BlogApi = Blog;

// export type DocumentTypeResponse = IBodyApi & {
//     data: DocumentTypeApi;
// };

export type BlogListResponse = IPaginatedBodyApi & {
    data: BlogApi[];
};

// export type IdentificationDocumentValue = {
//     documentType: SelectValueOption | undefined;
//     value: string;
// };
