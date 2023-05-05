import type { ConfigType } from 'dayjs'
import dayjs from 'dayjs'

import 'dayjs/locale/ko'
import type { CareStatus } from '../types'

export const formatPhonenumber = (value: string) => {
  const cleaned = value.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/)

  return match ? `${match[1]}-${match[2]}-${match[3]}` : cleaned
}

export const formatDateOfBirth = (
  value: string | number,
  dateFormat: string
) => {
  return dayjs(value).format(dateFormat)
}

export const formatDateToYYYYMMDD = (value: ConfigType) =>
  dayjs(value).format('YYYY-MM-DD')

export const formatDateToYYYYMMDDddd = (
  value: ConfigType,
  dayNameFormat: string
) => dayjs(value).locale('ko').format(`YYYY-MM-DD ${dayNameFormat}`)
