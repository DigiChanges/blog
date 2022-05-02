
type OptionValueLabel = {
    value: string;
    label: string;
};

export class SelectTransform
{
    static getOptionsSimpleArray ( items: string[] | undefined ): OptionValueLabel[]
    {
        if ( items && items.length > 0 )
        {
            return items.map( ( value ) => ( { label: value, value } ) );
        }

        return [];
    }

    static getOptionsObjectArray ( items: any[] | undefined, label: string, value: string ): OptionValueLabel[]
    {
        if ( items && items.length > 0 )
        {
            return  items.map( ( item ) => ( { label: item[label], value: item[value] } ) );
        }

        return [];
    }
}
