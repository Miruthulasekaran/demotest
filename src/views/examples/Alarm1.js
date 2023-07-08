
import React, { useState, useEffect } from 'react'
import Header from "components/Headers/Header.js";
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Button, Card, CardHeader, Table, Container, Row, Col, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup,
} from "reactstrap";
import { FadeLoader } from "react-spinners";
import Pagination from 'rc-pagination';
export default function Alarm1() {

  const [updatevalue, setupdatevalue] = useState([]);
  const [device, setDevice] = useState(true);
  const [modal, setmodal] = useState(false)
  const [filtervalue, setfiltervalue] = useState('')
  const [filtervalue1, setfiltervalue1] = useState('')
  const [searchApidata, setsearchApidata] = useState([])
  const [searchApidata1, setsearchApidata1] = useState([])
  const [filtervalue2, setfiltervalue2] = useState('')
  const [searchApidata2, setsearchApidata2] = useState([])
  const [loading, setloading] = useState(true);
  function fn11() {
    setDevice(false);
  }
  function fn22() {
    setDevice(true);
  }
  let saveContact = () => {
    setmodal(!modal);
  }
  let toggle = () => {
    setmodal(!modal);
  }
  const editValue = [];
  const respalarm = [];
  let xxx = [];
  // let xxx;
  let local;
  const [alrmevent, setalrmevent] = useState([]);
  const [view, setview] = useState(true)
  const [testvar, setestvar] = useState("");
  const [checkflag, setcheckflag] = useState(false)
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1000)
  }, [])
  useEffect(() => {
    // console.log("thisise", testvar)
    if (checkflag) {
      // console.log("entered")
      setview(true)
    }
    setcheckflag(true)
  }, [testvar])

  useEffect(() => {
    setTimeout(() => {
      // setloading(true)
      fetch("http://192.168.0.113:8090/api/v1/alarm_event_lists", {
      }).then((result) => {
        result.json().then((resp) => {
          // setloading(false)
          console.log("pussfdfh", resp);
          setalrmevent(resp)
          setsearchApidata1(resp);
          // console.log("length",alrmevent.length)
          for (let index = 0; index < alrmevent.length; index++) {
            if (alrmevent[index].view_status == false) {
              editValue.push(alrmevent[index])
            }
          }
          for (let index = 0; index < alrmevent.length; index++) {
            if (alrmevent[index].view_status == true) {
              editValue.push(alrmevent[index])
            }
          }

          // console.log("editValueeditValue", editValue);
          // console.log("checkingg", alrmevent);
          setupdatevalue(editValue)
          // console.log("updatevalueupdatevalue", updatevalue);
          xxx = updatevalue
        })

      })

    }, 1000);
  }, [updatevalue])


  // }, [updatevalue])
  const [Temp, setTemp] = useState("")

  let AlarmSeen = (e) => {
    let creat = { updated_by: "user" }
    setTemp(e)
    if (window.confirm("you want to view the alarm")) {
      // console.log("OndeleteAlarm", e)
      fetch(`http://192.168.0.113:8090/api/v1/alarm_seen/${e}`, {
        method: 'PATCH',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(creat)
      }).then((result) => {
        result.json().then((resp) => {
        })
      })
    }



  }
  const [deviceList, setDeviceList] = useState([])
  const [devicelist, setdevicelist] = useState([])
  const [alarmparmater, setalarmparmater] = useState([])
  const [alarmname, setalarmname] = useState([])
  const [alarmnotify, setalarmnotify] = useState([])
  const [alarmvalue, setalarmvalue] = useState([])
  const [alarmcondition, setalarmcondition] = useState([])
  let viewfirst;
  const [alarmNotify, setalarmNotify] = useState([])

  const [alarms, setalarms] = useState([])
  const [perPage, setPerPage] = useState(5);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(updatevalue.length / value);
    // console.log("newPerPage", newPerPage);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  }
  // console.log("organizationprofile", deviceprofile.length);
  const getData = (current, pageSize) => {
    // console.log("current", current, pageSize)
    return updatevalue.slice((current - 1) * pageSize, current * pageSize);
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
  useEffect(() => {
    // setloading(true)
    fetch("http://192.168.0.113:8090/api/v1/device", {
    }).then((result) => {
      result.json().then((resp) => {
        viewfirst = resp[0].device_id
        setTempe(viewfirst)
        // setloading(false)
        setDeviceList(resp)
        setsearchApidata(resp);
        // console.log(resp);
        fetch(`http://192.168.0.113:8090/api/v1/device/${viewfirst}`, {
        })
          .then((result) => {
            result.json()
              .then((resp) => {
                console.log("singledevid", resp.device_category[0].global_alarm_rule[0].alarm_rules)
                setalarmname(resp.device_category[0].global_alarm_rule[0])
                setalarmnotify(resp.device_category[0].global_alarm_rule[0])
                setsearchApidata2(resp.device_category[0].global_alarm_rule[0].alarm_rules)
                setalarmparmater(resp.device_category[0].global_alarm_rule[0].alarm_rules)
                setalarmvalue(resp.device_category[0].global_alarm_rule[0].alarm_rules)
                setalarmcondition(resp.device_category[0].global_alarm_rule[0].alarm_rules)
                setalarmNotify(resp.device_category[0].global_alarm_rule[0].alarm_rules)
              })
          })
      })
    })
  }, [])
  const [Tempe, setTempe] = useState("")
  let OnCardGrp = (id) => {
    setestvar(id)
    // console.log("id", id);
    setTempe(id)
    fetch(`http://192.168.0.113:8090/api/v1/device/${id}`, {
    }).then((result) => {
      result.json().then((resp) => {
        // console.log("devicedataCategoryId", resp);
        setsearchApidata2(resp.device_category[0].global_alarm_rule[0].alarm_rules)
        setalarmname(resp.device_category[0].global_alarm_rule[0])
        setalarmnotify(resp.device_category[0].global_alarm_rule[0])
        // console.log("searchApidata2", alarmname);
        setalarmparmater(resp.device_category[0].global_alarm_rule[0].alarm_rules)
        setalarmvalue(resp.device_category[0].global_alarm_rule[0].alarm_rules)
        setalarmcondition(resp.device_category[0].global_alarm_rule[0].alarm_rules)
        setalarmNotify(resp.device_category[0].global_alarm_rule[0].alarm_rules)
        // console.log("vvvvv", resp.device_category[0].global_alarm_rule[0].alarm_rules);
      })
    })
  }
  // const handlefilter = (e) => {

  //   if (e.target.value == '') {
  //     setDeviceList(searchApidata);
  //   } else {
  //     const filterResult = searchApidata.filter(item => item.device_mac_id.toLowerCase().includes(e.target.value.toLowerCase()))
  //     if (filterResult.length > 0) {
  //       setDeviceList(filterResult);
  //     } else {

  //       setDeviceList([]);

  //     }
  //   }
  //   setfiltervalue(e.target.value)
  // }
  const handlefilter1 = (e) => {
    if (e.target.value == '') {
      setupdatevalue(searchApidata1);
    } else {
      const filterResult = searchApidata1.filter(item => item.alarm_name.toLowerCase().includes(e.target.value.toLowerCase()))
      if (filterResult.length > 0) {
        setupdatevalue(filterResult);
      } else {
        setupdatevalue([]);
      }
    }
    setfiltervalue1(e.target.value)
  }
  // const handlefilter2 = (e) => {
  //   if (e.target.value == '') {
  //     setalarmparmater(searchApidata2);
  //   } else {
  //     const filterResult = searchApidata2.filter(item => item.alarm_parameter
  //       .toLowerCase().includes(e.target.value.toLowerCase()) || item.alarm_value
  //         .toLowerCase().includes(e.target.value.toLowerCase()) ||
  //       item.alarm_condition
  //         .toLowerCase().includes(e.target.value.toLowerCase()) ||
  //       item.alarm_notify
  //         .toLowerCase().includes(e.target.value.toLowerCase())
  //     )
  //     if (filterResult.length > 0) {
  //       setalarmparmater(filterResult);
  //     }
  //     else {
  //       setalarmparmater([]);
  //     }
  //   }
  //   setfiltervalue2(e.target.value)
  // }
  const [show, setShow] = useState("");
  const [modal1, setmodal1] = useState(false)
  let toggle1 = (id) => {
    setShow(id)
    setmodal1(!modal1);

  }
  function OrganizationDelete(show) {
    console.log("show", show);
    let creat = { updated_by: "user" }
    setTemp(show)
    // console.log("OndeleteAlarm", e)
    fetch(`http://192.168.0.113:8090/api/v1/alarm_seen/${show}`, {
      method: 'PATCH',
      headers: { "content-type": "application/json" },
      body: JSON.stringify(creat)
    }).then((result) => {
      result.json().then((resp) => {
      })
    })

    setmodal1(!modal1);
  }
  return (
    <>

      <Modal size="sm" isOpen={modal1} toggle={toggle1} backdrop="static" style={{ width: "900px" }}>
        <ModalHeader toggle={toggle1} size="sm"><h5>You want to view this alarm</h5></ModalHeader>
        <ModalFooter size="sm">
          <Button color="success" size='sm' id="color" onClick={() => OrganizationDelete(show)} >Ok</Button>{' '}
          <Button color="danger" size='sm' onClick={toggle1}>Cancel</Button>
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
          </Col> :
          <>
            <Container className="mt-5" fluid>
              <Row className="mb--4">
                <Col >
                  <Button
                    color="primary"
                    onClick={fn22}
                    size="md"
                  >
                    Alarm events list
                  </Button>
                  <Button
                    color="primary"
                    onClick={fn11}
                    size="md"
                  >
                    Alarm rules
                  </Button>
                </Col>
              </Row>
            </Container>



            {
              device ?
                <Container className="mt-5" fluid>
                  <Row className="mt-5">
                    <Col xl="4">
                      <Card className="shadow">
                      </Card>
                    </Col>
                    <Col className="mb-5 mb-xl-0" xl="12">
                      <Card className="shadow table-scroll-org11" >
                        <CardHeader className="border-0">
                          <Row className="align-items-center">
                            <div className="col">
                              <Form className="  d-none d-md-flex ml-lg-auto" >
                                <FormGroup className="mb-0">
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="fas fa-search text-dark" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Search" type="search" className="text-dark" value={filtervalue1} onInput={(e) => handlefilter1(e)} />
                                  </InputGroup>
                                </FormGroup>
                              </Form>
                            </div>
                          </Row>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" className='text-dark'><b>Alarm Name</b></th>
                              <th scope="col" className='text-dark'><b>Alarm Value</b></th>
                              <th scope="col" className='text-dark'><b>Device mac id</b></th>
                              <th scope="col" className='text-dark'><b>Alarm Condition</b></th>
                              <th scope="col" className='text-dark'><b>Alarm Notification</b></th>
                              <th scope="col" className='text-dark'><b>Viewed By</b></th>
                              <th scope="col" className='text-dark'><b>Action</b></th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              updatevalue.length > 0 ? getData(current, size).map((item, index) => {
                                return <>
                                  <tr className='text-dark text-justify'>
                                    <th scope="row">{item.alarm_name}</th>
                                    <th scope="row">{item.alarm_value}</th>
                                    <th scope="row">{item.device_mac_id}</th>
                                    <th scope="row">{item.alarm_condition}</th>
                                    <th scope="row">{item.notification}</th>
                                    {
                                      item.updated_by == null ? <th scope="row"></th> :
                                        <th scope="row">{item.updated_by}</th>
                                    }
                                    {
                                      item.view_status == false ?
                                        <td> <i className="fas fa-bell text-success " onClick={(e) => { toggle1(item.alarm_even_list_id) }} /></td>
                                        // AlarmSeen(item.alarm_even_list_id);
                                        :
                                        <td> <i className="fas fa-bell-slash " /></td>
                                    }
                                  </tr>
                                </>
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
                          total={updatevalue.length}
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
                :
                <Container className="mt-5" fluid >
                  <Row className="mt-5" >
                    <Col xl="4" className='table-scroll-Alarm'>
                      <Card className="shadow table-scroll-height-Alarm">
                        <CardHeader className="border-0">
                          <Row className="align-items-center">
                            <div className="col">
                              <Form className=" navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto ">
                                <FormGroup className="mb-0">
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="fas fa-search text-dark" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    {/* <Input placeholder="Search here" type="search" className="text-dark" value={filtervalue} onInput={(e) => handlefilter(e)} /> */}
                                  </InputGroup>
                                </FormGroup>
                              </Form>
                            </div>
                          </Row>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" className='text-dark'><b>Device id</b></th>
                              <th scope="col" className='text-dark'><b>Action</b></th>
                            </tr>
                          </thead>
                          <tbody>
                            {deviceList.length > 0 ? deviceList.map((item, index) => {
                              // { console.log("itemtfyf", item) }
                              return <tr key={index}>
                                <td className="text-justify text-dark">{item.device_mac_id}</td>
                                {Tempe === item.device_id ?
                                  <td>   <i class="fa fa-eye text-success" aria-hidden="true" onClick={() => { setview(true) }}></i>
                                  </td> :
                                  <td>   <i class="fa fa-eye-slash" aria-hidden="true" onClick={() => { OnCardGrp(item.device_id) }}></i>
                                  </td>
                                }
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
                    </Col>
                    <Col className="mb-5 mb-xl-0 table-scroll-Alarm" xl="8">
                      <Card className="shadow table-scroll-height-Alarm">
                        <CardHeader className="border-0">
                          <Row className="align-items-center">
                            <div className="col">
                              <Form className="  d-none d-md-flex ml-lg-auto" >
                                <FormGroup className="mb-0">
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="fas fa-search text-dark" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    {/* <Input placeholder="Search" type="search" className="text-dark" value={filtervalue2} onInput={(e) => handlefilter2(e)} /> */}
                                  </InputGroup>
                                </FormGroup>
                              </Form>
                            </div>
                          </Row>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" className='text-dark text-center'><b>Alarm Name</b></th>
                              <th scope="col" className='text-dark text-center'><b>Alarm Notification</b></th>
                              <th scope="col" className='text-dark text-center'><b>Alarm Parameter Name</b></th>
                              <th scope="col" className='text-dark text-center'><b>Alarm Value</b></th>
                              <th scope="col" className='text-dark text-center'><b>Alarm Condition</b></th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr className='text-dark text-justify'>
                              <td>
                                {
                                  alarmname.alarm_name
                                }
                                {/* {
                              alarms.map((item, index) => {
                                // console.log("itemalarms", item);
                              })
                            } */}
                              </td>
                              <td>
                                {
                                  alarmnotify.alarm_notify
                                }
                              </td>
                              <td>
                                {
                                  alarmparmater.map((item, index) => {
                                    return <>
                                      <li key={index} className="text-justify  text-dark">{item.alarm_parameter}</li>
                                    </>
                                  })
                                }
                              </td>
                              <td>
                                {
                                  alarmparmater.map((item, index) => {
                                    return <>
                                      <li key={index} className="text-justify  text-dark">{item.alarm_value}</li>
                                    </>
                                  })
                                }
                              </td>
                              <td>
                                {
                                  alarmparmater.map((item, index) => {
                                    return <>
                                      <li key={index} className="text-justify  text-dark">{item.alarm_condition}</li>
                                    </>
                                  })
                                }
                              </td>

                            </tr>
                          </tbody>
                        </Table>
                      </Card>
                    </Col>

                  </Row>
                </Container>
            }
          </>
      }

    </>
  )

}
