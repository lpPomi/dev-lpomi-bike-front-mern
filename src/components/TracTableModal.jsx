import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { useTable } from 'react-table';

import USERS from '../data/tableDataNew.js';
//import COLUMNS from '../data/columnsNew';

import { useNavigate } from 'react-router';


function TracTableModal() {



  const navigate = useNavigate();

  const handleClickEditRow = (objecRows) => {

    /* here we can show the values from the table in a tailwind modal */

    /* at this momemt we show the json data in the console */
    console.log(objecRows.row.values);

    /* but we can call other component with navigate */
    navigate('/update');

  };

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id"
      },
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      },
      {
        Header: "Status",
        accessor: "status"
      },
      {
        Header: "Action",
        accessor: "action",

        Cell: (cellObj) => (
          <div>
            {/*   {console.log(cellObj)} */}
            {/* we can here call a function within this component or 
            navigate to another component with the navigate react hook */}

            {/* example we call the internal function handleClickEditRow */}
            <button onClick={() => handleClickEditRow(cellObj)}>Edit</button>

            {/* or we navigate to another component */}
            {/*  <button onClick={() => navigate('/update')}>Edit</button > */}

            {/* <div>
              {cellObj.row.values.id}
            </div> */}
          </div>

        )

        /*  Cell: ({ value }) => (
           <div>
             {console.log(value)}
             <button onClick={() => handleEdit(value)}>Edit</button>
           </div>
         ) */
      }
    ],
    []
  );


  /*   the useMemo hook recomends to memorize the rows in columns */
  const data = useMemo(() => USERS, []);
  //const columns = useMemo(() => COLUMNS, []);


  /*  with jsx shorthand syntax 
      useTable return the table instance
  */
  const tableInstance = useTable({
    columns,
    data
  });


  /* destructuring props & methods from the tableInstance 
      to enable easy the table creation 
    */
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = tableInstance;




  return (
    <div >

      <div className='mb-5 text-2xl flex justify-start '>
        List Test Table with Edit Button
      </div >

      {/* render all necessary UI into the table */}

      <table className="table-auto border"  {...getTableProps()}>

        {/* creater the header section with react-table */}

        {/* thead with react-table */}
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className="font-bold px-4 border-b text-left bg-cyan-300" {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        {/* tbody with react-table */}
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr className="border-b" {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td className="px-6 py-4 bg-green-500" {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>

      </table>

    </div >

  );
}

export default TracTableModal;