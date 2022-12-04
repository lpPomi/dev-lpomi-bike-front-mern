
import { useMemo } from 'react';
import { useTable } from 'react-table';

import USERS from '../data/tableData.js';
import COLUMNS from '../data/columns.js';


function tracTable() {


  /*   the useMemo hook recomends to memorize the rows in columns */
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => USERS, []);

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
        List Ride Tracking
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

export default tracTable;;