
const FirstMessageStatistic = ({ statistics }) => {
  return (
    <div>
      <div>First message: {statistics.firstMessage.toISOString()}</div>
    </div>
  );
};

export default FirstMessageStatistic;
