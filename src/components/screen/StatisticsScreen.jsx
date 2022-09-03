import { useEffect } from "preact/hooks";
import Conversation from "../conversation/Conversation";
import ConversationSelector from "../conversation/ConversationSelector";
import { useAtom } from "jotai";
import Statistics from "../statistics/Statistics";
import Layout from "../layout/Layout";
import {
  fileAtom,
  selectedConversationAtom,
  exportDateAtom,
} from "../../store";
import { useNavigate } from "react-router-dom";

const StatiticsScreenHeader = () => {
  const [exportDate] = useAtom(exportDateAtom);

  return (
    <div class="flex flex-col items-center justify-center mt-8">
      <h1 class="text-4xl tracking-tight font-bold text-white">
        Skype Analyzer
      </h1>
      <h2 class="text-3xl tracking-tight text-sky-200 mt-2 mb-8">
        Exported on {new Date(exportDate).toLocaleString()}
      </h2>
      <ConversationSelector />
    </div>
  );
};

const StatisticsScreenContent = () => {
  const [selectedConversation] = useAtom(selectedConversationAtom);

  return (
      <div className="max-w-5xl">
        {selectedConversation && (
          <>
            <Statistics conversation={selectedConversation} />
            <Conversation conversation={selectedConversation} />
          </>
        )}
      </div>
  );
};

const StatisticsScreen = () => {
  const navigate = useNavigate();
  const [file] = useAtom(fileAtom);

  useEffect(() => {
    if (!file.json) {
      navigate("/");
    }
  })

  if (!file.json) {
    return <></>;
  }

  return (
    <Layout
      header={<StatiticsScreenHeader />}
      content={<StatisticsScreenContent />}
    />
  );
};

export default StatisticsScreen;
