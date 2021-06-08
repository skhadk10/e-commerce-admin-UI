import React,{useEffect} from "react";
import { Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation,  } from "react-router";
import { Link } from "react-router-dom";
import { LogOut, userAutoLogin } from "../../../page/login/loginAction";

const Header = () => {
  const {isAuthorised, result, loginResponse} = useSelector(state => state.login)

  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  
  // const accessJWT = sessionStorage.getItem("accessJWT");
  // const refreshJWT = localStorage.getItem("ourEcommerceRJWT");

  // let { from } = location.state || { from: { pathname: "/" } };
  // useEffect(() => {
  //   isAuthorised && history.replace(from);
  //   !isAuthorised && dispatch(userAutoLogin());
  // }, [dispatch, from, history, isAuthorised]);

  const handleOnLogOut=()=>{
    console.log(loginResponse);
    dispatch(LogOut(loginResponse?.result))
    history.push("/");
  }

  return (
    <Navbar bg="dark" variant="dark">
      {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <i className="fas fa-bell text-success"></i>
        </Navbar.Text>
        <Navbar.Text>
          <i className="fas fa-user text-success"></i>
        </Navbar.Text>
        <Navbar.Text>    <Link onClick={()=>{handleOnLogOut()}}>Log Out</Link>
          {/* {
          isAuthorised ? (
        
          ):( <div className="sign">
          <div className="header_signin">
            <Link to="/Sign-In">Sign-In </Link>{" "}
          </div>
          <div className="header_signup">
            <Link to="/Create-Account">Sign-up</Link>
          </div>
        </div>)}
        */}
         </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
