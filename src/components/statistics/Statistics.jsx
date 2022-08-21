import { ConversationStatistics } from "./ConversationStatistics";
import DayChart from "../chart/DayChart";
import HourChart from "../chart/HourChart";
import PersonChart from "../chart/PersonChart";
import Statistic from "./Statistic";

const deltaInDays = (d1, d2) => Math.ceil((d1 - d2) / (1000 * 3600 * 24));

const Statistics = ({ conversation }) => {
  const statistics = new ConversationStatistics(conversation);
  const numberDays = deltaInDays(
    statistics.lastMessage,
    statistics.firstMessage
  );
  const firstMessage = statistics.firstMessage.toLocaleDateString();
  const lastMessage = statistics.lastMessage.toLocaleDateString();
  const numberParticipants = statistics.participants.length;

  return (
    <div className="mx-8 my-8">
      <div className="flex flex-wrap items-center justify-center">
        <Statistic title="Messages" value={statistics.numberMesssages} />
        <Statistic title="Participants" value={numberParticipants} />
        <Statistic title="Days" value={numberDays} />
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <Statistic title="First Message" value={firstMessage} />
        <Statistic title="Last Message" value={lastMessage} />
      </div>
      <DayChart statistics={statistics} />
      <HourChart statistics={statistics} />
      <PersonChart statistics={statistics} />
    </div>
  );
};

export default Statistics;
