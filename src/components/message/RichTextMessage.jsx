import DisplayDate from '../date/DisplayDate';

const RichTextMessage = ({ from, fromMe, content, date }) => {
  return (
    <div className={`flex flex-col m-2 ${fromMe ? 'self-end' : 'self-start'}`} style="max-width:50%;">
      <div className="mb-1 text-gray-700 text-sm">
        <span className="font-bold">{from}</span>, <DisplayDate date={date} />
      </div>
      <div className={`${fromMe ? 'bg-sky-300 self-end' : 'bg-gray-300'} rounded-lg p-2 w-fit`}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default RichTextMessage;
