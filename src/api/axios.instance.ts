import { API_URL } from '@/configs/axios.config'
import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: API_URL,
})