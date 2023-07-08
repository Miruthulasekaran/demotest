
import Header from "components/Headers/Header.js";
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react'
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardHeader, Container, Row, Col, Button, Table, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup,
} from "reactstrap";
import { Link } from 'react-router-dom';
import { FadeLoader } from "react-spinners";
import Pagination from 'rc-pagination';
import ApiService from "../Service/ApiService";
export default function OrganizationList() {
  const history = useHistory();
  const [Organization, setOrganization] = useState([])
  const [filtervalue, setfiltervalue] = useState('')
  const [searchApidata, setsearchApidata] = useState([])
  const [loading, setloading] = useState(false);
  const [perPage, setPerPage] = useState(5);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [istrue, settrue] = useState(false)
  // useEffect(()=>{
  //   setloading(true)
  //   setTimeout(()=>{
  //     setloading(false)
  //   },1000)
  // },[])
  useEffect(() => {
    setloading(true)
    ApiService.OrganizationList().then((resp) => {
      console.log("dfSDf", resp)
      setloading(false)
      setOrganization(resp.filter(value => value.isDeleted == false));
      setsearchApidata(resp);
      console.log("Oraganization", resp);
    })
  }, [istrue])
  // function OrganizationDelete(id) {
  //   let deleteAPi = {
  //     "isDeleted": false
  //   }
  //   if (window.confirm('Are you sure want to delete?')) {
  //     ApiService.OrganizationListDelete(id).then((resp) => {
  //       console.log("respsssssssssssssssss", resp);
  //       settrue(!istrue)
  //     })
  //   }
  // }
  const handlefilter = (e) => {
    if (e.target.value == '') {
      setOrganization(searchApidata);
    } else {
      const filterResult = searchApidata.filter(item => item.organization_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.address.toLowerCase().includes(e.target.value.toLowerCase()))
      if (filterResult.length > 0) {
        setOrganization(filterResult);
      } else {
        setOrganization([]);
      }
    }
    setfiltervalue(e.target.value)
  }
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(Organization.length / value);
    // console.log("newPerPage", newPerPage);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }
  // console.log("organizationprofile", Organization.length);
  const getData = (current, pageSize) => {
    // console.log("current", current, pageSize)
    return Organization.slice((current - 1) * pageSize, current * pageSize);
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
  const [show, setShow] = useState("");
  const [modal, setmodal] = useState(false)
  let toggle = (id) => {
    setShow(id)
    setmodal(!modal);

  }
  function OrganizationDelete(show) {
    console.log("show", show);
    ApiService.OrganizationListDelete(show).then((resp) => {
      console.log("respsssssssssssssssss", resp);
      settrue(!istrue)
    })
    setmodal(!modal);
  }
  return (
    <>

      <Modal size="sm" isOpen={modal} toggle={toggle} backdrop="static" style={{width:"900px"}}>
        <ModalHeader toggle={toggle} size="sm"><h5>Are you sure you want to delete organization</h5></ModalHeader>
        <ModalFooter size="sm">
          <Button color="success" size='sm' id="color" onClick={() => OrganizationDelete(show)}>Delete</Button>{' '}
          <Button color="danger" size='sm' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
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
          <Container className="mt--6" fluid>
            <Row>
            </Row>
            <Row className="mt-5">
              <Col className="mb-5 mb-xl-0" xl="12">
                <Card className="shadow table-scroll">
                  <CardHeader className="border-0">
                    <Row className="align-items-center">
                      <div className="col">
                        <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                          <FormGroup className="mb-0">
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fas fa-search text-dark" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Search" type="search" className="text-dark" value={filtervalue} onInput={(e) => handlefilter(e)} />
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </div>
                      <div className="col text-right">
                        <Link to="/admin/OrganizationAdd" >
                          <Button
                            color="primary"
                            size="sm"
                          >Add
                          </Button>
                        </Link>
                      </div>
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="text-justify text-dark"><b>S.No</b></th>
                        <th scope="col" className="text-justify text-dark"><b>Organization Name</b></th>
                        <th scope="col" className="text-justify text-dark b" ><b>Address</b></th>
                        <th scope="col" className="text-justify text-dark"><b>Action</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      {Organization.length > 0 ? getData(current, size).map((item, index) => {


                        return <tr>
                          <th scope="row" className="text-justify text-dark">{((current * perPage) - perPage) + index + 1}</th>
                          <td className="text-justify text-dark">{item.organization_name}</td>
                          <td className="text-justify text-dark b">{item.address}</td>
                          <td className="text-justify text-dark" >
                            <Link to={`/admin/OrganizationEdit/${item.organization_id}`} >   <i class="fas fa-edit "></i> </Link>
                            <i class="fa fa-trash ml-3 text-danger" onClick={() => { toggle(item.organization_id); }}
                              aria-hidden="true"></i>
                          </td>
                          {/* onClick={() => OrganizationDelete(item.organization_id)}  */}
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
                    total={Organization.length}
                    current={current}
                    pageSize={size}
                    showSizeChanger={false}
                    itemRender={PrevNextArrow}
                    onShowSizeChange={PerPageChange}
                  />
                </div>
              </Col>
            </Row>
          </Container >
      }
    </>
  )
}
