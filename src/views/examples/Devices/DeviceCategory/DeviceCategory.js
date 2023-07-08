
import React, { useState, useEffect, useRef } from 'react'
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardHeader, Container, Row, Col, Button, Table, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup,
} from "reactstrap";
import { Link } from 'react-router-dom';
import { FadeLoader } from "react-spinners";
import { useHistory } from 'react-router-dom';
import Header from 'components/Headers/Header';
import Pagination from 'rc-pagination';
import ApiService from 'views/examples/Service/ApiService';
export default function DeviceCategory() {
  const history = useHistory();
  const [filtervalue, setfiltervalue] = useState('')
  const [searchApidata, setsearchApidata] = useState([])
  const [DeviceCategory, setDeviceCategory] = useState([])
  const [loading, setloading] = useState(false);
  const [perPage, setPerPage] = useState(5);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const[istrue,settrue]=useState(false)
  // useEffect(()=>{
  //   setloading(true)
  //   setTimeout(()=>{
  //     setloading(false)
  //   },1000)
  // },[])
  useEffect(() => {
    setloading(true)
    ApiService.DeviceCategoryGet().then((resp)=>{
      setloading(false)
      console.log("cssssssssssscsc",resp);
       setDeviceCategory(resp)
       setsearchApidata(resp);
    })
    
  }, [istrue])
  // let OndeleteAlarm = (e) => {
  //   if(window.confirm('Are you sure want to delete?')){
  //     ApiService.DeviceCategoryDelete(e).then(()=>{
  //       settrue(!istrue)
  //     })
  
  // }
  // }

  const handlefilter = (e) => {

    if (e.target.value == '') {
      setDeviceCategory(searchApidata);
    } else {
      const filterResult = searchApidata.filter(item => item.category_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.device_data_profile[0].deviceprofileName.toLowerCase().includes(e.target.value.toLowerCase())
        || item.device_profile[0].deviceprofileName.toLowerCase().includes(e.target.value.toLowerCase())
        || item.global_alarm_rule[0].deviceAlarmName.toLowerCase().includes(e.target.value.toLowerCase())
      )
      if (filterResult.length > 0) {
        setDeviceCategory(filterResult);
      } else {
        setDeviceCategory([]);
      }
    }
    setfiltervalue(e.target.value)
  }
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(DeviceCategory.length / value);
    // console.log("newPerPage", newPerPage);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }
  // console.log("organizationprofile", DeviceCategory.length);
  const getData = (current, pageSize) => {
    // console.log("current", current, pageSize)
    return DeviceCategory.slice((current - 1) * pageSize, current * pageSize);
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
  function OndeleteAlarm(show) {
    console.log("show", show);
    ApiService.DeviceCategoryDelete(show).then(()=>{
      settrue(!istrue)
    })
    setmodal(!modal);
  }
  return (
    <>
     <Modal size="sm" isOpen={modal} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle} size="sm"><h5>Are you sure you want to delete this Category</h5></ModalHeader>
        <ModalFooter size="sm">
          <Button color="success" size='sm' id="color" onClick={() => OndeleteAlarm(show)}>Delete</Button>{' '}
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
                        <Link to="/admin/DeviceCategoryAdd" >
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
                        <th scope="col" className='text-dark'><b>S.No</b></th>
                        <th scope="col" className='text-dark'><b>Category Name</b></th>
                        <th scope="col" className='text-dark'><b>Device Profile</b></th>
                        <th scope="col" className='text-dark'><b>Device Data Profile</b></th>
                        <th scope="col" className='text-dark'><b>Global Alarm Rule</b></th>
                        <th scope="col" className='text-dark'><b>Action</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      {DeviceCategory.length > 0 ? getData(current, size).map((item, index) => {
                        return <tr key={index}>
                          {/* {console.log("sdfsdf", item)} */}
                          <th scope="row" className="text-justify text-dark">{((current * perPage) - perPage) + index + 1}</th>
                          <td className='text-dark'>{item.category_name}</td>
                          <td className="table-borderless text-justify text-dark" style={{ padding: "0px", margin: "0px" }}>
                            {item.device_profile.map((item, index) => {
                              return <>
                                <td className="table-borderless  text-justify text-dark" style={{ listStyle: "none" }} > {item.deviceprofileName} </td>
                              </>
                            })
                            }
                          </td>
                          <td className="table-borderless text-justify text-dark" style={{ padding: "0px", margin: "0px" }}>
                            {item.device_data_profile.map((item, index) => {
                              return <>
                                <td className="table-borderless  text-justify text-dark" style={{ listStyle: "none" }} >   {item.deviceprofileName} </td>
                              </>
                            })
                            }
                          </td>
                          <td className="table-borderless text-justify text-dark" style={{ padding: "0px", margin: "0px" }}>
                            {item.global_alarm_rule.map((item, index) => {
                              {console.log("itemcsfas",item);}
                              return <>
                                <li className="table-borderless  text-justify text-dark'" style={{ listStyle: "none" }} > {index + 1}. {item.alarm_name} </li>
                              </>
                            })
                            }
                          </td>

                          <td>
                            <Link to={`/admin/DeviceCategoryEdit/${item.device_category_id}`}  >  <i class="fas fa-edit "></i> </Link>
                            <i class="fa fa-trash ml-3 text-danger" aria-hidden="true" onClick={() => { toggle(item.device_category_id); }}
                    ></i>
                          </td>
                          {/* onClick={() => { OndeleteAlarm(item.device_category_id) }} */}
                        </tr>
                      })
                        :
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
                    total={DeviceCategory.length}
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
