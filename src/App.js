import { Button } from "react-bootstrap";
import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import Dashboard from "./page/Dashboard/Dashboard";
import Category from "./page/category/Category";
import Login from "./page/login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PasswordReset from "./page/password reset/passwordReset";
import Product from "./page/producrt/product";
import AddProduct from "./page/producrt/AddProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/Category">
            <Category />
          </Route>
          <Route path="/Products">
            <Product />
          </Route>
          <Route path="/Product/new">
            <AddProduct />
          </Route>

          <Route path="/reset-password">
            <PasswordReset />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
