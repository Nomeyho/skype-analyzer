const MediaMessage = ({ message }) => (
  <>
    <div>[{message.originalarrivaltime}]</div>
    <div>{message.displayName}</div>
    <div>MEDIA</div>
    <hr />
  </>
);

export default MediaMessage;
