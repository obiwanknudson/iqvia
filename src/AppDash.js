import React from 'react';
import './App.css';

import BarChart from 'apollo-react-next/components/BarChart';
import ColumnChart from 'apollo-react-next/components/ColumnChart';
import DonutChart from 'apollo-react-next/components/DonutChart';
import Grid from 'apollo-react-next/components/Grid';

import Hero from 'apollo-react-next/components/Hero';
import DataVizCard from 'apollo-react-next/components/DataVizCard';
import Table1 from './table';



class App extends React.Component {
  state = {
    tabValue: ['0'],
    size: 'small',
    value: [''],
  };
 
  

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    
    

    const data = [
        { country: 'Germany', yield: 16 },
        { country: 'USA', yield: 26 },
        { country: 'Canada', yield: 33 },
        { country: 'France', yield: 39 },
        { country: 'UK', yield: 45 },
        ];
  


      


  return (
    <div className="App" style={{ paddingTop:40, }}>
        
   
  <Hero title="Datatron 3000" subtitle="The penultimate in data gathering analysis and celebration" >
    <Grid container spacing={24} style={{ marginTop: 12, marginBottom: 0 }}>
      <Grid item xs={4}>
        <DataVizCard title="How much I care" href="#home" subtitle="Estimated carability index">
            <DonutChart percent={50} subtitle="'Meh'" height={400}/>
            </DataVizCard>
      </Grid>
      <Grid item xs={4}>
        <DataVizCard title="Countries that are overrated" href="#home" subtitle="by overratetons" >
            <BarChart data={data} height={400}/>
        </DataVizCard>
      </Grid>
      <Grid item xs={4}>
        <DataVizCard title="Card Title" href="#home" subtitle="Optional subtitle" >
            <ColumnChart data={data} height={400} subtitle="Requirements" />
        </DataVizCard>
      </Grid>
    </Grid>
  </Hero>
 
  <body style={{ margin:16, }}>
    <Grid container spacing={24} style={{ marginTop: 12, marginBottom: 0 }}>
        <Grid item xs={12}>
            <Table1/>
        </Grid>
    </Grid>
   </body>


    </div>
  );
}
}
export default App;
