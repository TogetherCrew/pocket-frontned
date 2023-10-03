import { useQuery } from '@tanstack/react-query';

import { poktApi } from '@/api/pokt/pokt';
import {
  GetAnnualizedYieldRequest,
  GetAnnualizedYieldResponse,
  GetAnnualizedYieldSuccessResponse,
  GetCoverageRatioRequest,
  GetCoverageRatioResponse,
  GetCoverageRatioSuccessResponse,
  GetLiquidityRequest,
  GetLiquidityResponse,
  GetLiquiditySuccessResponse,
} from '@/api/pokt/pokt.types';
import { apiConfig } from '@/utils/constants';
import { queryKeys } from '@/utils/react-query-keys';
import { ApiError } from '@/utils/types';

export const poktApiGateway = {
  useGetLiquidity: (parameters: GetLiquidityRequest) =>
    useQuery<GetLiquidityResponse, ApiError, GetLiquiditySuccessResponse>(
      queryKeys.poktKeys.useGetLiquidity(parameters),
      {
        queryFn: () => poktApi.getLiquidity(parameters),
        staleTime: apiConfig.staleTime,
      },
    ),

  useGetCoverageRatio: (parameters: GetCoverageRatioRequest) =>
    useQuery<
      GetCoverageRatioResponse,
      ApiError,
      GetCoverageRatioSuccessResponse
    >(queryKeys.poktKeys.useGetCoverageRatio(parameters), {
      queryFn: () => poktApi.getCoverageRatio(parameters),
      staleTime: apiConfig.staleTime,
    }),

  useGetAnnualizedYield: (parameters: GetAnnualizedYieldRequest) =>
    useQuery<
      GetAnnualizedYieldResponse,
      ApiError,
      GetAnnualizedYieldSuccessResponse
    >(queryKeys.poktKeys.useGetAnnualizedYield(parameters), {
      queryFn: () => poktApi.getAnnualizedYield(parameters),
      staleTime: apiConfig.staleTime,
    }),
};
