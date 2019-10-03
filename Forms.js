import React from 'react';
import './App.css';
import RichTextEditor from 'apollo-react-next/components/RichTextEditor';
import PropTypes from 'prop-types';
import Tab from 'apollo-react-next/components/Tab';
import Tabs from 'apollo-react-next/components/Tabs';
import Typography from 'apollo-react-next/components/Typography';
import MenuItem from 'apollo-react-next/components/MenuItem';
import Paper from 'apollo-react-next/components/Paper';
import Select from 'apollo-react-next/components/Select';
import TextInput from 'apollo-react-next/components/TextInput';
import PhoneNumberInput from 'apollo-react-next/components/PhoneNumberInput';
import RadioGroup from 'apollo-react-next/components/RadioGroup';
import Radio from 'apollo-react-next/components/Radio';
import ButtonGroup from 'apollo-react-next/components/ButtonGroup';
import Autocomplete from 'apollo-react-next/components/Autocomplete';
import Slider from 'apollo-react-next/components/Slider';
import Switch from 'apollo-react-next/components/Switch';
import FormGroup from 'apollo-react-next/components/FormGroup';
import Checkbox from 'apollo-react-next/components/Checkbox';


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

class Forms extends React.Component {
  state = {
    tabValue: 0,
    size: 'small',
    value: [''],
    checkedA: true,
    checkedB: false,
    houseValue:[''],
    activityValue:[''],
  };



  handleChangeTab = (event, tabValue) => {
    this.setState({ tabValue });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleChangeColor = e => {
    this.setState({ colorValue: e.target.value });
  };
  
  handleChangeHouse = e => {
    this.setState({ houseValue: e.target.value });
  };
  
  handleChangeSign = e => {
    this.setState({ signValue: e.target.value });
  };

  handleChangeActivity = e => {
    this.setState({ activityValue: e.target.value });
  };

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };


