import DisplayDate from '../date/DisplayDate';

const MissedCall = ({ message }) => {
  return (
    <div className="flex justify-center m-3">
      <div className="text-gray-600">
        Misssed call <DisplayDate date={message.originalarrivaltime} />
      </div>
    </div>
  );
};

export default MissedCall;
