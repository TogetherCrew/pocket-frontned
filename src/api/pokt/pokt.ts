import {
  GetAnnualizedYieldRequest,
  GetAnnualizedYieldResponse,
  GetCoverageRatioRequest,
  GetCoverageRatioResponse,
  GetLiquidityRequest,
  GetLiquidityResponse,
} from '@/api/pokt/pokt.types';
import { httpClient } from '@/utils/http-client';

export const poktApi = {
  getLiquidity: ({
    timePeriod,
  }: GetLiquidityRequest): Promise<GetLiquidityResponse> =>
    httpClient.get(`/metrics/pokt/liquidity?time_period=${timePeriod}`),

  getCoverageRatio: ({
    timePeriod,
  }: GetCoverageRatioRequest): Promise<GetCoverageRatioResponse> =>
    httpClient.get(`/metrics/pokt/coverage-ratio?time_period=${timePeriod}`),

  getAnnualizedYield: ({
    timePeriod,
  }: GetAnnualizedYieldRequest): Promise<GetAnnualizedYieldResponse> =>
    httpClient.get(`/metrics/pokt/annualized-yield?time_period=${timePeriod}`),
};
