
const DisplayDate = ({ date }) => {
  const parsedDate = new Date(date);
  return (
    <span>
        at {parsedDate.getHours()}:{parsedDate.getMinutes()} on {parsedDate.toLocaleDateString()}
    </span>
  );
};

export default DisplayDate;
