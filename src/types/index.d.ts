export interface RouteType {
    name: string,
    path: string,
    element: any,
    layout?: any,
    icon: any
    config?: {
        isRequiredAuth?: boolean,
        isShowMenu?: boolean
    },
    props?: {
        [key: string]: any
    },
    children?: Array<RouteType>
}

export interface ResponsePageableData<T> {
    items: T[];
    _meta?: {
        page: number;
        size: number;
        totalPages: number;
        totalElements: number;
    }
}

export type fileCatalogType = {
    fileList: number[],
    generalFile: number
}