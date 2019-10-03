
// import Edit from '@material-ui/icons/Edit';
import moment from 'moment';
// import OpenInNew from '@material-ui/icons/OpenInNew';
import React from 'react';

import {
  compareDates,
  compareNumbers,
  compareStrings,
  createSelectFilterComponent,
  createStringSearchFilter,
  dateFilter,
  numberSearchFilter,
} from 'apollo-react-next/components/Table';
import DatePicker from 'apollo-react-next/components/DatePicker';
// import IconButton from 'apollo-react-next/components/IconButton';
import TextInput from 'apollo-react-next/components/TextInput';

const TextInputFilter = ({ accessor, filters, updateFilterValue }) => {
  return <TextInput value={filters[accessor]} name={accessor} onChange={updateFilterValue} />;
};

const IntegerFilter = ({ accessor, filters, updateFilterValue }) => {
  return (
    <TextInput
      value={filters[accessor]}
      name={accessor}
      onChange={updateFilterValue}
      type="number"
    />
  );
};

const DateFilter = ({ accessor, updateFilterValue }) => {
  return <DatePicker name={accessor} onChange={updateFilterValue} />;
};

const DateCell = ({ row }) => {
  return <span>{moment(row.hireDate).format('MM/DD/YYYY')}</span>;
};

// const ActionCell = ({ row }) => {
//   return (
//     <div style={{ width: 92 }}>
//       <IconButton data-id={row.employeeId} style={{ marginRight: 4 }}>
//         <Edit fontSize="small" />
//       </IconButton>
//       <IconButton data-id={row.employeeId}>
//         <OpenInNew fontSize="small" />
//       </IconButton>
//     </div>
//   );
// };

const columns = [
  {
    header: 'ID',
    accessor: 'employeeId',
    sortFunction: compareNumbers,
    fixedWidth: true,
    filterFunction: numberSearchFilter('employeeId'),
    filterComponent: IntegerFilter,
  },
  {
    header: 'Name',
    accessor: 'name',
    sortFunction: compareStrings,
    fixedWidth: true,
    filterFunction: createStringSearchFilter('name'),
    filterComponent: TextInputFilter,
  },
  {
    header: 'Department',
    accessor: 'dept',
    sortFunction: compareStrings,
    fixedWidth: true,
    filterFunction: createStringSearchFilter('dept'),
    filterComponent: createSelectFilterComponent([
      'Design',
      'Engineering',
      'Human Resources',
      'Marketing',
      'Q/A',
      'Sales',
      'Parks and Rec',
    ]),
  },
  {
    header: 'Email',
    accessor: 'email',
    sortFunction: compareStrings,
    fixedWidth: true,
    filterFunction: createStringSearchFilter('email'),
    filterComponent: TextInputFilter,
  },
  {
    header: 'Hire Date',
    accessor: 'hireDate',
    sortFunction: compareDates,
    customCell: DateCell,
    filterFunction: dateFilter('hireDate'),
    fixedWidth: true,
    filterComponent: DateFilter,
  },
  {
    header: 'Status',
    accessor: 'employmentStatus',
    sortFunction: compareStrings,
    filterFunction: createStringSearchFilter('employmentStatus'),
    fixedWidth: true,
    filterComponent: createSelectFilterComponent(['Contractor', 'Full-time']),
  },
 
];

export default columns;