import React from "react";
import { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import Header from "./Components/Header";
import Item from "./Components/Item";
import NotFound from "./Components/NotFound";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

class App extends Component{
  handleSubmit = (e,history,searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url=`/search/${searchInput}`;
    history.push(url);
  }
  render(){
    return(<PhotoContextProvider>
      <HashRouter basename="SnapScout">
        <div>
        <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
          <Routes>
          <Route exact path="/" render={()=><Navigate to="/mountain"></Navigate>}>
          </Route>

          <Route  path="/mountain" render={()=><Item searchTerm="mountain"></Item>}>
          </Route>
          <Route  path="/bird" render={()=><Item searchTerm="bird"></Item>}>
          </Route>
          <Route  path="/beach" render={()=><Item searchTerm="beach"></Item>}>
          </Route>
          <Route  path="/food" render={()=><Item searchTerm="food"></Item>}>
          </Route>
            
            <Route Component={NotFound}></Route>
          </Routes>
        </div>
      </HashRouter>
    </PhotoContextProvider>)
  }
}

export default App;
