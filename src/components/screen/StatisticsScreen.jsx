import { useState } from "preact/hooks";
import Conversation from "../conversation/Conversation";
import ConversationSelector from "../conversation/ConversationSelector";
import data from "../../../data/messages.json";
import Statistics from "../statistics/Statistics";

const StatisticsEmpty = () => <div>Select a conversation</div>;

const StatisticsContent = ({ conversation }) => (
  <>
    <Statistics conversation={conversation} />
    <Conversation conversation={conversation} />
  </>
);

const StatisticsScreen = () => {
  const [conversation, setConversation] = useState(null);

  return (
    <div>
      <div>Export date: {data.exportDate}</div>
      <div>
        <ConversationSelector data={data} onChange={setConversation} />
        {conversation ? (
          <StatisticsContent conversation={conversation} />
        ) : (
          <StatisticsEmpty />
        )}
      </div>
    </div>
  );
};

export default StatisticsScreen;
