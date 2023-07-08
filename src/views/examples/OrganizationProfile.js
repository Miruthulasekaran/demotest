
import Header from "components/Headers/Header.js";
import OrganizationProfileEdit from "./OrganizationProfileEdit";
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react'
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardHeader, Container, Row, Col, Button, Table, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup,
} from "reactstrap";
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
import { FadeLoader } from "react-spinners";
import ApiService from "./Service/ApiService";
import ReactReadMoreReadLess from "react-read-more-read-less";
export default function OrganizationProfile() {
  const history = useHistory();
  const [loading, setloading] = useState(false);
  const [organizationprofile, setorganizationprofile] = useState([])
  const [filtervalue, setfiltervalue] = useState('')
  const [searchApidata, setsearchApidata] = useState([])
  const [perPage, setPerPage] = useState(5);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [istrue, settrue] = useState(false)

  useEffect(() => {
    setloading(true)
    ApiService.OrganizationProfile().then((resp) => {
      setloading(false)
      setorganizationprofile(resp);
      setsearchApidata(resp);
    })

  }, [istrue])
  const editorganizationprofile = (id) => {
    <OrganizationProfileEdit id={51} />
    history.push('/admin/OrganizationProfileEdit')
  }
  // function deleteOrganizationProfile(id) {
  //   if(window.confirm('Are you sure want to delete?')){
  //     ApiService.deleteOrgProf(id).then(()=>{
  //       settrue(!istrue)
  //     })
  //   }
  // }
  const handlefilter = (e) => {
    if (e.target.value == '') {
      setorganizationprofile(searchApidata);
    } else {
      const filterResult = searchApidata.filter(item => item.organization_profile_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.custom_data[0].parameter.toLowerCase().includes(e.target.value.toLowerCase()) || item.custom_data[0].dataType.toLowerCase().includes(e.target.value.toLowerCase()))
      // console.log("organization", searchApidata.filter(item => item.custom_data[0].parameter.toLowerCase().includes(e.target.value.toLowerCase())));
      if (filterResult.length > 0) {
        setorganizationprofile(filterResult);
      } else {
        setorganizationprofile([]);
        // console.log("search", organizationprofile)
      }
    }
    setfiltervalue(e.target.value)
  }
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(organizationprofile.length / value);
    // console.log("newPerPage", newPerPage);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }
  const getData = (current, pageSize) => {
    // console.log("current", current, pageSize)
    return organizationprofile.slice((current - 1) * pageSize, current * pageSize);
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
  function deleteOrg(show) {
    console.log("show", show);
    ApiService.deleteOrgProf(show).then(() => {
      settrue(!istrue)
    })
    setmodal(!modal);
  }
  const [read, setread] = useState(3)
  const [read1, setread1] = useState()
  const [IsTrue, SetTrue] = useState(true)
  const [read2, setread2] = useState(3)
  let readMoreFn = (id, i) => {
    console.log("dsggg", id, i);
    setread1(i)
    setread(id)
    setread2()
    SetTrue(false)
  }
  let readless = () => {
    setread1()
    setread(3)
    SetTrue(true)
  }


  return (
    <>
      <Modal size="sm" isOpen={modal} toggle={toggle} backdrop="static" >
        <ModalHeader></ModalHeader>
        <ModalBody toggle={toggle} size="sm"><h5>Are you sure you want to delete this profile</h5></ModalBody>
        <ModalFooter size="sm">
          <Button color="success" size='sm' id="color" onClick={() => deleteOrg(show)}>Delete</Button>{' '}
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
            <Row className="mt-5">
              <Col className="mb-5 mb-xl-0" xl="12">
                <Card className="shadow ">
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
                              <Input placeholder="Search" type="search" className="text-dark" value={filtervalue} onInput={(e) => handlefilter(e)}>
                              </Input>

                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </div>
                      <div className="col text-right">
                        <Link to="/admin/OrganizationProfileAdd" >
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
                    <thead className="thead-light thead-primary table-sorting">
                      <tr>
                        <th scope="col" className="text-justify text-dark"><b>S.No</b></th>
                        <th scope="col" className="text-justify text-dark"><b>Organization profile</b></th>
                        <th scope="col" className="text-justify text-dark" style={{ padding: "0px", margin: "0px" }}><b>Parameters & Data Types</b></th>
                        <th scope="col" className="text-justify text-dark"><b>Action</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      {organizationprofile.length > 0 ? getData(current, size).map((data, index) => {
                        return <tr key={index} >

                          <th scope="row" className="text-justify text-dark">{((current * perPage) - perPage) + index + 1}</th>
                          <td className="text-justify text-dark">{data.organization_profile_name}</td>
                          <td className="table-borderless text-justify text-dark " style={{ padding: "0px", margin: "0px" }}>
                            {read1 == index ? <>
                              {console.log("thisisindex", read1, index, "tst")}
                              {data.custom_data.map((item, index) => {
                                return <>
                                  <li className="table-borderless  text-justify text-dark " style={{ listStyle: "none" }} >{index + 1}. {item.parameter} [{item.dataType}] </li>

                                </>
                              })
                              }</> : <>
                              {data.custom_data.slice(0, 3).map((item, index) => {
                                return <>
                                  <li className="table-borderless  text-justify text-dark " style={{ listStyle: "none" }} >{index + 1}. {item.parameter} [{item.dataType}] </li>
                                </>
                              })
                              }</>
                            }
                            {
                              IsTrue && data.custom_data.length > 3 ?
                                <a className="text_dark" onClick={() => readMoreFn(data.custom_data.length + 1, index)}>...Read more</a>
                                : IsTrue == false && data.custom_data.length > 3 && read1 == index ? <a className="text_dark" onClick={() => readless()}>Read less...</a>
                                  : IsTrue == false && data.custom_data.length > 3 ? <a className="text_dark" onClick={() => readMoreFn(data.custom_data.length + 1, index)}>...Read more</a> : null
                            }
                          </td>
                          <td className="text-justify" >
                            <Link to={`/admin/OrganizationProfileEdit/${data.organization_profile_id}`} >  <i class="fas fa-edit " onClick={() => { editorganizationprofile(data.organization_profile_id) }}></i> </Link>
                            <i class="fa fa-trash ml-3 text-danger" onClick={() => { toggle(data.organization_profile_id); }} aria-hidden="true"></i>
                            {/* onClick={() => deleteOrganizationProfile(data.organization_profile_id)}  */}
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
                    total={organizationprofile.length}
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
  )
}





