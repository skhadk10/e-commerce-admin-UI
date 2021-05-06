import { Button } from "react-bootstrap";
import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import Dashboard from "./page/Dashboard/Dashboard";
import Category from "./page/category/Category";
import Login from "./page/login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PasswordReset from "./page/password reset/passwordReset";
import Product from "./page/product/product";
import EditProduct from "./page/edit-product/EditProduct.js";
import AddProduct from "./page/product/AddProduct";
import PrivateRoute from "./components/private-route/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/Dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/Category">
            <Category />
          </Route>
          <Route exact path="/Products">
            <Product />
          </Route>
          <Route exact path="/Product/new">
            <AddProduct />
          </Route>
          <Route exact path="/Product/:_id">
            <EditProduct />
          </Route>

          <Route exact path="/reset-password">
            <PasswordReset />
          </Route>

          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
