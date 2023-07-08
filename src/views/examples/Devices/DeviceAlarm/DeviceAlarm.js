
import React, { useState, useEffect, useRef } from 'react'
import {
    Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardHeader, Container, Row, Col, Button, Table, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup,
} from "reactstrap";
import { FadeLoader } from "react-spinners";
import { Link } from 'react-router-dom';
import Header from 'components/Headers/Header';
import { useHistory } from 'react-router-dom';
import Pagination from 'rc-pagination';
import ApiService from 'views/examples/Service/ApiService';
export default function DeviceAlarm() {
  const [loading, setloading] = useState(false);
  const [filtervalue, setfiltervalue] = useState('')
  const [searchApidata, setsearchApidata] = useState([])
  const history = useHistory();
  const [response, setresponse] = useState([])
  const [perPage, setPerPage] = useState(5);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [istrue, settrue] = useState(false)
  useEffect(() => {
    setloading(true)
    ApiService.DeviceAlarmGet().then((resp) => {
      setloading(false)
      setresponse(resp)
      console.log("resp", resp)
      setsearchApidata(resp);
    })

  }, [istrue])

  // let OndeleteAlarm = (e) => {
  //   if (window.confirm('Are you sure want to delete?')) {
  //     ApiService.DeviceAlarmDelete(e).then(() => {
  //       settrue(!istrue)
  //     })

  //   }

  // }
  const handlefilter = (e) => {
    if (e.target.value == '') {
      setresponse(searchApidata);
    } else {
      const filterResult = searchApidata.filter(item => item.alarm_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.custom_data[0].AlarmCondition.toLowerCase().includes(e.target.value.toLowerCase()) || item.custom_data[0].AlarmNotify.toLowerCase().includes(e.target.value.toLowerCase())
        || item.custom_data[0].AlarmValue.toLowerCase().includes(e.target.value.toLowerCase())
        || item.custom_data[0].DeviceDataProfile.toLowerCase().includes(e.target.value.toLowerCase())
        || item.custom_data[0].data_type.toLowerCase().includes(e.target.value.toLowerCase())
        || item.custom_data[0].parameter.toLowerCase().includes(e.target.value.toLowerCase())
        || item.custom_data[0].rules.toLowerCase().includes(e.target.value.toLowerCase())
      )
      if (filterResult.length > 0) {
        setresponse(filterResult);
      } else {
        // setorganizationprofile([{organization_profile_name:"no"}])
        setresponse([]);

      }
    }
    setfiltervalue(e.target.value)
  }
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(response.length / value);
    // console.log("newPerPage", newPerPage);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }
  const getData = (current, pageSize) => {
    // console.log("current", current, pageSize)
    // Normally you should get the data from the server
    return response.slice((current - 1) * pageSize, current * pageSize);
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
    ApiService.DeviceAlarmDelete(show).then(() => {
      settrue(!istrue)
    })
    setmodal(!modal);
  }
  return (
    <>
      <Modal size="sm" isOpen={modal} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle} size="sm"><h5>Are you sure you want to delete this alarm</h5></ModalHeader>
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
                        <Link to="/admin/DeviceAlarmAdd" >
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
                        <th scope="col" className='text-dark text-justify'><b>S.No</b></th>
                        <th scope="col" className='text-dark text-justify'><b>Alarm Name</b></th>
                        <th scope="col" className='text-dark text-justify'><b>Alarm Notification</b></th>
                        <th scope="col" className='text-dark text-justify'><b>Alarm rules</b></th>
                        <th scope="col" className='text-dark text-justify'><b>Alarm Data profile</b></th>
                        <th scope="col" className='text-dark text-justify'><b>Alarm Parameter</b></th>
                        <th scope="col" className='text-dark text-justify'><b>Alarm Condition</b></th>
                        <th scope="col" className='text-dark text-justify'><b>Alarm Value</b></th>
                        <th scope="col" className='text-dark text-justify'><b>Action</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      {response.length != 0 ? getData(current, size).map((item, index) => {
                        // console.log("vsssssssss", response);
                        return <tr>
                          <th scope="row" className="text-justify text-dark">{((current * perPage) - perPage) + index + 1}</th>
                          <td className='text-dark text-wrap' style={{ width: "10rem" }}> {item.alarm_name}</td>
                          <td className='text-dark text-wrap' style={{ width: "10rem" }}> {item.alarm_notify}</td>
                          <td className="table-borderless text-justify text-dark  text-wrap" style={{ width: "10rem" }}  >  {item.alarm_rules.map((item, index) => {
                            return <>
                              <li className="table-borderless  text-justify text-dark  text-wrap" style={{ width: "10rem", listStyle: "none" }} >{index + 1}. {item.rule} </li>
                            </>
                          })
                          }
                          </td>
                          {/* <td className="table-borderless text-justify text-dark  text-wrap" style={{ width: "10rem" }}  >  {item.alarm_rules.map((item, index) => {
                            return <>
                              <li className="table-borderless  text-justify text-dark  text-wrap" style={{ width: "10rem", listStyle: "none" }} > {item.device_data_profile
} </li>
                            </>
                          })
                          }
                          </td> */}
                            <td className='text-dark text-wrap' style={{ width: "10rem" }}> {item.data_profile}</td>
                          <td className="table-borderless text-justify text-dark  text-wrap" style={{ width: "10rem" }}  >  {item.alarm_rules.map((item, index) => {
                            return <>
                              <li className="table-borderless  text-justify text-dark  text-wrap" style={{ width: "10rem", listStyle: "none" }} >{index + 1}. {item.alarm_parameter} </li>
                            </>
                          })
                          }
                          </td>
                          <td className="table-borderless text-justify text-dark  text-wrap" style={{ width: "10rem" }}  >  {item.alarm_rules.map((item, index) => {
                            return <>
                              <li className="table-borderless  text-justify text-dark  text-wrap" style={{ width: "10rem", listStyle: "none" }} >{index + 1}. {item.alarm_condition} </li>
                            </>
                          })
                          }
                          </td>
                          <td className="table-borderless text-justify text-dark  text-wrap" style={{ width: "10rem" }}  >  {item.alarm_rules.map((item, index) => {
                            return <>
                              <li className="table-borderless  text-justify text-dark  text-wrap" style={{ width: "10rem", listStyle: "none" }} >{index + 1}. {item.alarm_value} </li>
                            </>
                          })
                          }
                          </td>
                          <td>
                            <Link to={`/admin/DeviceAlarmEdit/${item.global_alarm_id}`} >  <i class="fas fa-edit"></i> </Link>
                            <i class="fa fa-trash ml-3" style={{ color: "red" }} aria-hidden="true" onClick={() => { toggle(item.global_alarm_id); }}
                        
                            ></i>
                                {/* onClick={() => OndeleteAlarm(item.global_alarm_id)} */}
                          </td>
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
                    total={response.length}
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
