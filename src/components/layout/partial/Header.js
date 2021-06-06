import React,{useEffect} from "react";
import { Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { LogOut } from "../../../page/login/loginAction";

const Header = () => {
  const {isAuthorised, loginResponse} = useSelector(state => state.login)

  const dispatch = useDispatch()
  const history = useHistory()

  const handleOnLogOut=()=>{
    console.log(loginResponse.result);
    dispatch(LogOut(loginResponse))
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
        <Navbar.Text>
        <Link onClick={()=>{handleOnLogOut()}}>Log Out</Link>
         </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
