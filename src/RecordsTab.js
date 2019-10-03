import React from 'react';
import Tab from 'apollo-react-next/components/Tab';
import Tabs from 'apollo-react-next/components/Tabs';
import PropTypes from 'prop-types';
import Typography from 'apollo-react-next/components/Typography';

import Table1 from './table';
import  './App.css';
import Table2 from './table2';
import Table3 from './table3';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Records extends React.Component {
  
  state = {
    size: 'small',
    tabValue: 0,
  };

  handleChangeTab = (event, tabValue) => {
    this.setState({ tabValue });
  };

  
  render() {
    const { tabValue, size, } = this.state;
    
    return (
      <div className="App" style={{ paddingTop:60, }}>

<body style={{ margin:16, }}>
    <h3>Records</h3> 
<Tabs size={size} value={tabValue} onChange={this.handleChangeTab}>
          <Tab label="Table A" />
          <Tab label="Table B" />
          <Tab label="Table C" />
        </Tabs>

        {tabValue === 0 && <TabContainer>{
          <body style={{ margin:16, }}>
          <Table3/>
          </body>}
          </TabContainer>}

         {tabValue === 1 && <TabContainer>{ 
         <body style={{ margin:16, }}> 
          <Table2/>
          </body>
         }</TabContainer>}
          
          {tabValue === 2 && <TabContainer>{
          
          <body style={{ margin:16, }}>
          <Table1/>
          </body>
          }
         </TabContainer>}
         </body>
      </div>
    );
  }
}
export default Records;
