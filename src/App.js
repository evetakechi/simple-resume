import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import { Navbar, Banner, About, Learning, Timeline, Example,Footer } from './Components';


import './App.css';

const jsonData = require("./resume.json");

class App extends Component {

  constructor(){
    super();
    this.state = jsonData;
  }

  componentDidMount() {
    scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 500,ease:'inCirc'});  
  }

  onScoller = (refer) => {
    //console.log(refer);
    switch(refer) {
      case 0:
        scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 500,ease:'inCirc'});  
        break;
      case 1:
        scrollToComponent(this.About, { offset: 0, align: 'top', duration: 500,ease:'inExpo'});
        break;
      case 2:
        scrollToComponent(this.Learning, { offset: 0, align: 'top', duration: 500,ease:'inExpo'});
        break;
      case 3:
        scrollToComponent(this.Example, { offset: 0, align: 'top', duration: 500,ease:'inExpo'});  
        break;
      default:
    }
  }

  

  render() {
    return (
      <div >
         <header className="App-header" >
          <Navbar Menus={this.state.menus} onScoller={this.onScoller.bind(this)}></Navbar>   
        </header>
        
          <section ref={(section) => { this.Home = section; } }> <Banner/> </section>
          <section ref={(section) => { this.About = section; }} > 
            <About 
              profile={this.state.profile} 
              detail={this.state.detailProfile} 
              urlGit={this.state.urlGit} 
              urlIn={this.state.urlLinkIn}
             
              /> 
          </section>
          <section ref={(section) => { this.Learning = section; }} className="blue-bg"> 
            <Learning skills={this.state.skills}/>
            <Timeline learning={this.state.Learning}/>
          </section>

          <section ref={(section) => { this.Example = section; } }> <Example url={this.state.urlProject}/> </section>

        <footer>
          <Footer urlGit={this.state.urlGit} 
              urlIn={this.state.urlLinkIn}
              onScoller={this.onScoller.bind(this)}/>
        </footer>
        
      </div>
    );
  }
}

export default App;
