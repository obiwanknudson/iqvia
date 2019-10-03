import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from 'apollo-react-next/components/NavigationBar';
import Forms from './Forms';
import Forms2 from './Forms2';
import RecordsTab from './RecordsTab';
import AppDash from './AppDash';
import logo from './logo-img.png';


const navClick = () => {
  console.log('onClick function');
};

const logoProps = {
  src: logo,
  alt: 'Apollo',
  href: './AppDash',
  onClick: navClick,
};

const menuItems = [
  {
    text: 'Dashboard',
    href: './AppDash',
    onClick: navClick,
  },
  {
    text: 'Forms',
    href: './Forms',
    onClick: navClick,
  },
  {
    text: 'Records',
    href: './RecordsTab',
    onClick: navClick,
  },
  {
    text: 'Reports',
    href: './Forms2',
    onClick: navClick,
  },
  
]
class App extends React.Component {
    render() {

        return (
        <div className="App">
         
   
         <NavigationBar
         logoProps={logoProps}
         menuItems={menuItems}/>
          
          
          
          <Router>
              <div className="content">
                <Route exact path="/AppDash" component={AppDash} />
                <Route exact path="/Forms" component={Forms} />
                <Route exact path="/RecordsTab" component={RecordsTab} />
                <Route exact path="/Forms2" component={Forms2} />
              </div>         
          </Router>
        </div>
      );
    }
}
  export default App