import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Packages from "./Components/Packages/Packages";
import Footer from "./Components/Footer/Footer";
import AddPackage from "./Components/AddPackage/AddPackage";
import ManageDB from "./Components/ManageDB/ManageDB";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/packages">
            <Packages></Packages>
          </Route>
          <Route path="/addPackage">
            <AddPackage></AddPackage>
          </Route>
          <Route path="/manageDB">
            <ManageDB></ManageDB>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
