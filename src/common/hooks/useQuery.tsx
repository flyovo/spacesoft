import { useQuery as useQueryOrigin } from 'react-query';
import type { QueryFunction, QueryKey, UseQueryOptions } from 'react-query';

export function useQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  > = {},
) {
  const { onError } = options;

  return useQueryOrigin<TQueryFnData, TError, TData, TQueryKey>(
    queryKey,
    queryFn,
    {
      ...options,
      useErrorBoundary: !onError,
    },
  );
}
