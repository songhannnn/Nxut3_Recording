// composables/useServerRequest.ts
import { useFetch, type UseFetchOptions } from "#app";

function isArray(str: unknown) {
    return Object.prototype.toString.call(str) === '[object Array]'
}


const headers = {
    v: '1',
    klang: 'en',
    dlang: 'en',
    'time-zone': '2',
    device: 'pc',
    currency: 'usd'
}

export const fetchRequest = <T = unknown>(url: string, opts?: UseFetchOptions<T, unknown>) => {
    const token = useCookie('Authorization')
    const runtimeConfig = useRuntimeConfig()

    const defaultOptions: UseFetchOptions<unknown> = {
        // baseURL: runtimeConfig.public.baseUrl,/v4/
        onRequest({ options }) {
            options.headers = headers || {}
            if (token.value) {
                options.headers.Authorization = token.value
            }
        },
        onResponse({ response }) {
            if (+response.status === 200 && +response._data.code !== stateCode.successCode) {
                process.client && ElMessage.error(response._data.msg)
            }
        },
        onResponseError({ response }) {
            process.client && ElMessage.error(isArray(response._data.msg) ? response._data.msg[0] : response._data.msg)
        },
    }

    return $fetch<T>(url, { method: 'POST', ...defaultOptions, ...opts } as any)
}