

import Header from 'components/Headers/Header';
import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Table,
  Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import ApiService from 'views/examples/Service/ApiService';
export default function DeviceCategoryAdd() {

  const [updateddevice, setupdateddevice] = useState(true)
  const [deviceprofile, setdeviceprofile] = useState([])
  useEffect(() => {

    ApiService.deviceProfileList().then((resp) => {
      setdeviceprofile(resp);
    })
  }, [])

  const [devicedataprofile, setdevicedataprofile] = useState([])

  useEffect(() => {

    ApiService.listDevice_dataProfile().then((resp) => {

      setdevicedataprofile(resp);
    })


    // fetch("http://127.0.0.1:8088/api/v1/device_data_profile", {
    // }).then((result) => {
    //   result.json().then((resp) => {

    //     console.log("device data profile", resp);
    //   })
    // })


  }, [])

  const [alarmrule, setalarmrule] = useState([])
  useEffect(() => {

    ApiService.AlarmRuleGet().then((resp) => {
      setalarmrule(resp);
      console.log("xxxxxxxxxxxx", resp);
    })

    // fetch("http://127.0.0.1:8088/api/v1/alarm_rule", {

    // }).then((result) => {
    //   result.json().then((resp) => {

    //     console.log("alarm-rule", resp);
    //   })
    // })
  }, [])


  //For model 

  //formodel 
  const [modal, setmodal] = useState(false)
  // for devcie profile
  const [modal1, setmodal1] = useState(false)
  // for global alarm
  const [modal2, setmodal2] = useState(false)


  //For array

  // dev data profile
  const [devDatProf, setdevDatProf] = useState([])

  //device profile
  const [dataprofile, setdataprofile] = useState([])

  // for global alarm
  const [GlobAlarm, setGlobAlarm] = useState([])


  // onChange={e => setOnDataTypevalue(e.target.value)} 
  const [Categoryname, setCategoryname] = useState("")
  const [device, setdevice] = useState("")
  const [data, setdata] = useState("")
  const [alarm, setalarm] = useState("")
  const [Paramvalue, setParamValue] = useState([])
  const [CreateObject, setCreateObject] = useState([])
  const [deviceprofileArray, setdeviceprofileArray] = useState([])
  const [deiveprofileTemp, setdeiveprofileTemp] = useState("")
  const [createObj, setcreateObj] = useState()
  const [EditId, setEditId] = useState()
  const [OnDeviceDataProfile, setOnDeviceDataProfile] = useState([])
  const [id, setid] = useState(0);
  const [FinalArr, setFinalArr] = useState([])
  const [alarmArray, setalarmArray] = useState([])
  const [FinalObj, SetFinalObj] = useState()
  const history = useHistory();
  const [dev, set] = useState({})
  const [devdataProfile, setdevdataProfile] = useState({})
  const [devALarm, setdevALarm] = useState([])
  const [deviceProfileSelect, setdeviceProfileSelect] = useState("")
  const [deviceDataProfileSelect, setdeviceDataProfileSelect] = useState("")
  const [deviceAlarmSelect, setdeviceAlarmSelect] = useState("")
  const [deviceAlarmSelect1, setdeviceAlarmSelect1] = useState([])
  const [imageVal, setimageVal] = useState(false)
  const [CatNameVal, setCatNameVal] = useState(false)
  const [CatNameVal1, setCatNameVal1] = useState(false)
  const [devProVal, setdevProVal] = useState(false)
  const [devDataProVal, setdevDataProVal] = useState(false)
  const [devAlarmVal, setdevAlarmVal] = useState(false)
  const [imageset, setimage] = useState()
  const [category1, setcategory1] = useState()
  const [alarmparams, setalarmparams] = useState([])
  const [category, setcategory] = useState([])
  // let /^(\w+\s?)*\s*$/g = /^(\w+\s?)*\s*$/g;
  let file = document.getElementById("fileName");
  const [datas, setdatas] = useState([])
  let setonChangeImage = (e) => {
    console.log("iconimage", e.target.value)
    const data = new FileReader()


    data.readAsDataURL(e.target.files[0])
    setimageVal(false)
    var fileName = file.value,
      idxDot = fileName.lastIndexOf(".") + 1,
      extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile == "jpg" || extFile == "jpeg" || extFile == "png" || extFile == "gif" || extFile == "jfif" || extFile == "webp") {
      data.addEventListener('load', () => {
        setimage(data.result)
      })
    } else {
      alert("Only jpg/jpeg,png,gif,jfif,webp files are allowed!");
      file.value = "";
    }
  };
  let deviceprofileedit = (e) => {

    setdeiveprofileTemp(e)
    let Finddeviceprofile = deviceprofileArray.find((value) => value.deviceprofileName === e);
    console.log("e", Finddeviceprofile);
    let FinddeviceDataprofile = devicedataprofile.find((value) => value.data_profile_name === e);
    setupdateddevice(false)
  }
  let updateDevice = () => {
    console.log("device", device)
    let Finddeviceprofile = deviceprofile.find((value) => value.device_profile_name === device);
    console.log("findprofile", Finddeviceprofile)
    setEditId(Finddeviceprofile.device_profile_id)
    setdevice(Finddeviceprofile.deviceprofileName)
    let setcreateObj = { deviceprofileId: Finddeviceprofile.device_profile_id, deviceprofileName: Finddeviceprofile.device_profile_name, custom_data: Finddeviceprofile.custom_data }
    console.log("creating", setcreateObj)
    setdeviceprofileArray(deviceprofileArray.map((element) => {
      // console.log("element",element.deviceprofileName)
      if (element.deviceprofileName === deiveprofileTemp) {
        console.log("element", element)
        console.log("setcreateObj", setcreateObj)
        return { ...element, deviceprofileId: Finddeviceprofile.device_profile_id, deviceprofileName: Finddeviceprofile.device_profile_name, custom_data: Finddeviceprofile.custom_data }
      }
      return element;
    }))
    console.log("element", deviceprofileArray)
  }
  let ondeleteprofile = (e) => {
    setdeviceprofileArray((EditArray) => {
      return EditArray.filter((_, i) => i !== e);
    });
  }
  let ondeleteDataProfile = (e) => {
    setOnDeviceDataProfile((EditArray) => {
      return EditArray.filter((_, i) => i !== e);
    });
  }
  let ondeletealarm = (e) => {
    setalarmArray((EditArray) => {
      return EditArray.filter((_, i) => i !== e);
    });
  }
  //  let 
  function cancel() {
    history.push('/admin/DeviceCategory');
  }

  let deviceProfile = (e) => {
    let Finddeviceprofile = deviceprofile.find((value, i) => value.device_profile_name === e);
    setdataprofile(Finddeviceprofile.custom_data)

    console.log("Finddeviceprofile", Finddeviceprofile.custom_data)
    let creatdevice = { deviceprofileId: Finddeviceprofile.device_profile_id, deviceprofileName: Finddeviceprofile.device_profile_name, custom_data: Finddeviceprofile.custom_data }
    console.log("creatdevice", creatdevice)
    console.log("deviceprofileArray", deviceprofileArray)
    set(creatdevice)
    console.log("derrrv", dev)
    setdeviceProfileSelect(e)
    // setdevProVal(false)


  }

  let dataprofileSelect;
  let Devicedataprofile = (e) => {
    setcategory1(e)

    let FinddeviceDataprofile = devicedataprofile.find((value, i) => value.data_profile_name === e);
    console.log("setcategory1", FinddeviceDataprofile.data_profile_name);
    dataprofileSelect = FinddeviceDataprofile.data_profile_name
    console.log("dataprofileSelect", dataprofileSelect);
    setdevDatProf(FinddeviceDataprofile.custom_data)
    console.log("devicedataprofile", FinddeviceDataprofile.custom_data);
    let createDatadevice = { deviceDataprofileId: FinddeviceDataprofile.device_data_profile_id, deviceprofileName: FinddeviceDataprofile.data_profile_name, custom_data: FinddeviceDataprofile.custom_data }
    console.log("createDatadevice", createDatadevice);
    setdevdataProfile(createDatadevice)
    console.log("devdataProfile", devdataProfile)
    setdeviceDataProfileSelect(e)

    console.log("setdeviceAlarmSelect1", dataprofileSelect);
    setdevDataProVal(false)
    fetch(`http://192.168.0.113:8090/api/v1/data_profile_alarm/${dataprofileSelect}`, {
    }).then((result) => {
      result.json().then((resp) => {
        setdatas(resp)
        setcategory(resp)
        setdeviceAlarmSelect1(resp);

      })
    })

      ;
    // setPrimaryObj((oldvaluesPrimary) => {
    //   return [...oldvaluesPrimary, Finddeviceprofile]
    // })
    // PrimaryUser.find(vendor => vendor['id'] === Finddeviceprofile.user_id) !== undefined ? window.alert("User already exists") :
    //   setPrimaryUser((oldvalues) => {
    //     return [...oldvalues, primaryObj]
    //   })
    setdeviceAlarmSelect("")
    // setGlobAlarm("")
    setalarmparams([])

  }

  useEffect(() => {
    console.log("cccccccccccccccc", dataprofileSelect);

  }, [category])


  let checkingVriable1;

  let Devicealarm = (e) => {
    let Findalarm = alarmrule.find((value, i) => value.alarm_name === e);
    console.log("Findalarm",Findalarm.alarm_rules);
    let Finddeviceprofile = category.find((value, i) => value.alarm_name === e);
    setalarmparams((oldvalues) => {
      return [...oldvalues, Finddeviceprofile]
    })
    // setdevALarm(alarmparams)
    console.log("fiprimaryndedvalue ", Finddeviceprofile)
    let check = category.filter((value) => value.alarm_name != Finddeviceprofile.alarm_name);
    console.log("chaeckinggg", alarmparams);
    setcategory(category.filter((value) => value.alarm_name != Finddeviceprofile.alarm_name))
    console.log("createAlarm", e)
    setGlobAlarm(Findalarm.alarm_rules)
    console.log(Findalarm.alarm_rules);
    let createAlarm = { deviceAlarmId: Findalarm.global_alarm_id, alarm_name: Findalarm.alarm_name, alarm_notify: Findalarm.alarm_notify, alarm_rules: Findalarm.alarm_rules, data_profile: Findalarm.data_profile }
    console.log("createAlarm", createAlarm)
    // console.log("devALarm", devALarm)
    setdeviceAlarmSelect(e)
    setdevAlarmVal(false)
    document.getElementById("alrmselect").value = "select one"
  }


  const [dummyMap, setdummymap] = useState()
  let deleteAlarms = (id) => {

    // console.log("Ondelete primary user", e)
    // setPrimaryObj((newPrimaryObj) => {
    //   return newPrimaryObj.filter((value) => value.user_id !== e)
    // })
    // let Finddeviceprofile = users.find((value, i) => {
    //   console.log("valuesss", value)
    //   return value.user_id === e
    // });

    setalarmparams(alarmparams.filter((value, i) => value.global_alarm_id != id));
    let checkdelete = datas.find(value => value.global_alarm_id == id)


    //flter will eturn array of objects
    console.log("deleting", datas)

    console.log("deleting", datas)



    setcategory((old) => {

      return [...old, checkdelete]
    })


    console.log("e", category)
  }

  useEffect(() => {
    console.log("deviceprofileArray", dev);
    console.log("deviceDataprofile", devdataProfile)
    // console.log("alarmArray", devALarm)
  }, [dev, devdataProfile])


  let toggle = () => {

    setmodal(!modal);
  }

  let toggle1 = () => {

    setmodal1(!modal1);
  }

  let toggle2 = () => {

    setmodal2(!modal2);
  }
  useEffect(() => {
    console.log("lll", dev)
    SetFinalObj({
      created_by: "test",
      updated_by: "test",
      category_name: Categoryname,
      device_image: imageset,
      device_profile: [dev],
      device_data_profile: [devdataProfile],
      global_alarm_rule: alarmparams
    })
    console.log("hhhhh", alarmparams)
  }, [dev, devdataProfile, Categoryname, imageset, alarmparams])


  let OnSumbit = () => {
    console.log("OnSumbit", imageset)
    if (imageset == undefined && Categoryname == "" && deviceProfileSelect == "" && deviceDataProfileSelect == "" && deviceAlarmSelect == "") {
      setimageVal(true)
      setCatNameVal(true)
      setdevProVal(true)
      setdevDataProVal(true)
      setdevAlarmVal(true)
    }
    else if (imageset == undefined) {
      setimageVal(true)
    }
    else if (Categoryname.trim() == "") {
      setCatNameVal(true)
    }
    else if (!/^(\w+\s?)*\s*$/g.test(Categoryname)) {
      setCatNameVal1(true)
    }
    else if (deviceProfileSelect == "") {
      setdevProVal(true)
    }
    else if (deviceDataProfileSelect == "") {
      setdevDataProVal(true)
    }
    else if (deviceAlarmSelect == "") {
      setdevAlarmVal(true)
    }
    else {

      console.log("FinalObj", FinalObj)

      ApiService.AddCategory(FinalObj).then((resp) => {
        if (resp.message) {

          // alert("category name already exists!")
          toast.error('Category name already exists', {
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
          console.log("respdsvsdvsdv", resp);
          toast('Category added successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          history.push('/admin/DeviceCategory');
        }


      })

    }

  }


  return (
    <>


      {/* for alarm */}
      <Modal size="md" isOpen={modal2} toggle={toggle2} backdrop="static" >
        <ModalHeader toggle={toggle2}>Device alarm</ModalHeader>
        <ModalBody>
          <Table className="align-items-center table-flush" responsive >
            <thead className="thead-light">
              <tr>
                <tr>
                  <th className="text-center text-dark col-3 text-wrap" style={{ width: "12rem" }} ><b>Parameter</b></th>
                  {/* <th className="text-center text-dark col-3" style={{ width: "6rem" }}><b>Data Type</b></th> */}
                  <th className="text-center text-dark col-3 text-wrap" style={{ width: "12rem" }}><b>Alarm Condition</b></th>
                  <th className="text-center text-dark col-3 text-wrap" style={{ width: "12rem" }}><b>Alarm Value</b></th>
                  <th className="text-center text-dark col-3 text-wrap" style={{ width: "12rem" }} ><b>Alarm rulesde</b></th>

                </tr>
              </tr>
            </thead>
            <tbody>
              <tr>

                {
                  GlobAlarm.map((item) => {
                    return <>   <tr >
                      <td className="text-justify text-dark col-3 text-wrap" style={{ width: "12rem" }}>{item.alarm_parameter}</td>
                      {/* <td className="text-justify text-dark col-3" style={{ width: "6rem" }}>{item.data_type}</td> */}
                      <td className="text-justify text-dark col-3 text-wrap" style={{ width: "12rem" }} >{item.alarm_condition}</td>
                      <td className="text-justify text-dark col-3 text-wrap" style={{ width: "12rem" }}>{item.alarm_value}</td>
                      <td className="text-justify text-dark col-3 text-wrap" style={{ width: "12rem" }}>{item.rule}</td>
                    </tr>
                    </>

                  })
                }


              </tr>
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
      <Modal size="md" isOpen={modal1} toggle={toggle1} backdrop="static" >
        <ModalHeader toggle={toggle1}>Device profile</ModalHeader>
        <ModalBody>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <tr>
                  <th scope="col-4" className="text-center text-dark col-1" style={{ textAlign: "center" }}><b>S.No</b></th>
                  <th scope="col-4" className="text-center text-dark col-6" style={{ textAlign: "center" }}><b>Parameter</b></th>
                  <th scope="col-4" className="text-center text-dark col-5" style={{ textAlign: "center" }}><b>Data Type</b></th>
                </tr>
              </tr>
            </thead>
            <tbody>
              {dataprofile.map((item, index) => {
                return <tr key={index}>
                  <>
                    <tr >
                      <td className="text-center text-dark col-1" style={{ textAlign: "center" }}>{index + 1}</td>
                      <td className="text-center text-dark col-6" style={{ textAlign: "center" }}>{item.parameter}</td>
                      <td className="text-center text-dark col-5" style={{ textAlign: "center" }}>{item.data_type}</td>
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
      <Modal size="md" isOpen={modal} toggle={toggle} backdrop="static" >
        <ModalHeader toggle={toggle}>Data profile</ModalHeader>
        <ModalBody>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <tr>
                  <th scope="col" className="text-center text-dark col-1" style={{ textAlign: "center" }}><b>S.No</b></th>
                  <th scope="col" className="text-center text-dark col-11" style={{ textAlign: "center" }}><b>Parameter</b></th>

                </tr>
              </tr>
            </thead>
            <tbody>
              {devDatProf.map((item, index) => {
                return <tr key={index}>
                  <>
                    <tr >
                      <td className="text-center text-dark  " style={{ textAlign: "center" }}>{index + 1}</td>
                      <td className="text-center text-dark col-11" style={{ textAlign: "center" }}>{item.parameter}</td>

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
              <Button color="danger" className='btn-sm' onClick={toggle}>Close</Button>
            </>
          }

        </ModalFooter>
      </Modal>

      <Header />
      <Container className="mt-4" fluid>
        <Row>
          <Col className="order-xl-1" xl="4">
            <Card style={{ height: "500px" }}>
              <CardHeader>
                <h3 className='text-center'>Device image</h3>
                <CardBody className='text-center'>
                  {console.log("Device Image", imageset)}
                  {imageset == undefined ? <>  </> :
                    <img class="text-center" src={imageset} style={{ height: "200px", width: "200px" }} />}

                  <input type="file" onChange={setonChangeImage} className="form-control mt-2" placeholder='Enter the Icon name' id="fileName" accept=".jpg,.jpeg,.png,.gif,.jfif,.webp" />
                  {imageVal ? <td style={{ color: "red" }}>Please select image</td> : null}
                </CardBody>
              </CardHeader>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow" style={{ height: "500px" }} >
              <CardBody >
                <Form>
                  <div className="pl-lg-4">
                    <Row >
                      {/* <Col md="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Upload Image
                          </label>

                          <input type="file" onChange={setonChangeImage} className="form-control" placeholder='Enter the Icon name' id="fileName" accept=".jpg,.jpeg,.png" />
                          {imageVal ? <td style={{ color: "red" }}>* Please Select Image</td> : null}
                        </FormGroup>

                      </Col> */}
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Category name
                          </label>
                          <Input
                            className="form-control-alternative"
                            onChange={e => { setCategoryname(e.target.value); setCatNameVal(false); setCatNameVal1(false) }}

                            value={Categoryname}
                            id="input-city"
                            placeholder="Enter category name"
                            type="text"

                          />
                          {CatNameVal ? <td style={{ color: "red" }}>Please enter category name</td> : null}
                          {CatNameVal1 ? <td style={{ color: "red" }}>Please remove invaild characters</td> : null}
                        </FormGroup>

                      </Col>

                    </Row>
                    <Row className='mt-3'>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Device profile
                          </label>

                          {dataprofile == "" ? null : <a> <i class="fa fa-eye text-success ml-2" data-toggle="tooltip" data-placement="top" title="view device profile" onClick={toggle1} aria-hidden="true"> </i> </a>}
                          <Input type="select" value={deviceProfileSelect} onChange={e => { deviceProfile(e.target.value); setdevProVal(false) }} className='text-dark' name="select" id="exampleSelect">
                            <option value="" selected disabled>Select device profile</option>
                            {deviceprofile.map((item, index) => {
                              return <option key={index} value={item.device_profile_name} className='text-dark'>{item.device_profile_name}</option>
                            })
                            }
                          </Input>
                          {devProVal ? <td style={{ color: "red" }}>Select device profile</td> : null}
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Data profile
                          </label>
                          {devDatProf == "" ? null : <a> <i class="fa fa-eye text-success ml-2" data-toggle="tooltip" data-placement="top" title="view device data profile" onClick={toggle} aria-hidden="true"> </i> </a>}

                          <Input type="select" value={deviceDataProfileSelect} onChange={e => { Devicedataprofile(e.target.value) }} className='text-dark' name="select" id="exampleSelect">
                            <option value="" selected disabled>Select data profile</option>
                            {devicedataprofile.map((item, index) => {
                              return <option key={index} value={item.data_profile_name} className='text-dark'>{item.data_profile_name}</option>
                            })
                            }
                          </Input>

                          {devDataProVal ? <td style={{ color: "red" }}>Select data profile</td> : null}

                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Alarm rules
                          </label>

                          <Input type="select" onChange={e => Devicealarm(e.target.value)} className='text-dark' name="select" id="alrmselect">
                            <option value="select one" selected disabled>Select alarm</option>
                            {category.map((item, index) => {
                              console.log("categorycategory", item);
                              return <option key={index} value={item.alarm_name} className='text-dark'>{item.alarm_name}</option>
                            })
                            }
                          </Input>

                          {
                            alarmparams.map((item, index) => {
                              console.log("itemitemitemitemitemitemitem", item.alarm_name);
                              return <p
                                key={index}
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                {index + 1 + ")"} {item.alarm_name} <i class="fa fa-trash text-danger ml-3" onClick={() => deleteAlarms(item.global_alarm_id)}></i>
                                {GlobAlarm == "" ? null : <a> <i class="fa fa-eye text-success ml-2" data-toggle="tooltip" data-placement="top" title="view global alarm rules" onClick={toggle2} aria-hidden="true"> </i> </a>}
                              </p>
                              // return <option value={item.alarm_name} className='text-dark'>{item.alarm_name}</option>
                            })
                          }
                          {/* <p
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            {deviceAlarmSelect} <i class="fa fa-trash text-danger ml-3"></i>
                          </p> */}

                          {devAlarmVal ? <td style={{ color: "red" }}>Select alarm</td> : null}
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
                <Row className='float-right mb-5'>
                  <Col>
                    <Button color="success" className='btn-success' size="sm" onClick={OnSumbit}>Submit</Button>
                    <Button color="danger" className='btn-success ' size="sm" onClick={cancel}>cancel</Button>
                  </Col>
                </Row>
                <div >
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}