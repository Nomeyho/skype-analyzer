
const FirstMessageStatistic = ({ statistics }) => {
  const numberDays = Math.ceil(
    (statistics.lastMessage - statistics.firstMessage) / (1000 * 3600 * 24)
  );
  
  return (
    <div>
       <div>Number days: {numberDays}</div>
    </div>
  );
};

export default FirstMessageStatistic;
