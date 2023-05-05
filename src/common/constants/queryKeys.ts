const ACCOUNT_ALL = ['account-manager', 'crm'] as const;
const LETTER_ALL = ['communications'] as const;
const REPORT_ALL = ['learning-data', 'reports'] as const;
const COURSE_ALL = ['courses'] as const;

export const queryKeys = {
  /** ACCOUNT */
  account_list: (filters?: object) =>
    filters
      ? [...ACCOUNT_ALL, 'accounts', filters]
      : [...ACCOUNT_ALL, 'accounts'],
  account_detail: (accountId: string) => [
    ...ACCOUNT_ALL,
    'accounts',
    accountId,
  ],

  /** LETTER */
  letter_list: () => [...LETTER_ALL, 'letters'] as const,
  letter_list_status: () => [...queryKeys.letter_list(), 'status'] as const,
  letter_detail: (letterId: string) => [...LETTER_ALL, 'letter', letterId],
  letter_read: (letterId: string) => [
    ...queryKeys.letter_detail(letterId),
    'read',
  ],

  /** REPORT */
  report_list: (filters?: object) =>
    filters ? [...REPORT_ALL, filters] : [...REPORT_ALL],
  report_daily: (studentReportId: string, filters: object) => [
    ...REPORT_ALL,
    studentReportId,
    'daily',
    filters,
  ],
  report_weekly: (studentReportId: string) => [
    ...REPORT_ALL,
    studentReportId,
    'weekly',
  ],
  report_summary: (studentReportId: string) => [
    ...REPORT_ALL,
    studentReportId,
    'summary',
  ],
  report_daily_details: () => [...REPORT_ALL, 'daily'] as const,
  report_recordings: (dailyReportId: string, bid: string) => [
    ...queryKeys.report_daily_details(),
    dailyReportId,
    'recordings',
    bid,
  ],
  report_weekly_details: () => [...REPORT_ALL, 'weekly'] as const,
  report_feedback: (weeklyReportId: string) => [
    ...queryKeys.report_weekly_details(),
    weeklyReportId,
    'feedback',
  ],
  report_sentences: (weeklyReportId: string) => [
    ...queryKeys.report_weekly_details(),
    weeklyReportId,
    'sentences',
  ],

  /** COURSE */
  course_level_list: [...COURSE_ALL, 'levels'] as const,
};
