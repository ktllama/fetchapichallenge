import DataCell from "./DataCell";

const DataRow = ({ data }) => {
    return(
        <tr>
            {Object.entries(data).map(([key, value]) => {
                return(
                    <DataCell key={key} cellData={JSON.stringify(value)} />
                )
            })}
        </tr>
    )
};

//called object.entries and then map allows us to map through the map and destructure the key value pair of each different property as we iterate through it
//passing the value stringifies because some of the values are objects
export default DataRow;
