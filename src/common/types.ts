export interface Pagination {
  pageNumber: number
  pageSize: number
  totalElement: number
  totalPage: number
}

export type AccountRole = 'CRM_ADMIN' | 'RDN_TEACHER' | 'RDN_STUDENT'

export type CareStatus = 'EXPIRATION_IMMINENT' | 'EXPIRED' | 'IN_USE'

export interface User {
  accessToken: string
  accountRole: AccountRole
  userName: string
}
