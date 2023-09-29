import { useQuery } from '@tanstack/react-query';

import { governanceApi } from '@/api/governance/governanceApi';
import {
  GetCollaborationRequest,
  GetCollaborationResponse,
  GetCollaborationSuccessResponse,
  GetDAOGovernanceRequest,
  GetDAOGovernanceResponse,
  GetDAOGovernanceSuccessResponse,
  GetNakamotoCoefficientRequest,
  GetNakamotoCoefficientResponse,
  GetNakamotoCoefficientSuccessResponse,
} from '@/api/governance/governanceApi.types';
import { apiConfig } from '@/utils/constants';
import { queryKeys } from '@/utils/react-query-keys';
import { ApiError } from '@/utils/types';

export const governanceApiGateway = {
  useGetNakamotoCoefficient: (parameters: GetNakamotoCoefficientRequest) =>
    useQuery<
      GetNakamotoCoefficientResponse,
      ApiError,
      GetNakamotoCoefficientSuccessResponse
    >(queryKeys.governanceKeys.useGetNakamotoCoefficient(parameters), {
      queryFn: () => governanceApi.getNakamotoCoefficient(parameters),
      staleTime: apiConfig.staleTime,
    }),

  useGetDAOGovernance: (parameters: GetDAOGovernanceRequest) =>
    useQuery<
      GetDAOGovernanceResponse,
      ApiError,
      GetDAOGovernanceSuccessResponse
    >(queryKeys.governanceKeys.useGetDAOGovernance(parameters), {
      queryFn: () => governanceApi.getDAOGovernance(parameters),
      staleTime: apiConfig.staleTime,
    }),

  useGetCollaboration: (parameters: GetCollaborationRequest) =>
    useQuery<
      GetCollaborationResponse,
      ApiError,
      GetCollaborationSuccessResponse
    >(queryKeys.governanceKeys.useGetCollaboration(parameters), {
      queryFn: () => governanceApi.getCollaboration(parameters),
      staleTime: apiConfig.staleTime,
    }),
};
