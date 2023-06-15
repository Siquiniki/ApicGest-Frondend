import Proptypes from 'prop-types';

const Table = ({ head, bodyData }) => {
  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          {head.map((item, key) => (
            <th key={key} scope="col">
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyData.map((item, key) => (
          <tr key={key}>
            {head.map((itemy, index) => (
              <td key={index}>{item[itemy.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Table.propTypes = {
  head: Proptypes.array,
  bodyData: Proptypes.array,
};

export default Table;
