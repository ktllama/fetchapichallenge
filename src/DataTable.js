import DataRow from "./DataRow";

const DataTable = ({ dataObj }) => {
  return (
        <div className="table-container">
            <table>
                <tbody>
                    {dataObj.map(data => (
                        <DataRow key={data.id} data={data} />
                    ))}
                </tbody> 
            </table>
        </div>
  );
};

export default DataTable;
