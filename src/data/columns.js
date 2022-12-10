/*   export const COLUMNS = [ */

/* import { format } from 'date-fns'; */

import moment from 'moment';

export default [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'ave-vel',
    accessor: 'averSpeed',
  },
  {
    Header: 'tot-km',
    accessor: 'kmTotal',
  },
  {
    Header: 'max-vel',
    accessor: 'maxSpeed',
  },
  {
    Header: 'ride-hor',
    accessor: 'rideHours',
  },
  {
    Header: 'ride-m',
    accessor: 'rideMin',
  },
  {
    Header: 'tour.mod',
    accessor: 'tourMode',
  },
  {
    Header: 'tour.tro',
    accessor: 'tourTrouble',
  },
  {
    Header: 'wheather',
    accessor: 'weather',
  },
  {
    Header: 'date',
    accessor: 'tracDate',
    /*  Cell: ({ value }) => {
      //  return format(new Date(value), 'DD/MM/yyyy'); 
      //     return moment(value).format('DD-MM-yyyy'); 
      return moment().format('YYYY-MM-DD');
    }, */
  },
];
