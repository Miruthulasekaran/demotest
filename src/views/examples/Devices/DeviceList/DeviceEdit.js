
import Header from 'components/Headers/Header';
import { contains } from 'jquery';
import React, { useSyncExternalStore, useTransition } from 'react'
import { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import {
  Badge,
  Card,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Col,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,

  Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiService from 'views/examples/Service/ApiService';
export default function DeviceEdit() {
  const history = useHistory();
  const [devicedataCategory, setdeviceCategory] = useState([])
  const [test, settest] = useState()
  const [TempCategory, setTempCategory] = useState("")
  const [Tempvalue, setTempvalue] = useState([])
  const [Deviceprofile, setDeviceprofile] = useState([])
  const [Alarm, setAlarm] = useState([])
  const [Devicename, SetDevicename] = useState("")
  const [DeviceId, SetDeviceId] = useState("")
  const [OnOrganization, setOnOrganization] = useState("")
  const [protocol, setprotocol] = useState("")
  const [platform, setplatform] = useState()
  const [tempplatform, settempplatform] = useState("")
  const [colsize, setcolsize] = useState(12)
  const [image, setimage] = useState()
  const [FinalObj, SetFinalObj] = useState()
  const [device_category, setdevice_category] = useState()
  const [platformName, setplatformName] = useState(null)
  const [organization, setorganization] = useState([])
  const [organizationidObject, setorganizationidObject] = useState({})
  const params = useParams();
  const [devicenameval, setdevicenameval] = useState(false)
  const [deviceidval, setdeviceidval] = useState(false)
  const [deviceidval1, setdeviceidval1] = useState(false)
  const [devicenameval1, setdevicenameval1] = useState(false)
  // const [deviceidval1, setdeviceidval1] = useState(false)
  const [devicecatval, setdevicecatval] = useState(false)
  const [orgval, setorgval] = useState(false)
  const [protocolval, setprotocolval] = useState(false)
  const [platformval, setplatformval] = useState(false)
  const [dataprofile, setdataprofile] = useState([])
  const [orgval1, setorgval1] = useState(false)
  const [Deviceprofile1, setDeviceprofile1] = useState([])
  const [temp, settemp] = useState()
  const [GlobAlarm, setGlobAlarm] = useState([])
  // let  /^(\w+\s?)*\s*$/g = /^(\w+\s?)*\s*$/g;
  // let  /^(\w+\s?)*\s*$/g1 = /^(\w+\s?)*\s*$/g;
  //Ternary sruct
  const [valPresent, setvalPresent] = useState(false)

  const [devDatProf, setdevDatProf] = useState([])

  //Getresponse device id
  const [deviceDetails, setdeviceDetails] = useState([])

  const [Id, setId] = useState()

  const [categoryName_one, setcategoryName_one] = useState("")

  useEffect(() => {
    var url = window.location.pathname
    var idds = url.substring(url.lastIndexOf('/') + 1);
    setId(idds)
    console.log("last one", idds)


    ApiService.getdevice_id(params.id).then((resp) => {
      // movieparsed = JSON.parse(resp);
      // setorganizationprofileedit([resp]);
      // console.log("response", organizationprofileedit);
      // setProfile(resp.organization_profile_name)
      // setArr(resp.custom_data)
      console.log("responsearray", resp.device_category[0].device_data_profile[0].custom_data)
      setdeviceDetails(resp)
      SetDevicename(resp.device_name)
      SetDeviceId(resp.device_mac_id)
      settemp(resp.user_id.user_id)
      setdataprofile(resp.device_profile)
      setdevDatProf(resp.device_category[0].device_data_profile[0].custom_data)
      setDeviceprofile1(resp.device_category[0].device_profile[0].custom_data)
      setGlobAlarm(resp.device_category[0].global_alarm_rule[0].alarm_rules)




      // for setting th category  name 
      setcategoryName_one(resp.device_category[0].category_name)
      // for setting image 
      setimage(resp.device_category[0].device_image)

      // category_name

      ApiService.listCategory().then((resp1) => {


        // console.log("value present", (resp1.find(element => {
        console.log("elementasff", resp.device_category[0].category_name)
        // })))
        let val = resp1.find((element) => element.category_name == resp.device_category[0].category_name)
        console.log("nope", val)

        val == undefined ? setvalPresent(true) : setvalPresent(false)

        // if (resp1.find((element) => element.category_name == resp.device_category[0].category_name)) {

        // val == undefined ?   setTempCategory(): setTempCategory(resp.device_category[0].category_name)

        // }


        setdeviceCategory(resp1);

      })

      setTempCategory(resp.device_category[0].category_name)

      // devicedataCategory.forEach((element) => element.category_name == resp.device_category[0].category_name)

      // console.log("asfsdfzsd", devicedataCategory.find((element) => element.category_name == resp.device_category[0].category_name))

      if (devicedataCategory.find((element) => element.category_name == resp.device_category[0].category_name)) {

        console.log("nopzfzfe", devicedataCategory.find((element) => element.category_name != resp.device_category[0].category_name))

      }


      console.log("category_name23423234", resp.device_category[0].category_name)

      // console.log("frrddd", resp.device_category[0].category_name)

      setTempvalue(resp.device_category[0].device_data_profile)

      // if()

      setDeviceprofile(resp.device_category[0].device_profile)

      setAlarm(resp.device_category[0].global_alarm_rule)

      // settemp(resp.organization_id.organization_name)

      setprotocol(resp.protocol_type)

      setplatform(resp.isPlatform)

      console.log("platform", resp.platform)

      {
        resp.isPlatform ? settempplatform("Platform Oriented") : settempplatform("Platform independent")
      }
      // settempplatform(resp.platform)

      setplatformName(resp.platform)
      setorganizationidObject(resp.user_id)

      // setTempvalue(resp.device_category[0].device_data_profile)
      // setDeviceprofile(resp.device_category[0].device_profile)
      // setAlarm(resp.device_category[0].global_alarm_rule)
      // setimage(resp.device_category[0].device_image)

      setdevice_category(resp.device_category)

    })

    // fetch(`http://127.0.0.1:8088/api/v1/device/${idds}`).then((result) =>    result.json()  )
  }, [])

  useEffect(() => {

    // ApiService.

    ApiService.userlist().then((resp) => {
      setorganization(resp);

    })
    // fetch("http://127.0.0.1:8088/api/v1/organization", {
    // }).then((result) =>    result.json())
  }, [])
  useEffect(() => {


  }, [])

  useEffect(() => {
    Alarm.length >= 1 ? setcolsize(6) : setcolsize(12)
  }, [Alarm])

  let OnCategory = (e) => {

    setTempCategory(e.target.value)
    console.log("this is the temp value", e.target.value)

    let editValue = devicedataCategory.find((value) => value.category_name === e.target.value);

    setdevice_category([editValue])
    console.log("edit value", editValue)
    setTempvalue(editValue.device_data_profile)

    console.log("edit value", editValue)

    setDeviceprofile(editValue.device_profile)

    setAlarm(editValue.global_alarm_rule)
    setdevicecatval(false)
    // setcolsize(6)
    setdevDatProf(editValue.device_data_profile[0].custom_data)
    setDeviceprofile1(editValue.device_profile[0].custom_data)
    setGlobAlarm(editValue.global_alarm_rule[0].alarm_rules)
    // console.log("NanduKumarr", editValue.global_alarm_rule[0].custom_data[0].main_rule.sub_rules);
    console.log("setting", editValue.device_image)
    setimage(editValue.device_image)
    // setimage(URL.createObjectURL(e.target.files[0]))
  }

  // let e=>{setplatform(e.target.value)}

  let platformfunc = (e) => {
    setplatformval(false)
    settempplatform(e.target.value)
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

      updated_by: "test",
      device_mac_id: DeviceId,
      device_name: Devicename,
      device_category: device_category,
      user_id: organizationidObject,
      protocol_type: protocol,
      isPlatform: platform,
      platform: platformName,
      device_profile: dataprofile

    })


  }, [DeviceId, device_category, Devicename, protocol, platform, platformName, organizationidObject, dataprofile])


  let OnSumbitObject = () => {


    console.log("dfzdfzdf", FinalObj)

    if (Devicename.trim() == "") {
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
    else if (dataprofile == "") {
      setorgval1(true)
    }
    else if (tempplatform == "") {
      setprotocolval(true)
    }
    else if (platformName == "") {
      setplatformval(true)
    }
    else {
      ApiService.edit_Device(params.id, FinalObj).then((resp) => {
        if (resp.message) {
          console.log(resp);
          // alert("device name already exists!")
          toast.error('Device added successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        } else {
          toast('Device edited successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          history.push('/admin/Device');

        }
      })
    }
  }
  const [modal, setmodal] = useState(false)
  // for devcie profile
  const [modal1, setmodal1] = useState(false)
  // for global alarm
  const [modal2, setmodal2] = useState(false)
  let toggle = () => {

    setmodal(!modal);
  }

  let toggle1 = () => {

    setmodal1(!modal1);
  }

  let toggle2 = () => {

    setmodal2(!modal2);
  }
  let handleClick = (e) =>{
    setGlobAlarm(e.alarm_rules)
  }



  let organizatioId = (e) => {

    settemp(e)

    let organizatioId = organization.find((value) => value.user_id == e);
    console.log("organizatioId", organizatioId)
    setorganizationidObject(organizatioId)

  }
  // const [test1, settest1] = useState(false)
  function oncancel() {

    history.push('/admin/Device');
  }
  let dynamicFn = (e) => {

    console.log("dataaaa", e.target.name)

    let fnd = dataprofile.find(element => element.parameter.param_name == e.target.name);
    console.log("fndDyan", fnd);

    if (fnd == undefined) {

      let a = {
        "parameter": {
          "param_name": e.target.name,
          "param_value": e.target.value,
          "param_type": e.target.type
        }
      }

      dataprofile.push(a)
    }

    else {

      setdataprofile(dataprofile.map((element) => {

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



    // setdata(data)

  }
  return (
    <>

      <Header />
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
                console.log("bbbbbbbbbbb", item);
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
        <ModalHeader toggle={toggle}>Data profile</ModalHeader>
        <ModalBody>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <tr>
                  <th scope="col" className="text-justify text-dark text-wrap" style={{ width: "20rem" }}><b>Parameter</b></th>

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
      <Container className='mt-4'>
        <Card className='p-3'>
          <CardBody>
            <CardHeader>
              <Row className='mt--4'>
                <Col md="3" >
                  <Card style={{ height: "330px" }}>
                    <CardHeader>
                      <h3 className='text-center'>Device image</h3>
                      <CardBody className='text-justify' style={{ height: "120%" }}>
                        {image == undefined ? <p>Please select category</p> : <img class="text-justify" src={image} style={{ height: "100%", width: "100%", margin: "auto" }} />}
                      </CardBody>
                    </CardHeader>
                  </Card>
                </Col>


                <Col md="9">

                  <Row>
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
                          // onChange={e => SetDevicename(e.target.value)}
                          // value={Devicename}
                          onChange={e => { SetDevicename(e.target.value); setdevicenameval(false); setdevicenameval1(false) }}
                          value={Devicename}
                          id="input-city"
                          placeholder="Enter device name"
                          type="text"

                        />
                        {devicenameval ? <td style={{ color: "red" }}>Please device name</td> : null}
                        {devicenameval1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                      </FormGroup>

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
                          // disabled
                          onChange={e => { SetDeviceId(e.target.value); setdeviceidval(false); setdeviceidval1(false) }}
                          value={DeviceId}
                          id="input-city"
                          placeholder="Enter device Id"
                          type="text"
                        />
                        {deviceidval ? <p style={{ color: "red" }}>Please device id</p> : null}
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

                        {/* {console.log("Aafzsdfzs", TempCategory)} */}

                        {/* {TempCategory} */}

                        {valPresent ? <>
                          <Input onChange={OnCategory} type="select" className='text-dark' id="exampleSelect">
                            <option value="" selected disabled> {`The ${TempCategory} May be deleted or Renamed`}</option>

                            {devicedataCategory.map((item, index) => {

                              return <option key={index} value={item.category_name} className='text-dark'>{item.category_name}</option>

                            })
                            }

                          </Input>
                          {devicecatval ? <p style={{ color: "red" }}>Please device category</p> : null}
                        </> :
                          <>  <Input onChange={OnCategory} value={TempCategory} type="select" className='text-dark' id="exampleSelect">
                            <option value="" selected disabled>Select device category</option>
                            {devicedataCategory.map((item, index) => {

                              return <option key={index} value={item.category_name} className='text-dark'>{item.category_name}</option>

                            })
                            }

                          </Input>
                            {devicecatval ? <p style={{ color: "red" }}>Please device category</p> : null}</>
                        }
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
                          </label>   <i class="fa fa-eye text-success " data-toggle="tooltip" data-placement="top" title="view device profile" onClick={toggle1} aria-hidden="true" ></i>

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
                           {/* <a> <i class="fa fa-eye text-success" data-toggle="tooltip" data-placement="top" title="view global alarm rules" aria-hidden="true" onClick={toggle2} > </i> </a> */}

                          <ol>
                            {
                              console.log("tempvalue", Tempvalue)
                            }
                            {Alarm.map((item, index) => {

                              return <li key={index}>{item.alarm_name}  <a> <i class="fa fa-eye text-success" data-toggle="tooltip" data-placement="top" title="view global alarm rules" aria-hidden="true" onClick={() => { toggle2 (); handleClick(item)}} > </i> </a></li>
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
                          Add user
                        </label>
                        <Input type="select" value={temp} onChange={e => { organizatioId(e.target.value); setorgval(false) }} className='text-dark' name="select" id="exampleSelect">
                          <option value="" selected disabled>Select user</option>
                          {
                            organization.map((item, index) => {

                              return <option key={index} value={item.user_id} selected >{item.username}</option>
                            })
                          }
                        </Input>
                        {orgval ? <p style={{ color: "red" }}>Please add user</p> : null}
                      </FormGroup>
                    </Col>

                  </Row>
                  <Row>

                    {console.log("asdASf", dataprofile)}
                    {dataprofile.map((item, index) => {

                      { console.log("sdgfszgdfG", item.parameter.param_name) }

                      return <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            {item.parameter.param_name}
                          </label>
                          <Input type={item.parameter.param_type} defaultValue={item.parameter.param_value} onBlur={e => dynamicFn(e)} className='text-dark' name={item.parameter.param_name} id="exampleSelect123">

                          </Input>
                          {/* {platformval ? <p style={{ color: "red" }}>* Please  fill {item.parameter.param_name}</p> : null} */}
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
                        {protocolval ? <p style={{ color: "red" }}>Please select protocol type</p> : null}
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
                        {platformval ? <p style={{ color: "red" }}>Please select platform</p> : null}
                      </FormGroup>
                    </Col>

                  </Row>

                  {platform ?

                    <Row >
                      <Col md="6">
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
                </Col>

              </Row>
            </CardHeader>
          </CardBody>
        </Card>
      </Container>

    </>
  )
}
