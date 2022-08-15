
const ParticipantStatistic = ({ statistics }) => {
  return (
    <div>
      <div>Participants: {statistics.participants.length}</div>
    </div>
  );
};

export default ParticipantStatistic;
