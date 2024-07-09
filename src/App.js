
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {
  pagesize=6
  state={
    progress:0
  }
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
          color='#f11946'
          progress={this.state.progress}
      /> 
          <Routes>
            <Route exact path="/home" element={<News setprogress={this.setprogress} key="general" pagesize={this.pagesize} country="in" category="general"/>}/>
            <Route exact path="/nwsnacks" element={<News setprogress={this.setprogress} key="general" pagesize={this.pagesize} country="in" category="general"/>}/>
            <Route exact path="/about" element={<News setprogress={this.setprogress} key="general" pagesize={this.pagesize} country="in" category="general"/>}/>
            <Route exact path="/business"element={<News setprogress={this.setprogress} key="business"pagesize={this.pagesize} country="in" category="business"/>}/>
            <Route exact path="/entertainment"element={<News setprogress={this.setprogress} key="entertainment" pagesize={this.pagesize} country="in" category="entertainment"/>}/>
            <Route exact path="/health"element={<News setprogress={this.setprogress} key="health" pagesize={this.pagesize} country="in" category="health"/>}/>
            <Route exact path="/general"element={<News setprogress={this.setprogress} key="general" pagesize={this.pagesize} country="in" category="general"/>}/>
            <Route exact path="/science"element={<News setprogress={this.setprogress} key="science" pagesize={this.pagesize} country="in" category="science"/>}/>
            <Route exact path="/sports"element={<News setprogress={this.setprogress} key="sports" pagesize={this.pagesize} country="in" category="sports"/>}/>
            <Route exact path="/technology"element={<News setprogress={this.setprogress} key="technology" pagesize={this.pagesize} country="in" category="technology"/>}/>
          </Routes>

        </Router>
      </div>
    )
  }
}

