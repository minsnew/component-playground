import { API_BASE_URL } from '@/common/consts/api'
import axios from 'axios'
import * as qs from 'qs'

const Service = axios.create({
  baseURL: API_BASE_URL,
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: 'repeat', allowDots: true }),
  timeout: 60 * 1000,
  withCredentials: true,
})

export default Service
