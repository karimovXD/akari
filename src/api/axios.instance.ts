import { API_URL } from '@/configs/axios.config'
import type { DefaultJikanParams } from "./jikan.type";
import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    params: {
        sfw: true,
    } as DefaultJikanParams,
})