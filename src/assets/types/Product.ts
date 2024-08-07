export type Product = {
    sku: string;
    title: string;
}

export type ProductProperty = {
    slug: string;
    title: string;
    type?: string | undefined;
}

export type ProductPropertyOption = {
    slug: string;
    name: string;
    exclude: boolean;
    width?: number;
    height?: number;
    type?: string;
    description?: string;
    nullable?: boolean;
    customSizes?: {
        minHeight: number;
        minWidth: number;
        maxHeight: number;
        maxWidth: number;
    }
}