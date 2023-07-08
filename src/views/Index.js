
import { useEffect, useState } from "react";
import {
  Card, CardHeader, Table, Container, Row, Col, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup,
} from "reactstrap";
import { Link } from "react-router-dom";
import Header from "components/Headers/Header.js";
import { FadeLoader } from "react-spinners";
import Pagination from 'rc-pagination';
import ApiService from "./examples/Service/ApiService";
const Index = (props) => {
  const [loading, setloading] = useState(false);
  const [filtervalue, setfiltervalue] = useState('')
  const [searchApidata, setsearchApidata] = useState([])
  const [idtest, setidtest] = useState()
  const [dropdown, setdropdown] = useState()
  const [reload, setreload] = useState(false)
  const [user, setUser] = useState([])
  const [perPage, setPerPage] = useState(5);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);
  let detailfn = (id) => {
    setidtest(id)
  }
  let drpdwn = (e) => {
    // console.log("err", e)
    setdropdown(e)
    let finalArr = {
      updated_by: "test",
      isActive: e
    }
    if (window.confirm('Are you sure you want to save the configuration')) {
      ApiService.UsersActivity(idtest, finalArr).then(() => {
        setreload(!reload)
      })

    } else {
      console.log('Thing was not saved to the database.');
    }
  }

  useEffect(() => {
    setloading(true)
    ApiService.users().then((resp) => {
      setloading(false)
      setUser(resp);
      setsearchApidata(resp);
    })

  }, [reload])
  let handlefilter = (e) => {
    if (e.target.value == '') {
      setUser(searchApidata);
    } else {
      const filterResult = searchApidata.filter(item => item.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.phone_number.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.address.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.gender.toLowerCase().includes(e.target.value.toLowerCase()))
      if (filterResult.length > 0) {
        setUser(filterResult);
      } else {
        setUser([]);
      }
    }
    setfiltervalue(e.target.value)
  }

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(user.length / value);
    // console.log("newPerPage", newPerPage);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }
  const getData = (current, pageSize) => {
    // console.log("current", current, pageSize)
    return user.slice((current - 1) * pageSize, current * pageSize);
  };
  const PaginationChange = (page, pageSize) => {
    // console.log("pages", page, pageSize)
    setCurrent(page);
    setSize(pageSize)
  }

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
      return <button><i className="fa fa-angle-double-left"></i></button>;
    }
    if (type === 'next') {
      return <button><i className="fa fa-angle-double-right"></i></button>;
    }
    return originalElement;
  }
  return (
    <>
      <Header />
      {
        loading ?
          <Col md="12" className="text-center mt-9 spinner" >
            <FadeLoader
              color={"#1E90FF"}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
              className="text-center  spinner"
            />
          </Col>
          :
          <Container className="mt--2" fluid>
            <Row>
            </Row>
            <Row className="mt-5">
              <Col className="mb-5 mb-xl-0" xl="12">
                <Card className="shadow ">
                  <CardHeader className="border-0">
                    <Row className="align-items-center">
                      <div className="col">
                        <Form className="navbar-search navbar-search-dark form-inline d-none d-md-flex mr-lg-auto justify-content-end">
                          <FormGroup className="mb-0">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fas fa-search text-dark" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Search" type="search" className="text-dark" value={filtervalue} onInput={(e) => handlefilter(e)}>
                              </Input>
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </div>
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr >
                        <th scope="col" className="text-dark col-1"><b>S.No</b></th>
                        <th scope="col" className="text-dark col-1"><b>User Name</b></th>
                        <th scope="col" className="text-dark col-1"><b>Phone Number</b></th>
                        <th scope="col" className="text-dark col-1 bbb"><b>Address</b></th>
                        <th scope="col" className="text-dark col-1"><b>Email id</b></th>
                        <th scope="col" className="text-dark col-1"><b>Gender</b></th>
                        <th scope="col" className="text-dark col-1"><b>Organization name</b></th>
                        <th scope="col" className="text-dark col-4"><b>User Action</b></th>
                        <th scope="col" className="text-dark "><b>Action</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.length > 0 ? getData(current, size).map((item, index) => {
                        return <tr key={index}>

                          <th scope="row" className="text-justify text-dark col-1 ">{((current * perPage) - perPage) + index + 1}</th>
                          <td className="text-justify text-dark col-1">{item.username}</td>
                          <td className="text-justify text-dark col-1">{item.phone_number}</td>
                          <td className="text-justify text-dark col-1 bbb">{item.address}</td>
                          <td className="text-justify text-dark col-1"> {item.email}</td>
                          <td className="text-justify text-dark col-1">{item.gender}</td>
                          {item.organization === null ? <td className="text-dark">Null</td> : <td className="text-justify text-dark col-1">{item.organization.organization_name}</td>}
                          <td className="text-dark col-4">
                            <Input type="select" onClick={() => detailfn(item.user_id)} value={item.isActive} onChange={(e) => drpdwn(e.target.value)} className="text-dark" name="select">
                              <option value="" selected disabled hidden>select one</option>
                              <option value="true" className="text-dark">Enabled</option>
                              <option value="false" className="text-dark">Disabled</option>
                            </Input>
                          </td>
                          <td className="text-dark ">
                            {/* <Link to={`/admin/OrganizationEdit/${item.organization_id}`} >  <i class="fas fa-eye "></i> </Link> */}
                            {item.organization == undefined ? <i className="fas fa-eye text-danger mr-3" /> : <Link to={`/admin/userdetails/${item.user_id}`} >  <i className="fas fa-eye text-success mr-3" /></Link>}
                            {/* <Link to={`/admin/userdetails/${item.user_id}`} >  <i className="fas fa-eye text-success mr-3" /></Link> */}
                          </td>
                        </tr>
                      }) :
                        < div className="row">
                          <div className="col-12" style={{ textAlign: "center" }}>
                            <td className="text-dark"><b>No Data Found</b></td>
                          </div>
                        </div>
                      }
                    </tbody>
                  </Table>
                </Card>
                <div className="table-filter-info">
                  <Pagination
                    className="pagination-data"
                    showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                    onChange={PaginationChange}
                    total={user.length}
                    current={current}
                    pageSize={size}
                    showSizeChanger={false}
                    itemRender={PrevNextArrow}
                    onShowSizeChange={PerPageChange}
                  />
                </div>
              </Col>
            </Row>
          </Container>
      }
    </>
  );
};
export default Index;

