import RichTextMessage from "./RichTextMessage";
import MediaMessage from "./MediaMessage";
import Call from "../call/Call";

const Message = ({ message }) => {
  switch (message.messagetype) {
    case "Text":
    case "RichText":
      return <RichTextMessage message={message} />;
    case "Event/Call":
      return <Call message={message} />;
    case "RichText/Media_CallRecording":
    case "RichText/Media_Video":
    case "RichText/UriObject":
    case "RichText/Media_GenericFile":
    case "RichText/Media_Album":
    case "PopCard":
      return <MediaMessage message={message} />;
    default:
      return <div>Unhandled message type: {message.messagetype}</div>;
  }
};

export default Message;
