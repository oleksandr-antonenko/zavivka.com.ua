import DynamicTeamContainer from '@/components/team/dynamic-team-page/dynamic-team-container';

const DynamicTeamPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return <DynamicTeamContainer slug={slug} />;
};

export default DynamicTeamPage;
