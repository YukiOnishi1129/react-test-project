/**
 * サンプルAPI
 * @package apis
 */
/* configs */
import globalAxios from '@/config/globalAxios'
/* types */
import { SampleData } from '@/types/sample'

const BASE_URL = 'http://localhost:4000'

/**
 * サンプルデータ取得
 * @returns {Promise<SampleData | undefined>}
 */
export const getSampleData = async (): Promise<SampleData | undefined> => {
  const sampleData: SampleData = {
    id: 0,
    title: '',
    createdAt: '',
    updatedAt: '',
    deleteFlg: false,
  }
  try {
    const res = await globalAxios.get(BASE_URL)
    if (!res) return
    sampleData.id = res.data.id
    sampleData.title = res.data.title
    sampleData.createdAt = res.data.createdAt
    sampleData.updatedAt = res.data.updatedAt
    sampleData.deleteFlg = res.data.deleteFlg
  } catch (error) {
    throw new Error(`API ERROR: getSampleData`)
  }

  return sampleData
}
