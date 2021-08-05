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
 * @param {number} targetId
 * @returns {Promise<SampleData | undefined>}
 */
export const getSampleData = async (
  targetId: number
): Promise<SampleData | undefined> => {
  try {
    const res = await globalAxios.get(BASE_URL + `/${targetId}`)
    if (!res) return
    return {
      id: res.data.id,
      title: res.data.title,
      createdAt: res.data.createdAt,
      updatedAt: res.data.updatedAt,
      deleteFlg: res.data.deleteFlg,
    }
  } catch (error) {
    throw new Error(`API ERROR: getSampleData`)
  }
}
