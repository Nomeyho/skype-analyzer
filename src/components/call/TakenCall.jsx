import { getDuration } from './utils';
import DisplayDate from '../date/DisplayDate';

const TakenCall = ({ message, doc }) => {
  const duration = getDuration(doc);
  const durationSeconds = (duration / 60).toFixed(0); // TODO better handle hours/min/seconds

  return (
    <div className="flex justify-center m-3">
      <div className="text-gray-600">
        Call for {durationSeconds} minutes <DisplayDate date={message.originalarrivaltime} />
      </div>
    </div>
  );
};

export default TakenCall;
