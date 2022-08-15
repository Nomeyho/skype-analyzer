import Message from "../message/Message";

const ConversationEmpty = () => <div>No mesage</div>;

const Messages = ({ conversation }) =>
  conversation.MessageList.map((message) => <Message message={message} />);

const Conversation = ({ conversation }) => (
  <div>
    <div>Name: {conversation.displayName}</div>
    {conversation.MessageList?.length > 0 ? (
      <Messages conversation={conversation} />
    ) : (
      <ConversationEmpty />
    )}
  </div>
);

export default Conversation;
