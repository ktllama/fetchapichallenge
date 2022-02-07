import Data from './Data';

const DataList = ({ dataObj }) => {

return (
    <ul>
        {dataObj.map(data => (
            <Data key={data.id} data={data} />
        ))}

    </ul>
)

};

export default DataList;
