import RichTextMessage from "./RichTextMessage";
import Call from "../call/Call";
import { useAtom } from "jotai";
import { userIdAtom } from "../../store";

const Message = ({ message }) => {
  const [userId] = useAtom(userIdAtom);
  const fromMe = userId === message.from;

  switch (message.messagetype) {
    case "Text":
    case "RichText":
      return <RichTextMessage content={message.content} from={message.from} fromMe={fromMe} date={message.originalarrivaltime} />;
    case "Event/Call":
      return <Call message={message} />;
    case "RichText/Media_CallRecording":
    case "RichText/Media_Video":
    case "RichText/UriObject":
    case "RichText/Media_GenericFile":
    case "RichText/Media_Album":
    case "PopCard":
      return <RichTextMessage content={"Media"} from={message.from} fromMe={fromMe} date={message.originalarrivaltime} />;
    default:
      console.log(`Unhandled message: ${message}`);
  }
};

export default Message;
