
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import Search from 'apollo-react-next/components/Search';
import IconButton from 'apollo-react-next/components/IconButton';
import Button from 'apollo-react-next/components/Button';
import Select from 'apollo-react-next/components/Select';

import columns from './columns';
import rows from './rowdata'; 
import Table from 'apollo-react-next/components/Table';
import Typography from 'apollo-react-next/components/Typography';
import MenuItem from 'apollo-react-next/components/MenuItem';

const styles = {
  root: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  
};



export class TablePaginationActions extends React.Component {
  state = {
    pageNumberInputValue: this.props.page + 1,
  };
  get numberOfPages() {
    const { count, rowsPerPage } = this.props;
    return Math.ceil(count / rowsPerPage);
  }
  setPageNumberInputValue = pageNumberInputValue => {
    this.setState({ pageNumberInputValue });
  };
  componentDidMount() {
    const { page } = this.props;
    this.setPageNumberInputValue(page + 1);
  }
  componentWillReceiveProps(nextProps) {
    const { pageNumberInputValue } = this.state;
    if (nextProps.page !== +pageNumberInputValue + 1) {
      this.setPageNumberInputValue(nextProps.page + 1);
    }
  }
  handlePageNumberInputChange = event => {
    const value = event.target.value;
    //sync state and entered value
    this.setPageNumberInputValue(value);
    //navigate to entered page number if valid
    const pageNumber = +value;
    if (pageNumber && pageNumber <= this.numberOfPages) {
      this.props.onChangePage(pageNumber - 1);
    }
  };
  handleFirstPageButtonClick = () => {
    this.props.onChangePage(0);
  };
  handlePrevButtonClick = () => {
    const { onChangePage, page } = this.props;
    onChangePage(page - 1);
  };
  handleNextButtonClick = () => {
    const { onChangePage, page } = this.props;
    onChangePage(page + 1);
  };
  handleLastPageButtonClick = () => {
    const { onChangePage, count, rowsPerPage } = this.props;
    onChangePage(Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  render() {
    const { page, count, rowsPerPage, classes } = this.props;
    const { pageNumberInputValue } = this.state;
    const numberOfDigits = `${this.numberOfPages}`.length;
    return (
      <div className={classes.root}>
        {/* <Button onClick={this.handleFirstPageButtonClick} disabled={page === 0}>
          First
        </Button> */}
        <IconButton onClick={this.handlePrevButtonClick} disabled={page === 0}>
          <KeyboardArrowLeft className={classes.previousIcon} />
        </IconButton>
        <Select
          className={classes.pageNumberInput}
          style={{ width: 40 + 10 * numberOfDigits , paddingBottom:16, paddingRight:8} }
          value={pageNumberInputValue}
          onChange={event => this.handlePageNumberInputChange(event)}
        >
              
              <MenuItem value="1">{'1'}</MenuItem>
              <MenuItem value="2">{'2'}</MenuItem>
              <MenuItem value="3">{'3'}</MenuItem>
              <MenuItem value="4">{'4'}</MenuItem>
              <MenuItem value="5">{'5'}</MenuItem>
              <MenuItem value="6">{'6'}</MenuItem>
              <MenuItem value="7">{'7'}</MenuItem>
              <MenuItem value="8">{'8'}</MenuItem>
              
          </Select>
        <Typography>{`of ${this.numberOfPages}`}</Typography>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        >
          <KeyboardArrowRight />
        </IconButton>
        {/* <Button
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        >
          Last
        </Button> */}
      </div>
    );
  }
}
export const CustomHeader = ({ toggleFilters }) => (
  <div>
    <Button 
    style={{ marginTop:8, marginRight:8} }color="secondary" variant="outlined" onClick={toggleFilters}>
      {'Filter'}
    </Button>
    <Search style={{ margin: 0, marginBottom: 8}} placeholder="Search" />
  </div>
);

export const Table1 = () => (
  <Table
    title="Employees"
    subtitle="Manage your employees"
    columns={columns}
    rows={rows}
    initialSortedColumn="name"
    initialSortOrder="asc"
    rowsPerPageOptions={[5, 10, 15]}
    tablePaginationProps={{ ActionsComponent: withStyles(styles)(TablePaginationActions) }}
    CustomHeader={withStyles(styles)(CustomHeader)}
  />
);


export default Table1;
