
const LastMessageStatistic = ({ statistics }) => {
  return (
    <div>
      <div>Last message: {statistics.lastMessage.toISOString()}</div>
    </div>
  );
};

export default LastMessageStatistic;
