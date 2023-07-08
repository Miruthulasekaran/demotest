import React, { useState, useEffect, useRef } from 'react'
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardHeader, Container, Row, Col, Button, Table, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup,
} from "reactstrap";
import { Link } from 'react-router-dom';
import Header from 'components/Headers/Header';
import { FadeLoader } from "react-spinners";
import { useHistory } from 'react-router-dom';
import Pagination from 'rc-pagination';
import ApiService from 'views/examples/Service/ApiService';
export default function DeviceDataProfile() {
  const history = useHistory();
  const [loading, setloading] = useState(false);
  // useEffect(()=>{
  //   setloading(true)
  //   setTimeout(()=>{
  //     setloading(false)
  //   },1000)
  // },[])
  const [filtervalue, setfiltervalue] = useState('')
  const [searchApidata, setsearchApidata] = useState([])
  const [devicedataprofile, setdevicedataprofile] = useState([])

  const [perPage, setPerPage] = useState(5);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [istrue, settrue] = useState(false)
  useEffect(() => {
    setloading(true)
    ApiService.devicedataprofileGet().then((resp) => {
      setloading(false)
      setdevicedataprofile(resp);
      setsearchApidata(resp);
    })

  }, [istrue])
  const handlefilter = (e) => {

    if (e.target.value == '') {
      setdevicedataprofile(searchApidata);
    } else {
      const filterResult = searchApidata.filter(item => item.data_profile_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.custom_data[0].parameter.toLowerCase().includes(e.target.value.toLowerCase()) || item.custom_data[0].data_type.toLowerCase().includes(e.target.value.toLowerCase()) || item.custom_data[0].Units.toLowerCase().includes(e.target.value.toLowerCase()))
      if (filterResult.length > 0) {
        setdevicedataprofile(filterResult);
      } else {
        setdevicedataprofile([]);

      }
    }
    setfiltervalue(e.target.value)
  }

  const editdevicedataprofile = (id) => {
    ApiService.DeviceDataProfileEdit(id)


  }

  // function deletedevicedataProfile(id) {
  //   if (window.confirm('Are you sure want to delete?')) {
  //     ApiService.deletedevicedataProfileDelete(id).then(() => {

  //     })

  //   }
  // }

  
  // function deletedevicedataProfile(id) {
  //   if (window.confirm('Are you sure want to delete?')) {
  //     ApiService.deletedevicedataProfileDelete(id).then(() => {
  //       settrue(!istrue)
  //     })

  //   }
  // }

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(devicedataprofile.length / value);
    // console.log("newPerPage", newPerPage);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }
  // console.log("organizationprofile", devicedataprofile.length);
  const getData = (current, pageSize) => {
    // console.log("current", current, pageSize)
    return devicedataprofile.slice((current - 1) * pageSize, current * pageSize);
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
  function deletedevicedataProfile(show) {
    console.log("show", show);
    ApiService.deletedevicedataProfileDelete(show).then(() => {
      settrue(!istrue)
    })
    setmodal(!modal);
  }
  return (
    <>
    <Modal size="sm" isOpen={modal} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle} size="sm"><h5>Are you sure you want to delete this profile</h5></ModalHeader>
        <ModalFooter size="sm">
          <Button color="success" size='sm' id="color" onClick={() => deletedevicedataProfile(show)}>Delete</Button>{' '}
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
                              <Input placeholder="Search" type="search" className="text-dark" value={filtervalue} onInput={(e) => handlefilter(e)}>
                              </Input>
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </div>
                      <div className="col text-right">
                        <Link to="/admin/DeviceDataProfileAdd" >
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
                        <th scope="col" className="text-justify  text-dark"><b>S.No</b></th>
                        <th scope="col" className="text-justify text-dark"><b>Data Profile Name</b></th>
                        <th scope="col" className="text-justify text-dark"><b>Parameters</b></th>
                        <th scope="col" className="text-justify text-dark"><b>Action</b></th>
                      </tr>
                    </thead>
                    <tbody>


                      {devicedataprofile.length > 0 ? getData(current, size).map((item, index) => {
                        return <tr key={index}>

                          <th scope="row" className="text-justify text-dark">{((current * perPage) - perPage) + index + 1}</th>
                          <td className="text-justify text-dark">{item.data_profile_name}</td>

                          <td className="table-borderless text-justify text-dark" style={{ padding: "0px", margin: "0px" }}>  {item.custom_data.map((item, index) => {

                            return <>
                              <li className="table-borderless  text-justify text-dark" style={{ listStyle: "none" }} >{index + 1}. {item.parameter}({item.data_type})</li>

                            </>
                          })
                          }
                          </td>

                          <td className="text-justify" >
                            <Link to={`/admin/DeviceDataProfileEdit/${item.device_data_profile_id}`} >  <i class="fas fa-edit " onClick={() => { editdevicedataprofile(item.device_data_profile_id) }}></i> </Link>
                            <i class="fa fa-trash ml-3 text-danger" onClick={() => { toggle(item.device_data_profile_id); }}
                           aria-hidden="true"></i>
                              {/* onClick={() => deletedevicedataProfile(item.device_data_profile_id)} */}
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
                    total={devicedataprofile.length}
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
