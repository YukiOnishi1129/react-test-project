/**
 * sampleApi.spec
 * @package apis
 */
/* apis */
import { getSampleData } from './sampleApi'
/* types */
import { SampleData } from '@/types/sample'

describe('【APIテスト】sampleApi test', () => {
  let targetId: number
  let sampleState: SampleData
  describe('【関数テスト】getSampleData', () => {
    beforeEach(() => {
      targetId = 1
      sampleState = {
        id: 0,
        title: 'テスト',
        createdAt: '2020-01-01 00:00:00',
        updatedAt: '2020-01-01 00:00:00',
        deleteFlg: false,
      }
    })
    test('【正常系】処理が正常に動作する。', async () => {
      // 関数をmock化
      const apiMock = jest.fn(getSampleData)
      // mock関数の戻り値を設定する
      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(sampleState))

      expect(await apiMockFunc(targetId)).toEqual(sampleState)
    })

    test('【異常系】処理が失敗する。apiの戻り値がundefinedの場合', async () => {
      targetId = 0
      // 関数をmock化
      const apiMock = jest.fn(getSampleData)
      // mock関数の戻り値を設定する (undefined)
      const apiMockFunc = apiMock.mockReturnValue(Promise.resolve(undefined))

      expect(await apiMockFunc(targetId)).toEqual(undefined)
    })

    test('【異常系】処理が失敗する。例外処理が発生した場合', async () => {
      targetId = -1
      // 関数をmock化
      const apiMock = jest.fn(getSampleData)
      // mock関数を敢えて失敗させるよう設定する
      const apiMockFunc = apiMock.mockReturnValue(Promise.reject('error'))

      try {
        await apiMockFunc(targetId)
      } catch (error) {
        expect(error).toMatch('error')
      }
    })
  })
})
