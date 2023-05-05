export const getBaseUrl = (url: string) =>
  url.startsWith('/api') ? '' : process.env.NEXT_PUBLIC_API_BASE_URL;
