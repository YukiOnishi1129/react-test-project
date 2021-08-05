/**
 * axios初期設定
 * @package config
 */
import axios from 'axios'

const globalAxios = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
})

export default globalAxios
