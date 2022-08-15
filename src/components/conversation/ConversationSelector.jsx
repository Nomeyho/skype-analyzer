import { ChevronDownIcon } from "@heroicons/react/solid";

const getConversations = (data) =>
  data.conversations
    .map((conversation, i) => ({ conversation, i }))
    .filter(({ conversation }) => !conversation.id.includes("calllog"));

const getConversationByIndex = (data, index) => data.conversations[index];

const ConversationSelector = ({ data, onChange }) => {
  const _onChange = (e) => {
    const conversation = getConversationByIndex(data, e.target.value);
    onChange(conversation);
  };

  return (
    <div className="w-64">
    <select
      onChange={_onChange}
      class="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
    >
      <option value="none" selected disabled hidden>Select a conversation</option>
      {getConversations(data).map(({ conversation, i }) => (
        <option value={i}>{conversation.displayName}</option>
      ))}
    </select>
    </div>
  );
};

export default ConversationSelector;
