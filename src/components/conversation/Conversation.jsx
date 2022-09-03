import Message from "../message/Message";

const Messages = ({ conversation }) =>
  conversation.MessageList.map((message) => <Message message={message} />);

const Conversation = ({ conversation }) => (
  <div className="mx-16 my-16 max-w-3xl flex flex-col h-screen overflow-y-auto overflow-x-hidden">
    <h1 className="text-3xl tracking-tight font-bold text-gray-800 mb-2">
        Conversation
    </h1>
    <hr className="mb-4"/>
    {conversation.MessageList?.length > 0 && (
      <Messages conversation={conversation} />
    )}
  </div>
);

export default Conversation;
