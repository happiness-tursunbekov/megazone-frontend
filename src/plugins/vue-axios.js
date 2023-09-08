import axios from "axios"

let axiosInstance = null;

export default {
    install: (app, options) => {
        axios.defaults.baseURL = app.config.globalProperties.$config.baseURL

        axios.ssrData = {}

        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            app.config.globalProperties.$pace.start();
            return config;
        }, function (error) {
            // Do something with request error
            app.config.globalProperties.$pace.finish();
            return Promise.reject(error);
        });

        axios.interceptors.response.use(function (response) {
            // Do something with response data
            app.config.globalProperties.$pace.finish();
            return response;
        }, function (error) {
            // Do something with response error
            app.config.globalProperties.$pace.finish();
            if (error.response.status === 422) {
                for (let field in error.response.data.errors)
                    for (let msg of error.response.data.errors[field])
                        app.config.globalProperties.$snotify.error(msg)
            }
            return Promise.reject(error);
        });

        app.config.globalProperties.axios = axios
        axiosInstance = axios
    }
}

export function useAxios() {
    return {
        getUri(config) {
            return axiosInstance.getUri(config)
        },
        request(config) {
            return axiosInstance.request(config)
        },
        get(url, config) {
            const identifier = url + (config && config.params ? JSON.stringify(config.params) : '')
            if (import.meta.env.SSR)
                return axiosInstance.get(url, config).then(res => {
                    axiosInstance.ssrData[identifier] = { headers: res.headers, data: res.data}
                    return res
                })
            else {
                if (document.ssrData && document.ssrData[identifier]) {
                    const res = document.ssrData[identifier]
                    delete document.ssrData[identifier]
                    if (Object.keys(document.ssrData).length === 0)
                        delete document.ssrData
                    return Promise.resolve(res)
                } else
                    return axiosInstance.get(url, config)
            }
        },
        delete(url, config) {
            return axiosInstance.delete(url, config)
        },
        head(url, config) {
            return axiosInstance.head(url, config)
        },
        options(url, config) {
            return axiosInstance.options(url, config)
        },
        post(url, data, config) {
            return axiosInstance.post(url, data, config)
        },
        put(url, data, config) {
            return axiosInstance.put(url, data, config)
        },
        patch(url, data, config) {
            return axiosInstance.patch(url, data, config)
        },
        setToken(token) {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }
}

export async function loadUser(app) {
    await app.config.globalProperties.$store.dispatch('fetchUser')
}