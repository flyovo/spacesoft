import type { ColumnType } from 'antd/es/table'
import { columnType, Setting } from './types'

export const ColumnByType = (type: columnType) => {
  let title = '기관명'

  switch (type) {
    case 'institutional':
      title = '기관명'
      break
    case 'department':
      title = '부서명'
      break
    case 'model':
      title = '모델명'
      break
  }

  console.log(
    Column.map((col, index) => {
      if (index === 1) col.title = title
    })
  )

  return Column.map((col, index) => {
    if (index === 1) col.title = title
    return col
  })
}

export const Column: ColumnType<Setting>[] = [
  {
    title: 'idx',
    key: 'idx',
    dataIndex: 'idx',
    align: 'center'
  },
  {
    title: '기관명',
    key: 'name',
    dataIndex: 'name',
    align: 'center'
  }
]
