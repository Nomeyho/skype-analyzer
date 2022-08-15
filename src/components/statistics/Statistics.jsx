import { ConversationStatistics } from "./ConversationStatistics";
import DayChart from "../chart/DayChart";
import HourChart from "../chart/HourChart";
import PersonChart from "../chart/PersonChart";
import NumberMessageStatistic from './NumberMessageStatistic';
import FirstMessageStatistic from './FirstMessageStatistic';
import LastMessageStatistic from './LastMessageStatistic';
import NumberDaysStatistic from './NumberDaysStatistic';
import ParticipantStatistic from './ParticipantStatistic';

const Statistics = ({ conversation }) => {
  const statistics = new ConversationStatistics(conversation);

  return (
    <div>
      <NumberMessageStatistic statistics={statistics} />
      <FirstMessageStatistic statistics={statistics} />
      <LastMessageStatistic statistics={statistics} />
      <NumberDaysStatistic statistics={statistics} />
      <ParticipantStatistic statistics={statistics} />

      <DayChart statistics={statistics} />
      <HourChart statistics={statistics} />
      <PersonChart statistics={statistics} />
    </div>
  );
};

export default Statistics;
