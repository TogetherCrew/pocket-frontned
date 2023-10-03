import {
  GetCollaborationRequest,
  GetCollaborationResponse,
  GetDAOGovernanceRequest,
  GetDAOGovernanceResponse,
  GetNakamotoCoefficientRequest,
  GetNakamotoCoefficientResponse,
} from '@/api/governance/governanceApi.types';
import { httpClient } from '@/utils/http-client';

export const governanceApi = {
  getNakamotoCoefficient: ({
    timePeriod,
  }: GetNakamotoCoefficientRequest): Promise<GetNakamotoCoefficientResponse> =>
    httpClient.get(
      `/metrics/governance/nakamoto-coefficient?time_period=${timePeriod}`,
    ),

  getDAOGovernance: ({
    timePeriod,
  }: GetDAOGovernanceRequest): Promise<GetDAOGovernanceResponse> =>
    httpClient.get(
      `/metrics/governance/dao-governance?time_period=${timePeriod}`,
    ),

  getCollaboration: ({
    timePeriod,
  }: GetCollaborationRequest): Promise<GetCollaborationResponse> =>
    httpClient.get(
      `/metrics/governance/collaboration?time_period=${timePeriod}`,
    ),
};
