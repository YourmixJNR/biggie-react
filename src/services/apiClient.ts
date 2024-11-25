import axios, { AxiosError, AxiosResponse } from 'axios'
import { env, API_CONFIG, APP_CONSTANTS } from '../config'
import { storage } from '../utils'

let API_ENDPOINT
if (!env.API_URL)
  throw new Error(
    "Confirm 'REACT_APP_API_URL' is set in the environment variables; create one if it's not there",
  )

API_ENDPOINT = env.API_URL

const apiClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': API_CONFIG.HEADERS['Content-Type'],
    'Accept': API_CONFIG.HEADERS['Accept'],
  },
})

apiClient.interceptors.request.use(
  async (request: any) => {
    const token = await storage.getAuthToken()

    // Attach token to make api request
    if (token) {
      request.headers = { ...request.headers, authorization: `Bearer ${token}` }
    } else {
      request.headers = {
        ...request.headers,
        authorization: request?.headers?.authorization || '',
      }
    }

    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  async (response: AxiosResponse<any, any>) => {
    return response
  },
  async (error: AxiosError) => {
    if (error.response?.status && error.response?.status === APP_CONSTANTS.HTTP_STATUS.UNAUTHORIZED) {
      // If the token is invalid, remove it from storage and redirect to login page
    }
    return Promise.reject(error)
  },
)

export default apiClient