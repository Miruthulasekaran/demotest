import { useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

const AdminNavbar = (props) => {

  const [name,setname]=useState("Admin");
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-dark text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
      
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nasv>
              <DropdownToggle className="pr-0" nav>
                {/* <Media className="align-items-center ">
                  <span className="avatar avatar-sm text-dark bg-white">
                 
                    <i class="fas fa-user-circle fa-2x"></i>
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm text-dark text-center font-weight-bold">
                       {name}
                    </span>
                  </Media>
                </Media> */}
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
           
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                <i class="fas fa-sign-out-alt fa-lg"></i>
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
