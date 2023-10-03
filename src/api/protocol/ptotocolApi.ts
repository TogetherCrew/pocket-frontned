import {
  GetDemandRequest,
  GetDemandResponse,
  GetProtocolUpgradeResponse,
} from '@/api/protocol/protocolApi.types';
import { httpClient } from '@/utils/http-client';

export const protocolApi = {
  getProtocolUpgrade: (): Promise<GetProtocolUpgradeResponse> =>
    httpClient.get(`/metrics/protocol/protocol-upgrade`),

  getDemand: ({ timePeriod }: GetDemandRequest): Promise<GetDemandResponse> =>
    httpClient.get(`/metrics/protocol/demand?time_period=${timePeriod}`),
};
