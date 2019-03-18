import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './Components/Navigation/Navigation';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
    }
  }

  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  render() {
    const { sidebarOpen } = this.state;

    return (
      <BrowserRouter>
        <div>
          <Navigation handleSidebar={this.handleSidebar} />
          {sidebarOpen && <Sidebar handleSidebar={this.handleSidebar} sidebarOpen/>}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/projects/" component={Projects} exact />
            <Route path="/skills" component={Skills} exact />
            <Route path="/contact" component={Contact} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