  render() {
    const { tabValue, size, colorValue, radioValue, houseValue, activityValue, sliderValue, checkedA, checkedB, signValue  } = this.state;
    

const countries = [
  { label: 'Afghanistan', value: 1 },
  { label: 'Aland Islands', value: 2 },
  { label: 'Albania', value: 3 },
  { label: 'Algeria', value: 4 },
  { label: 'American Samoa', value: 5 },
  { label: 'Andorra', value: 6 },
  { label: 'Angola', value: 7 },
  { label: 'Anguilla', value: 8 },
  { label: 'Antarctica', value: 9 },
  { label: 'Antigua and Barbuda', value: 10 },
  { label: 'Argentina', value: 11 },
  { label: 'Armenia', value: 12 },
  { label: 'Aruba', value: 13 },
  { label: 'Australia', value: 14 },
  { label: 'Austria', value: 15 },
  { label: 'Azerbaijan', value: 16 },
  { label: 'Bahamas', value: 17 },
  { label: 'Bahrain', value: 18 },
  { label: 'Bangladesh', value: 19 },
  { label: 'Barbados', value: 20 },
  { label: 'Belarus', value: 21 },
  { label: 'Belgium', value: 22 },
  { label: 'Belize', value: 23 },
  { label: 'Benin', value: 24 },
  { label: 'Bermuda', value: 25 },
  { label: 'Bhutan', value: 26 },
  { label: 'Bolivia, Plurinational State of', value: 27 },
  { label: 'Bonaire, Sint Eustatius and Saba', value: 28 },
  { label: 'Bosnia and Herzegovina', value: 29 },
  { label: 'Botswana', value: 30 },
  { label: 'Bouvet Island', value: 31 },
  { label: 'Brazil', value: 32 },
  { label: 'British Indian Ocean Territory', value: 33 },
  { label: 'Brunei Darussalam', value: 34 },
];


// const { classes } = this.props;

return (
  <div className="App" style={{ paddingTop:60, }}>  
  
<body style={{ margin:16, }}>
  <div id='OptionA'>
    <p>Forms</p> 
        {console.log(tabValue)}
        <Tabs size={size} value={tabValue} onChange={this.handleChangeTab}>
          <Tab label="Activities" />
          <Tab label="Profile" />
          <Tab label="Form" />
        </Tabs>
        {tabValue === 0 && <TabContainer>{
          <Paper style={{ maxWidth: 560 }}>
          <form onSubmit={this.handleSubmit}>
          <h2 style={{paddingLeft: 16, paddingTop: 16,}}>Tell us about yourself</h2>
          <Select
            style={{maxWidth: 300, padding: 16 }}
              label="Pick a color"
              value={colorValue}
              onChange={this.handleChangeColor}
              placeholder="Select items..."
            >
              <MenuItem value="1">{'Red'}</MenuItem>
              <MenuItem value="2">{'Orange'}</MenuItem>
              <MenuItem value="3">{'Yellow'}</MenuItem>
              <MenuItem value="4">{'Green'}</MenuItem>
              <MenuItem value="5">{'Blue'}</MenuItem>
              <MenuItem value="6">{'Purple'}</MenuItem>
              <MenuItem value="7">{'Pink'}</MenuItem>
              <MenuItem value="8">{'Brown'}</MenuItem>
              <MenuItem value="9">{'Grey'}</MenuItem>
              <MenuItem value="10">{'White'}</MenuItem>
              <MenuItem value="11">{'Black'}</MenuItem>
          </Select>
          
          <Select
            style={{maxWidth: 300, padding: 16 }}
              label="Select your Hogwarts house"
              value={houseValue}
              onChange={this.handleChangeHouse}
              placeholder="Select items..."
            >
              <MenuItem value="1">{'Gryffindor'}</MenuItem>
              <MenuItem value="2">{'Hufflepuff'}</MenuItem>
              <MenuItem value="3">{'Ravenclaw'}</MenuItem>
              <MenuItem value="4">{'Slythrin'}</MenuItem>
              
          </Select>

          <Select
            style={{maxWidth: 300, padding: 16 }}
              label="What is your sign?"
              value={signValue}
              onChange={this.handleChangeSign}
              placeholder="Select items..."
            >
              <MenuItem value="1">{'Aries'}</MenuItem>
              <MenuItem value="2">{'Taurus'}</MenuItem>
              <MenuItem value="3">{'Gemini'}</MenuItem>
              <MenuItem value="4">{'Cancer'}</MenuItem>
              <MenuItem value="5">{'Leo'}</MenuItem>
              <MenuItem value="6">{'Virgo'}</MenuItem>
              <MenuItem value="7">{'Libra'}</MenuItem>
              <MenuItem value="8">{'Scorpio'}</MenuItem>
              <MenuItem value="9">{'Sagitarius'}</MenuItem>
              <MenuItem value="10">{'Capricorn'}</MenuItem>
              <MenuItem value="11">{'Aquarius'}</MenuItem>
              <MenuItem value="12">{'Pisces'}</MenuItem>
          </Select>

          <Select
            style={{maxWidth: 300, padding: 16 }}
              label="Select some activities"
              helperText="You can select multiple options"
              value={activityValue}
              onChange={this.handleChangeActivity}
              placeholder="Select items..."
              multiple
            >
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

        <h3 style={{paddingLeft: 16,}}>How much do you like Benedict Cumberbatch?</h3>
          <Slider value={sliderValue} onChange={(event, sliderValue) => this.setState({ sliderValue })} />
        <FormGroup style={{ paddingLeft: 20, paddingBottom: 16,shadow:0 }}>
          <Checkbox checked={checkedA}
            onChange={this.handleChange('checkedA')}
            value="checkedA"
            label="Check this box"
            
            >Check this box</Checkbox>


        </FormGroup>


        <ButtonGroup style={{ paddingBottom:16, marginLeft:16} }></ButtonGroup>
        </form></Paper>
        }
        </TabContainer>}
        {tabValue === 1 && <TabContainer>{
          
      <Paper style={{ maxWidth: 560, padding: 16 }}>
      
        <form onSubmit={this.handleSubmit}>
         
              <TextInput label="First Name" placeholder="Placeholder"  />
              <TextInput label="Last Name" placeholder="Placeholder"  style={{paddingLeft:16 }}/>
              <PhoneNumberInput
                label="Phone Number"
                defaultCountry="us"
                input={{ onChange: console.log }}
              />
              <RadioGroup aria-label="gender" name="gender" value={radioValue} onChange={this.handleChange}>
                <Radio value="female" label="Female" />
                <Radio value="male" label="Male" />
                <Radio value="other" label="Other" />
              </RadioGroup>
              
            
          <ButtonGroup></ButtonGroup>
        </form>
      </Paper>
          
          
          }</TabContainer>}
        {tabValue === 2 && <TabContainer>{
          <Paper style={{ maxWidth: 560, padding: 16 }}> 
          <form onSubmit={this.handleSubmit}>

          <Autocomplete
            label="Label"
            helperText="This is a note about the field"
            placeholder="Placeholder"
            source={countries}
            fullWidth
          />

      
        <Switch
          label="Label A"
          checked={checkedA}
          onChange={(event, checked) => this.setState({ checkedA: checked })}
        />

        <Switch
          label="Label B"
          checked={checkedB}
          onChange={(event, checked) => this.setState({ checkedB: checked })}
        />
      

        <RichTextEditor label="Tell us why you like it"
        placeholder="Start typing your story..."
        spellCheck={false}variant="popover" 
        />
        
          </form>
          <ButtonGroup  style={{paddingTop: 16,}}/>
          </Paper>
          }</TabContainer>}
        

  </div>

  <div id='OptionB'>

  </div>

  <div id='OptionC'>

</div>

</body></div>
  );
}
}
export default Forms;
