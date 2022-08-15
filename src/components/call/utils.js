export const parseDocument = (message) => {
  const parser = new DOMParser();
  return parser.parseFromString(message.content, "text/xml");
};

export const getType = (doc) =>
  doc.getElementsByTagName("partlist")[0].getAttribute("type");

export const getDuration = (doc) =>
  doc.getElementsByTagName("duration")[0].innerHTML;
