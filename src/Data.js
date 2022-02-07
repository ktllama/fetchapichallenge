const Data = ({ data }) => {
  return (
    <li>
        {JSON.stringify(data)}
    </li>
  );
};
//was not accepting the map function because did not use JSON.stringify

export default Data;
