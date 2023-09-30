import {
  GetAdaptabilityRequest,
  GetAwarenessRequest,
  GetCommunityAndCollaborationRequest,
  GetTransparencyRequest,
} from '@/api/community/communityApi.types';
import {
  GetDAOGovernanceRequest,
  GetNakamotoCoefficientRequest,
} from '@/api/governance/governanceApi.types';
import { GetDemandRequest } from '@/api/protocol/protocolApi.types';
import { createKeyFactory } from '@/utils/query-key-factory';

const communityKeys = createKeyFactory('community', {
  useGetCommunityAndCollaboration: (
    params: GetCommunityAndCollaborationRequest,
  ) => Object.values(params),

  useGetAwareness: (params: GetAwarenessRequest) => Object.values(params),

  useGetTransparency: (params: GetTransparencyRequest) => Object.values(params),

  useGetAdaptability: (params: GetAdaptabilityRequest) => Object.values(params),
});

const governanceKeys = createKeyFactory('governance', {
  useGetNakamotoCoefficient: (params: GetNakamotoCoefficientRequest) =>
    Object.values(params),

  useGetDAOGovernance: (params: GetDAOGovernanceRequest) =>
    Object.values(params),

  useGetCollaboration: (params: GetDAOGovernanceRequest) =>
    Object.values(params),
});

const protocolKeys = createKeyFactory('protocol', {
  useGetProtocolUpgrade: () => [null],

  useGetDemand: (params: GetDemandRequest) => Object.values(params),
});

export const queryKeys = {
  communityKeys,
  governanceKeys,
  protocolKeys,
};