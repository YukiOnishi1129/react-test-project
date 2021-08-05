/**
 * sampleApi.spec
 * @package apis
 */
/* apis */
import { getSampleData } from './sampleApi'
/* types */
import { SampleData } from '@/types/sample'

describe('【APIテスト】sampleApi test', () => {
  let sampleState: SampleData
  describe('【関数テスト】getSampleData', () => {
    beforeEach(() => {
      sampleState = {
        id: 0,
        title: 'テスト',
        createdAt: '2020-01-01 00:00:00',
        updatedAt: '2020-01-01 00:00:00',
        deleteFlg: false,
      }
    })
    test('【正常系】処理が正常に動作する', async () => {
      // 関数をmock化
      const apiMock = jest.fn(getSampleData)
      // mock関数の戻り値を設定する
      const apiMockFUnc = apiMock.mockReturnValue(Promise.resolve(sampleState))

      expect(await apiMockFUnc()).toEqual(sampleState)
    })
  })
})
