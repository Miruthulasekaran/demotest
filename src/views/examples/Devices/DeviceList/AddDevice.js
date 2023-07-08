import React from 'react'
import Header from 'components/Headers/Header';
import { useState, useEffect } from "react";
import {
  Card, Container, Row, Button, CardHeader, CardBody, Col, FormGroup, Input,

  Modal, ModalHeader, ModalBody, ModalFooter, Table,
} from "reactstrap";
import { useHistory } from 'react-router-dom';
import ApiService from 'views/examples/Service/ApiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AddDevice() {
  const history = useHistory();
  const [devicedataCategory, setdeviceCategory] = useState([])
  const [TempCategory, setTempCategory] = useState("")
  const [Tempvalue, setTempvalue] = useState([])
  const [Deviceprofile, setDeviceprofile] = useState([])
  const [Deviceprofile1, setDeviceprofile1] = useState([])
  const [Alarm, setAlarm] = useState([])
  const [Devicename, SetDevicename] = useState("")
  const [DeviceId, SetDeviceId] = useState("")
  const [protocol, setprotocol] = useState("")
  const [platform, setplatform] = useState()
  const [tempplatform, settempplatform] = useState("")
  const [colsize, setcolsize] = useState(12)

  const [colsize1, setcolsize1] = useState(12)
  const [image, setimage] = useState()
  const [FinalObj, SetFinalObj] = useState()
  const [device_category, setdevice_category] = useState()
  const [platformName, setplatformName] = useState(null)
  const [organization, setorganization] = useState([])
  const [organizationidObject, setorganizationidObject] = useState({})
  const [devicenameval, setdevicenameval] = useState(false)
  const [devicenameval1, setdevicenameval1] = useState(false)
  const [deviceidval, setdeviceidval] = useState(false)
  const [deviceidval1, setdeviceidval1] = useState(false)
  const [devicecatval, setdevicecatval] = useState(false)
  const [orgval, setorgval] = useState(false)
  const [orgval1, setorgval1] = useState(false)
  const [protocolval, setprotocolval] = useState(false)
  const [platformval, setplatformval] = useState(false)
  const [data, setdata] = useState([])
  const [dataprofile, setdataprofile] = useState([])
  const [GlobAlarm, setGlobAlarm] = useState([])
  const [devDatProf, setdevDatProf] = useState([])

  const [modal, setmodal] = useState(false)
  // for devcie profile
  const [modal1, setmodal1] = useState(false)
  // for global alarm
  const [modal2, setmodal2] = useState(false)

  const [disabled, setDisabled] = useState(true)
  // let  /^(\w+\s?)*\s*$/g = /^(\w+\s?)*\s*$/g;
  // let  /^(\w+\s?)*\s*$/g = /^(\w+\s?)*\s*$/g;
  // var  /^(\w+\s?)*\s*$/g2 = "^\s+$"
  useEffect(() => {
    fetch("http://192.168.0.113:8090/api/v1/device_category", {
    }).then((result) => {
      result.json().then((resp) => {
        setdeviceCategory(resp);
        // console.log("devicedataCategory", resp);
        resp.map((item) => {
          // console.log("item", item.category_name);
        })
      })
    })
  }, [])
  useEffect(() => {
    Alarm.length >= 1 ? setcolsize(6) : setcolsize(12)
  }, [Alarm])
  useEffect(() => {
    TempCategory.length >= 1 ? setcolsize1(6) : setcolsize1(12)
  }, [TempCategory])
  let OnCategory = (e) => {
    setTempCategory(e.target.value)
    setDisabled(false)
    let editValue = devicedataCategory.find((value) => value.category_name === e.target.value);
    console.log("this is the temp value", editValue.device_data_profile[0].custom_data[0]
    )
    setdevDatProf(editValue.device_data_profile[0].custom_data)
    console.log(devDatProf);
    setdevice_category([editValue])
    setdataprofile(editValue.device_profile[0].custom_data)
    // console.log("edit value", editValue)
    setTempvalue(editValue.device_data_profile)
    // console.log("edit value", editValue)
    setDeviceprofile(editValue.device_profile)
    setDeviceprofile1(editValue.device_profile[0].custom_data)
    setAlarm(editValue.global_alarm_rule)
    // console.log("setting", editValue.device_image)
    setimage(editValue.device_image)
    setdevicecatval(false)

  }
  let platformfunc = (e) => {
    settempplatform(e.target.value)
    setplatformval(false)
    if (e.target.value === "Platform Oriented")
      setplatform(true)
    else {
      setplatform(false)
    }
  }
  let deletedataProfile = (e) => {
    setTempvalue((Tempvalue) => {
      return Tempvalue.filter((_, i) => i !== e);
    });
  }
  let deleteProfile = (e) => {
    setDeviceprofile((Deviceprofile) => {
      return Deviceprofile.filter((_, i) => i !== e);
    })
  }
  let deleteAlarm = (e) => {
    setAlarm((Alarm) => {
      return Alarm.filter((_, i) => i !== e);
    })
  }
  // OnSumbitObject
  useEffect(() => {
    SetFinalObj({
      created_by: "test",
      updated_by: "test",
      device_mac_id: DeviceId,
      device_name: Devicename,
      device_category: device_category,
      user_id: organizationidObject,
      protocol_type: protocol,
      isPlatform: platform,
      platform: platformName,
      device_profile: data

    })
  }, [DeviceId, device_category, Devicename, protocol, platform, platformName, organizationidObject, data])
  let OnSumbitObject = () => {
    if (Devicename == "" && DeviceId == "" && TempCategory == "" && temp == "" && protocol == "" && tempplatform == "") {
      setdevicenameval(true)
      setdeviceidval(true)
      setdevicecatval(true)
      setorgval(true)
      setprotocolval(true)
      setplatformval(true)
    }
    else if (Devicename.trim() == "") {
      setdevicenameval(true)
    }
    else if (! /^(\w+\s?)*\s*$/g.test(Devicename)) {
      setdevicenameval1(true)
    }
    else if (DeviceId.trim() == "") {
      setdeviceidval(true)
    }
    else if (! /^(\w+\s?)*\s*$/g.test(DeviceId)) {
      setdeviceidval1(true)
    }

    else if (TempCategory == "") {
      setdevicecatval(true)
    }
    else if (temp == "") {
      setorgval(true)
    }
    else if (data == "") {
      setorgval1(true)
    }
    // else if (! /^(\w+\s?)*\s*$/g2.test(data)) {
    //   setorgval1(true)
    // }
    else if (protocol == "") {
      setprotocolval(true)
    }
    else if (tempplatform == "") {
      setplatformval(true)
    }
    else if (platform) {

      // fetch("http://192.168.0.113:8090/api/v1/add_platform_device", {
      //   method: 'PATCH',
      //   headers: { "content-type": "application/json" },
      //   body: JSON.stringify(FinalObj)
      // }).then((result) => {
      //   result.json().then((resp) => {
      //     // console.log("resp", resp);
      //     history.push('/admin/Device');
      //   })
      // })
    }
    else {
      console.log("OnSumbit", FinalObj)
      // fetch("http://192.168.0.113:8090/api/v1/device", {
      //   method: 'POST',
      //   headers: { "content-type": "application/json" },
      //   body: JSON.stringify(FinalObj)
      // }).then((result) => {
      //   result.json().then((resp) => {
      //     if (resp.message) {
      //       console.log(resp);
      //       toast.error('Device name already exists!', {
      //         position: "top-right",
      //         autoClose: 2000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //         theme: "light",
      //         });
      //       // alert("device name already exists!")
      //     } else {
      //       history.push('/admin/Device');
      //       toast('Device added successfully', {
      //         position: "top-right",
      //         autoClose: 2000,
      //         hideProgressBar: false,
      //         closeOnClick: true,
      //         pauseOnHover: true,
      //         draggable: true,
      //         progress: undefined,
      //         theme: "light",
      //         });
      //     }

      //   })
      // })
    }
  }
  // useEffect(() => {
  //   fetch("http://192.168.0.113:8090/api/v1/organization", {
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       setorganization(resp);
  //       // console.log("organization", resp);
  //     })
  //   })
  // }, [])

  const [temp, settemp] = useState("")
  let organizatioId = (e) => {
    settemp(e)
    let organizatioId = organization.find((value) => value.user_id == e);
    console.log("organizatioId", organizatioId)
    setorganizationidObject(organizatioId)

  }
  const [secondaryUser, setsecondaryUser] = useState([])
  useEffect(() => {
    fetch("http://192.168.0.113:8090/api/v1/user").then((result) => {
      result.json().then((resp) => {
        // console.log("userbcvnv", resp);
        setsecondaryUser(resp)
      })
    })
  }, [])
  function oncancel() {
    history.push('/admin/Device');
  }
  useEffect(() => {

    ApiService.userlist().then((resp) => {
      setorganization(resp);
      console.log("userresponse",resp);
    })
  }, [])
  const[org,setorg]=useState([])
  useEffect(() => {
    ApiService.OrganizationList().then((resp) => {
      console.log("dfSDf", resp)
      setorg(resp)
    })
  }, [])
  let toggle = () => {

    setmodal(!modal);
  }

  let toggle1 = () => {

    setmodal1(!modal1);

  }

  let toggle2 = (e) => {

    setmodal2(!modal2);

  }
  let handleClick = (e) => {
    setGlobAlarm(e.alarm_rules)
  }
  let dynamicFn = (e) => {

    let fnd = data.find(element => element.parameter.param_name == e.target.name);
    // console.log("fndDyan", fnd);

    if (fnd == undefined) {

      let a = {
        "parameter": {
          "param_name": e.target.name,
          "param_value": e.target.value,
          "param_type": e.target.type
        }
      }

      data.push(a)
    }

    else {

      setdata(data.map((element) => {

        if (element.parameter.param_name == fnd.parameter.param_name) {
          return {
            ...element, parameter: {
              "param_name": e.target.name,
              "param_value": e.target.value,
              "param_type": e.target.type
            }
          }
        }
        return element;
      }))

    }
    console.log("dataaaa", data)


    // setdata(data)

  }
  return (
    <>
      <div>

        {/* for alarm */}
        <Modal size="md" isOpen={modal2} toggle={toggle2} backdrop="static">
          <ModalHeader toggle={toggle2}>Device alarm</ModalHeader>
          <ModalBody>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <tr>
                    {/* <th scope="col" className="text-justify text-dark"><b>S.No</b></th> */}
                    <th scope="col" className="text-justify text-dark text-wrap" style={{ width: "12rem" }} ><b>Parameter</b></th>
                    {/* <th scope="col" className="text-justify text-dark text-wrap" style={{ width: "12rem" }} ><b>Data Type</b></th> */}
                    <th scope="col" className="text-justify text-dark text-wrap" style={{ width: "12rem" }} ><b>Alarm Condition</b></th>
                    <th scope="col" className="text-justify text-dark text-wrap" style={{ width: "12rem" }} ><b>Alarm Value</b></th>
                    <th scope="col" className="text-justify text-dark text-wrap" style={{ width: "12rem" }} ><b>Alarm rules</b></th>
                  </tr>
                </tr>
              </thead>
              <tbody>
                {GlobAlarm.map((item, index) => {
                  return <tr key={index}>
                    {/* <th scope="row" className="text-justify text-dark">{index + 1}</th> */}
                    <>
                      <tr >
                        <td className="text-justify text-dark text-wrap" style={{ width: "12rem" }}>{item.alarm_parameter}</td>
                        <td className="text-justify text-dark text-wrap" style={{ width: "12rem" }}>{item.data_type}</td>
                        <td className="text-justify text-dark text-wrap" style={{ width: "12rem" }}>{item.alarm_condition}</td>
                        <td className="text-justify text-dark text-wrap" style={{ width: "12rem" }}>{item.alarm_value}</td>
                        <td className="text-justify text-dark text-wrap" style={{ width: "12rem" }}>{item.rule}</td>

                      </tr>
                    </>
                  </tr>
                })
                }
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            {
              <>
                <Button color="danger" className='btn-sm' onClick={toggle2}>Close</Button>
              </>
            }

          </ModalFooter>
        </Modal>

        {/* for device profile */}
        <Modal size="md" isOpen={modal1} toggle={toggle1} backdrop="static">
          <ModalHeader toggle={toggle1}>Device profile</ModalHeader>
          <ModalBody>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <tr>
                    {/* <th scope="col" className="text-justify text-dark"><b>S.No</b></th> */}
                    {/* <th scope="col" className="text-justify text-dark col-1" ><b>S.No</b></th> */}
                    <th scope="col" className="text-justify text-dark col-6" ><b>Parameter</b></th>
                    <th scope="col" className="text-justify text-dark col-5" ><b>Data Type</b></th>

                  </tr>
                </tr>
              </thead>
              <tbody>
                {Deviceprofile1.map((item, index) => {
                  return <tr key={index}>
                    {/* <th scope="row" className="text-justify text-dark col-1">{index + 1}</th> */}
                    <>
                      <tr >
                        <td className="text-justify text-dark col-6" >{item.parameter}</td>
                        <td className="text-justify text-dark col-5" >{item.data_type}</td>
                      </tr>
                    </>
                  </tr>
                })
                }
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            {
              <>
                <Button color="danger" className='btn-sm' onClick={toggle1}>Close</Button>
              </>
            }

          </ModalFooter>
        </Modal>

        {/* for device data profile */}
        <Modal size="md" isOpen={modal} toggle={toggle} backdrop="static">
          <ModalHeader toggle={toggle}> Data profile</ModalHeader>
          <ModalBody>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <tr>
                    <th scope="col" className="text-justify text-dark text-wrap" style={{ width: "12rem" }}><b>Parameter</b></th>

                  </tr>
                </tr>
              </thead>
              <tbody>
                {devDatProf.map((item, index) => {
                  return <tr key={index}>
                    <>
                      <tr >
                        <td className="text-justify text-dark text-wrap" style={{ width: "20rem" }}>{item.parameter}</td>

                      </tr>
                    </>
                  </tr>
                })
                }
                {/* <td className="text-justify text-dark" style={{ textAlign: "center" }}>{devDatProf.parameter}</td> */}
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            {
              <>
                <Button color="danger" className='btn-sm' onClick={toggle}>Close</Button>
              </>
            }

          </ModalFooter>
        </Modal>
      </div>
      <Header />
      <Container className='mt-5 col-12' >
        <Card className='p-5'>

          <Row className='' >
            <Col md={colsize1}>
              {
                disabled ? null :
                  <Card style={{ height: "500px", width: "450px" }} >
                    <CardHeader>
                      <h3 className='text-center'>Device image</h3>
                      <CardBody className='text-justify' style={{ height: "120%" }}>
                        {image == undefined ?
                          <Input data-toggle="tooltip" data-placement="top" title="Acoording to selecting category image will be display"
                            className='text-center text-dark' > Select category</Input> : <img class="text-justify" src={image} style={{ height: "100%", width: "100%", margin: "auto" }} />}
                      </CardBody>


                    </CardHeader>
                  </Card>
              }
            </Col>

            <Col md={colsize1}  >
              <Row className='mt-3'>
                <Col md="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-city"
                    >
                      Device name
                    </label>
                    <Input
                      className="form-control-alternative"
                      onChange={e => { SetDevicename(e.target.value); setdevicenameval(false); setdevicenameval1(false) }}
                      value={Devicename}
                      id="input-city"
                      placeholder="Enter device name"
                      type="text"

                    />
                  </FormGroup>
                  {devicenameval ? <td style={{ color: "red" }}>Please enter device name</td> : null}
                  {devicenameval1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                </Col>
                <Col md="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-city"
                    >
                      Device id
                    </label>
                    <Input
                      className="form-control-alternative"
                      onChange={e => { SetDeviceId(e.target.value); setdeviceidval(false); setdeviceidval1(false) }}
                      value={DeviceId}
                      id="input-city"
                      placeholder="Enter device id"
                      type="text"
                    />
                    {deviceidval ? <td style={{ color: "red" }}>Please Enter device id</td> : null}
                    {deviceidval1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                  </FormGroup>

                </Col>
                <Col md="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-country"
                    >
                      Device category
                    </label>
                    <Input onChange={OnCategory} value={TempCategory} type="select" className='text-dark' name="select" id="exampleSelect">
                      <option value="" selected disabled>Select device category</option>
                      {devicedataCategory.map((item, index) => {
                        return <option key={index} value={item.category_name} className='text-dark'>{item.category_name}</option>
                      })
                      }
                    </Input>
                    {devicecatval ? <td style={{ color: "red" }}>Please device category</td> : null}
                  </FormGroup>
                </Col>
              </Row>

              <Row >
                {Tempvalue.length >= 1 ? <>
                  <Col md="6" >
                    <FormGroup >
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Data profile
                      </label><a> <i class="fa fa-eye text-success" data-toggle="tooltip" data-placement="top" title="view device data profile" onClick={toggle} aria-hidden="true" ></i></a>
                      <ol>
                        {
                          Tempvalue.map((item, index) => {
                            return <li key={index}> {item.deviceprofileName}</li>
                          })
                        }
                      </ol>
                    </FormGroup>
                  </Col> </> : null}

                {Deviceprofile.length >= 1 ?
                  <Col md="6" >
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Device profile
                      </label>   <i class="fa fa-eye text-success" data-toggle="tooltip" data-placement="top" title="view device profile" onClick={toggle1} aria-hidden="true" ></i>
                      <ol>
                        {
                          Deviceprofile.map((item, index) => {
                            return <li key={index}>{item.deviceprofileName} </li>
                          })
                        }
                      </ol>
                    </FormGroup>
                  </Col> : null}
              </Row>
              <Row >
                {Alarm.length >= 1 ?
                  <Col md="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Alarm rules
                      </label>
                      <ol>
                        {
                          // console.log("tempvalue", Tempvalue)
                        }
                        {Alarm.map((item, index) => {

                          return <li key={index}>{item.alarm_name} <a> <i class="fa fa-eye text-success" data-toggle="tooltip" data-placement="top" title="view global alarm rules" aria-hidden="true" onClick={() => { toggle2(); handleClick(item) }} > </i> </a></li>
                        })
                        }
                      </ol>
                    </FormGroup>
                  </Col> : null
                }

                <Col md={colsize}>

                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-country"
                    >
                      Select organization
                    </label>
                    <Input type="select" value={temp} onChange={e => { organizatioId(e.target.value); setorgval(false) }} className='text-dark' name="select" id="exampleSelect">
                      <option value="" selected disabled>Select user</option>
                      {
                        organization.map((item, index) => {

                          console.log("thsiistheuser", item)
                          return <option key={index} value={item.user_id} selected >{item.username}</option>
                        })
                      }
                    </Input>
                    {orgval ? <td style={{ color: "red" }}>Please select user</td> : null}
                  </FormGroup>

                </Col>
              </Row>
              <Row>
                {/* <Col md={colsize}>

                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-country"
                    >
                      Add user
                    </label>
                    <Input type="select" value={temp} onChange={e => { organizatioId(e.target.value); setorgval(false) }} className='text-dark' name="select" id="exampleSelect">
                      <option value="" selected disabled>Select user</option>
                      {
                        organization.map((item, index) => {

                          console.log("thsiistheuser", item)
                          return <option key={index} value={item.user_id} selected >{item.username}</option>
                        })
                      }
                    </Input>
                    {orgval ? <td style={{ color: "red" }}>Please select user</td> : null}
                  </FormGroup>

                </Col> */}
                {
                  dataprofile.map((item, index) => {
                    return <Col md="6">
                      <FormGroup>

                        <label
                          className="form-control-label"
                          htmlFor="input-country"
                        >
                          {item.parameter}
                        </label>

                        <Input key={index} type={item.data_type} placeholder={`Please enter the ${item.parameter}`} onBlur={e => dynamicFn(e)} className='text-dark' name={item.parameter} id="Dynamic" />
                        {orgval1 ? <td style={{ color: "red" }}>{`Please enter the ${item.parameter}`}</td> : null}
                      </FormGroup>
                    </Col>
                  })
                }

              </Row>
              <Row >
                <Col md="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-country"
                    >
                      Add protocol type
                    </label>
                    <Input type="select" value={protocol} onChange={e => { setprotocol(e.target.value); setprotocolval(false) }} className='text-dark' name="select" id="exampleSelect">
                      <option value="" selected disabled>Select protocol type</option>
                      <option value="http" className='text-dark'>http</option>
                      {/* <option value="https" className='text-dark'>https</option> */}
                    </Input>
                    {protocolval ? <td style={{ color: "red" }}>Please select protocol type</td> : null}
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="input-country"
                    >
                      Add platform
                    </label>
                    <Input type="select" value={tempplatform} onChange={platformfunc} className='text-dark' name="select" id="exampleSelect">
                      <option value="" selected disabled>Choose platform </option>
                      {/* <option value="Platform Oriented" className='text-dark'>Platform Oriented</option> */}
                      <option value="Platform independent" className='text-dark'>Platform independent</option>
                    </Input>
                    {platformval ? <td style={{ color: "red" }}>Please select platform</td> : null}
                  </FormGroup>
                </Col>
              </Row>
              {platform ?
                <Row >
                  <Col md="5">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Select platform
                      </label>
                      <Input type="select" value={platformName} onChange={e => setplatformName(e.target.value)} className='text-dark' name="select" id="exampleSelect">
                        <option value="" selected disabled>Select platform</option>
                        <option value="Jio" className='text-dark'>Jio</option>
                        <option value="Airtel" className='text-dark'>Airtel</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row> : null
              }
              <Row>
                <Col>
                  <Button color="success" size="sm" onClick={OnSumbitObject}>Submit</Button>
                  <Button color="danger" size="sm" onClick={oncancel}>Cancel</Button>
                </Col>
              </Row>
              {/* </Card> */}
            </Col>
          </Row>
        </Card>
      </Container>

    </>
  )
}
