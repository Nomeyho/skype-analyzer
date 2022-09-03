import { ChevronDownIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";
import { selectedConversationAtom, conversationsAtom } from "../../store";

const ConversationSelector = () => {
  const [conversations] = useAtom(conversationsAtom);
  const [selectedConversation, setSelectedConversation] = useAtom(
    selectedConversationAtom
  );

  const _onChange = (e) => {
    const id = e.target.value;
    const conversation = conversations.find((c) => c.id === id);
    setSelectedConversation(conversation);
  };

  return (
    <select
      onChange={_onChange}
      class="w-64 text-white font-medium bg-white bg-opacity-20 rounded-lg shadow-sm py-3 px-5 border border-white border-opacity-10 focus:outline-none"
    >
      <option value="none" selected disabled>
        Select a conversation
      </option>
      {conversations.map((conversation) => (
        <option
          value={conversation.id}
          selected={
            selectedConversation && selectedConversation.id == conversation.id
          }
        >
          {conversation.displayName}
        </option>
      ))}
    </select>
  );
};

export default ConversationSelector;
