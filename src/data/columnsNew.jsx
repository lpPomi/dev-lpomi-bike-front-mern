/* to use with TracTableNew */


function handleEdit(row) {
  console.log(row);
}


export default [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Action',
    accessor: 'action',
    Cell: ({ value }) => (
      <div>
        <button onClick={() => handleEdit(value)}>Edit</button>
      </div>
    ),
  },
];
