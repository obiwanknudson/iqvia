import React from 'react';
import './App.css';
import RichTextEditor from 'apollo-react-next/components/RichTextEditor';
import Typography from 'apollo-react-next/components/Typography';
import MenuItem from 'apollo-react-next/components/MenuItem';
import Paper from 'apollo-react-next/components/Paper';
import Select from 'apollo-react-next/components/Select';
import Card from 'apollo-react-next/components/Card';
import CardContent from 'apollo-react-next/components/CardContent';
import BarChart from 'apollo-react-next/components/BarChart';
import Search from 'apollo-react-next/components/Search';



class App extends React.Component {
  state = {
    tabValue: 0,
    value: ['0'],
  };

  handleChange = e => {
    console.log(e.target.value)
    this.setState({ value: e.target.value });
  };

  handleChangeTab = e => {
    this.setState({ tabValue: e.target.value });
    console.log(e.target.value, 'handleChangeTab: e.target.value')
  };


  render() {
    const { value, tabValue } = this.state;
    console.log('i am rendering')
    
    const data = [
      { country: 'Germany', yield: 16 },
      { country: 'USA', yield: 26 },
      { country: 'Canada', yield: 33 },
      { country: 'France', yield: 39 },
      { country: 'UK', yield: 45 },
    ];

    return (
      <div className="App">
       
          <body>
           
            {console.log(tabValue, 'before error')}
            {tabValue === 0 && console.log(tabValue, '####### tabValue')}
            {console.log(tabValue, '1st after error 0')}
            <Select style={{ maxWidth: 300 }} label="Search for" value={tabValue} onChange={this.handleChangeTab} >
              <MenuItem value={0}>{'Activities'}</MenuItem>
              <MenuItem value={1}>{'Recipients'}</MenuItem>
              <MenuItem value={2}>{'Reports'}</MenuItem>
            </Select>
                        {console.log(tabValue, '2nd after error @ 0')}
            {tabValue === 0 && 
              
                <Paper style={{ maxWidth: 560, padding: 16 }}>
                  <form onSubmit={this.handleSubmit}>
                        <Select
                          label="Select some activities"
                          helperText="You can select multiple options"
                          value={value}
                          onChange={this.handleChange}
                          placeholder="Select items..."
                          multiple>
                            <MenuItem value="1">{'Adventure'}</MenuItem>
                            <MenuItem value="2">{'Birdwatching'}</MenuItem>
                            <MenuItem value="3">{'Crochet'}</MenuItem>
                            <MenuItem value="4">{'Dancefighting'}</MenuItem>
                            <MenuItem value="5">{'Exfoliating'}</MenuItem>
                            <MenuItem value="6">{'Fire-eating'}</MenuItem>
                            <MenuItem value="7">{'Gumshoe work'}</MenuItem>
                            <MenuItem value="8">{'Hiking'}</MenuItem>
                            <MenuItem value="9">{'Icecream sundaes'}</MenuItem>
                        </Select>
                        <Search style={{ marginTop: 37, marginLeft: 8 }}placeholder="Search" /> 

                      <RichTextEditor>
                      </RichTextEditor>
                  </form>  
                </Paper>
                    
             }
            {tabValue === 1 &&               
                <Paper style={{ maxWidth: 500, padding: 16 }}>
                  <form onSubmit={this.handleSubmit}>
                      <Card>
                          <CardContent>
                            <Typography variant="title1" style={{ marginBottom: 20 }}>
                              Apple Crop Yield by Country
                            </Typography>
                            <BarChart data={data} />
                          </CardContent>
                        </Card>
                        <Select
                          label="Select recipients"
                          helperText="You can select multiple options"
                          value={value}
                          onChange={this.handleChange}
                          placeholder="Select items..."
                          multiple
                          
                        >
                          <MenuItem value="1">{'Argentina'}</MenuItem>
                          <MenuItem value="2">{'Bulgaria'}</MenuItem>
                          <MenuItem value="3">{'China'}</MenuItem>
                          <MenuItem value="4">{'Denmark'}</MenuItem>
                          <MenuItem value="5">{'Ecuador'}</MenuItem>
                          <MenuItem value="6">{'Finland'}</MenuItem>
                          <MenuItem value="7">{'Ghana'}</MenuItem>
                          <MenuItem value="8">{'Haiti'}</MenuItem>
                          <MenuItem value="9">{'Iceland'}</MenuItem>
                        </Select>
                        

                </form>
                </Paper>  
                }
            {tabValue === 2 &&               
                <Paper style={{ maxWidth: 500, padding: 16 }}>
                      <form onSubmit={this.handleSubmit}>
                  <RichTextEditor label="Tell us why you like it"
                      placeholder="Start typing your story..."
                      helperText="You can type your story in desired format."
                      spellCheck={false}variant="popover" />
                <Select
                  label="Select your favorite Tom Hanks films"
                  value={value}
                  onChange={this.handleChange}
                  placeholder="Select items..."
                  multiple
                  
                >
                  <MenuItem value="1">{'Apollo 13'}</MenuItem>
                  <MenuItem value="2">{'Big'}</MenuItem>
                  <MenuItem value="3">{'Castaway'}</MenuItem>
                  <MenuItem value="4">{'DaVinci Code'}</MenuItem>
                  <MenuItem value="5">{'Extremely Loud & Incredibly Close'}</MenuItem>
                  <MenuItem value="6">{'Forest Gump'}</MenuItem>
                  <MenuItem value="7">{'Green Mile'}</MenuItem>
                  <MenuItem value="8">{'Hologram for the King'}</MenuItem>
                  <MenuItem value="9">{'Inferno'}</MenuItem>
                  <MenuItem value="10">{'Joe vs the Volcano'}</MenuItem>
                  <MenuItem value="11">{'Larry Crowne'}</MenuItem>
                  <MenuItem value="12">{'Mazes and Monsters'}</MenuItem>
                  <MenuItem value="13">{'Nothing in Common'}</MenuItem>
                  <MenuItem value="14">{'Philidelphia'}</MenuItem>
                  <MenuItem value="15">{'Splash'}</MenuItem>
                </Select>



            </form>  
              </Paper>
            }
          </body>
         {/* {tabValue}   TAB VALUE */}
         
      </div>
    );
  }
}
export default App;
