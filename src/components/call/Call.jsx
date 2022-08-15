import TakenCall from "./TakenCall";
import MissedCall from "./MissedCall";
import { parseDocument, getType } from './utils';

const Call = ({ message }) => {
  const doc = parseDocument(message);
  const type = getType(doc);

  switch (type) {
    case "started":
      break;
    case "ended":
      return <TakenCall doc={doc} message={message} />;
    case "missed":
      return <MissedCall message={message} />;
    default:
      return <div>Unhandled call type: {message.messagetype}</div>;
  }
};

export default Call;
