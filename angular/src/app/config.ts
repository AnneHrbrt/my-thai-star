export const config: any = {
    pageSizes: [8, 16, 24],
    pageSizesDialog: [4, 8, 12],
    roles: [
        {name: 'CUSTOMER', permission: 0},
        {name: 'WAITER', permission: 1},
    ],
    langs: [{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }],
};

export enum BackendType {
    IN_MEMORY,
    REST,
    GRAPHQL,
}

export class BackendConfig {
    environmentType: BackendType;
    restServiceRoot: string;
}
