import { useQuery } from '@tanstack/react-query';

import {
  GetDemandRequest,
  GetDemandResponse,
  GetDemandSuccessResponse,
  GetProtocolUpgradeResponse,
  GetProtocolUpgradeSuccessResponse,
} from '@/api/protocol/protocolApi.types';
import { protocolApi } from '@/api/protocol/ptotocolApi';
import { apiConfig } from '@/utils/constants';
import { queryKeys } from '@/utils/react-query-keys';
import { ApiError } from '@/utils/types';

export const protocolApiGateway = {
  useGetProtocolUpgrade: () =>
    useQuery<
      GetProtocolUpgradeResponse,
      ApiError,
      GetProtocolUpgradeSuccessResponse
    >(queryKeys.protocolKeys.useGetProtocolUpgrade(), {
      queryFn: protocolApi.getProtocolUpgrade,
      staleTime: apiConfig.staleTime,
    }),

  useGetDemand: (parameters: GetDemandRequest) =>
    useQuery<GetDemandResponse, ApiError, GetDemandSuccessResponse>(
      queryKeys.protocolKeys.useGetDemand(parameters),
      {
        queryFn: () => protocolApi.getDemand(parameters),
        staleTime: apiConfig.staleTime,
      },
    ),
};
