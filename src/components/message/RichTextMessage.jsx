
const RichTextMessage = ({ message }) => (
  <div>
    <div>[{message.originalarrivaltime}]</div>
    <div>{message.displayName}</div>
    <div dangerouslySetInnerHTML={{ __html: message.content }} />
    <hr />
  </div>
);

export default RichTextMessage;
