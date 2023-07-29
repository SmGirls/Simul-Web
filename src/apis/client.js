import axios from 'axios'

const apiClient = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  },
  baseURL: 'localshot:7000',
})
export default apiClient
