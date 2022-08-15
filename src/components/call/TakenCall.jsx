import { getDuration } from './utils';

const TakenCall = ({ message, doc }) => {
  const duration = getDuration(doc);
  
  return (
    <>
      <div>[{message.originalarrivaltime}]</div>
      <div>Duration: {duration}</div>
      <hr />
    </>
  );
};

export default TakenCall;
