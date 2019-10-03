import React from 'react';
import './App.css';
import Typography from 'apollo-react-next/components/Typography';
import Paper from 'apollo-react-next/components/Paper';
import Grid from 'apollo-react-next/components/Grid';
import Card from 'apollo-react-next/components/Card';
import CardContent from 'apollo-react-next/components/CardActions';
import CardHeader from 'apollo-react-next/components/CardHeader';
import CardMedia from 'apollo-react-next/components/CardMedia';

import Button from 'apollo-react-next/components/Button';
import IconButton from 'apollo-react-next/components/IconButton';
import SwapVert from '@material-ui/icons/SwapVert';

import MenuItem from 'apollo-react-next/components/MenuItem';
import SelectButton from 'apollo-react-next/components/SelectButton';
import reports from './reports';


const styles = {
    padding: 16,
    textAlign: 'left',
  };
 

class List extends React.Component {
  state = {
    selectedItem: reports[0],
    sortDirection: 'asc',
    sortBy: 'company',
    filter: ''
  };

  handleChangeCard = (index) => {
    this.setState({selectedItem: reports[index]})
  };

  handlePrevCard = () => {
    if (reports.indexOf(this.state.selectedItem) > 0){
    this.setState(state => ({ selectedItem: reports[reports.indexOf(this.state.selectedItem) - 1] }));
  }};

  handleNextCard = () => {
    if (reports.indexOf(this.state.selectedItem) < 199){
    this.setState(state => ({ selectedItem: reports[reports.indexOf(this.state.selectedItem) + 1] }));
  }};

  handleClickSort = () => {
    this.setState(state => ({ sortDirection: state.sortDirection === 'asc' ? 'desc' : 'asc' }));
  }

  handleChangeSortBy = newSortBy => {
    this.setState({ sortBy: newSortBy });
  }

  handleChangeFilter = newFilter => {
    this.setState({ filter: newFilter });
  }
    

  renderBooks = () => {
    const { sortDirection, sortBy, selectedItem } = this.state;
      const bookCards = reports.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return sortDirection === 'asc' ? 1 : -1;
        } else if (a[sortBy] < b[sortBy]) {
          return sortDirection === 'asc' ? -1 : 1;
        } else {
          return 0;
        }
      }).map((report, index) => 
          <Card class={`adscard ${report === selectedItem ? ' adscard-selected' : ''}`} onClick={()=>{this.handleChangeCard(index)}}>
            <CardHeader
                title={report.first_name + " " + report.last_name}
                subheader= {report.company}/>
            <CardContent>
                <Typography variant="body2" color="textSecondary"> {report.date} | {report.amount} </Typography> 
            </CardContent> 
          </Card>
          
      ) 
      return bookCards;
  }

  renderSummary = () => {
    return (
      
        <Card>
            <CardHeader
                title={this.state.selectedItem.first_name + "  " + this.state.selectedItem.last_name}
                subheader={this.state.selectedItem.company} />
            <CardContent>
                <h4>Purchase Date</h4>
                <p>{this.state.selectedItem.date}</p>
                <h4>Cost</h4>
                <p>{this.state.selectedItem.amount}</p>
                
                <h4>Slogan</h4>
                <p>{this.state.selectedItem.slogan}</p>
                <h4>Animal</h4>
                <p>{this.state.selectedItem.animal}</p>
                 
              
            
            </CardContent> 
            <CardMedia image={this.state.selectedItem.Image} />
        </Card>
        )
  }
  render() {
return (
<div className="App" style={{ paddingTop:60, }}>  
  
  <body style={{ margin:16, }}>
    <div>
      <Grid container spacing={16}>
        <Grid item xs={3}>    
            <Typography variant="h3" gutterBottom gutterTop>Reports</Typography>
        </Grid>
        <Grid item xs={7}> 
            <Typography variant="h3" gutterBottom>Summary</Typography>
        </Grid>
        <Grid item xs={2}> 
              <Button 
                color="secondary" variant="outlined"
                style={{flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'right',}}
                onClick={this.handlePrevCard}>
                {'Previous'}
                </Button>
                
           
                <Button style={{marginLeft: 8}}
                color="secondary" variant="outlined"
                
                onClick={this.handleNextCard}>
                {'Next'}
                </Button>    
        </Grid>

        <Grid item xs={3}>
            <Paper >
            <React.Fragment>
                  <SelectButton value={this.state.sortBy} placeholder="Filter" onChange={this.handleChangeFilter}>
                        <MenuItem value="all">{'Show All'}</MenuItem>
                        <MenuItem value="draft">{'Draft'}</MenuItem>
                        <MenuItem value="submitted">{'Submitted'}</MenuItem>
                        <MenuItem value="approved">{'Approved'}</MenuItem>
                        <MenuItem value="rejected">{'Rejected'}</MenuItem>
                  </SelectButton>
                </React.Fragment>
                <React.Fragment>
                  <SelectButton value={this.state.sortBy} placeholder="Sort by" onChange={this.handleChangeSortBy}>
                        <MenuItem value="first_name">{'Name'}</MenuItem>
                        <MenuItem value="date">{'Date'}</MenuItem>
                        <MenuItem value="amount">{'Cost'}</MenuItem>
                  </SelectButton>
                </React.Fragment>
                <React.Fragment>
                    <IconButton color="primary" onClick={this.handleClickSort}>
                        <SwapVert fontSize="small" />
                    </IconButton>
                </React.Fragment>
                <div style={{height: 700, overflow: 'scroll'}}>
              {this.renderBooks() }</div>
            </Paper>
        </Grid> 
        <Grid item xs={9}>
          <Paper style={styles}>
            {this.renderSummary()}
          </Paper>
        </Grid> 
    </Grid>

  </div>
</body>
</div>
  );
}
}
export default List;
