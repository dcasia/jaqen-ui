export interface ResourceListInterface {
    name: string,
    label: string,
    uriKey: string
}

export interface ResourceCreateSchemaInterface {
    label: string
    attribute: string
    value: string | null
    component: string
    additionalInformation: any
}

export interface ResourceIndexInterface {
    total: number,
    resources: Array<{
        key: number,
        fields: ResourceCreateSchemaInterface[]
    }>
}

export interface ResourceDetailResponse {
    key: number,
    fields: ResourceCreateSchemaInterface[]
}

export interface FiltersResponseInterface {
    uriKey: string,
    fields: ResourceCreateSchemaInterface[]
}


export function useApi() {
    return {
        async deleteResource(resource: string, key: string) {

            const response = await fetch(`/dashboard-api/${ resource }/${ key }`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json'
                }
            })
        },
        async getDetailsField(resource: string, key: string): Promise<ResourceDetailResponse> {

            const response = await fetch(`/dashboard-api/${ resource }/${ key }?fieldsFor=detail`, {
                headers: {
                    Accept: 'application/json'
                }
            })

            return await response.json()

        },
        async getFilters(resource: string): Promise<FiltersResponseInterface[]> {

            const response = await fetch(`/dashboard-api/${ resource }/filters`, {
                headers: {
                    Accept: 'application/json'
                }
            })

            return await response.json()

        },
        async getIndex(resource: string, filters: string): Promise<ResourceIndexInterface> {

            const response = await fetch(`/dashboard-api/${ resource }?fieldsFor=index-listing&filters=${ filters }`, {
                headers: {
                    Accept: 'application/json'
                }
            })

            if (response.ok) {

                return await response.json()

            }

            return Promise.reject(await response.json())

        },
        async updateResource(resource: string, key: string, body: FormData) {

            body.append('_method', 'PATCH')

            const response = await fetch(`/dashboard-api/${ resource }/${ key }?fieldsFor=creation`, {
                method: 'POST',
                body,
                headers: {
                    Accept: 'application/json'
                }
            })

            if (response.ok) {
                return await response.json()
            }

            return Promise.reject(await response.json())

        },
        async createResource(resource: string, body: FormData) {

            const response = await fetch(`/dashboard-api/${ resource }?fieldsFor=creation`, {
                method: 'POST',
                body,
                headers: {
                    Accept: 'application/json'
                }
            })

            if (response.ok) {
                return true
            }

            return Promise.reject(false)

        },
        async getEditFields(resource: string, key: string): Promise<ResourceDetailResponse> {

            const response = await fetch(`/dashboard-api/${ resource }/${ key }?fieldsFor=creation`, {
                headers: {
                    Accept: 'application/json'
                }
            })

            return await response.json()

        },
        async getCreateFields(resource: string): Promise<ResourceCreateSchemaInterface[]> {

            const response = await fetch(`/dashboard-api/${ resource }/fields?fieldsFor=creation`, {
                headers: {
                    Accept: 'application/json'
                }
            })

            return await response.json()

        },
        async fetchResources(): Promise<ResourceListInterface[]> {

            const response = await fetch('/dashboard-api/resources', {
                headers: {
                    Accept: 'application/json'
                }
            })

            return await response.json()

        }
    }
}
