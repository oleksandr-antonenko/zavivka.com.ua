import { RootState } from '../store';

export const selectAllTeamMembers = (state: RootState) => state.team.listOfTeam;

export const selectMenTeamMembers = (state: RootState) =>
  state.team.listOfTeam.filter((member) => member.isMen);

export const selectTeamMemberBySlug = (state: RootState, slug: string) =>
  state.team.listOfTeam.find((member) => member.slug === slug);
